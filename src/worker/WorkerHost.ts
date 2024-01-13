import * as os from 'os';

import { WorkerErrorHandler, WorkerProcessOptions } from "./types";
import { WorkerProcess, noopErrorHandler } from "./WorkerProcess";
import { WorkerInterface } from "./WorkerInterface";
import { ConductorClient, ConductorLogger, DefaultLogger } from "../common";

import {
    DEFAULT_POLL_INTERVAL,
    DEFAULT_BATCH_POLLING_TIMEOUT,
    DEFAULT_CONCURRENCY,
} from "./constants";

export type WorkerHostOptions = WorkerProcessOptions;

export interface WorkerHostConfig {
    logger?: ConductorLogger;
    options?: Partial<WorkerHostOptions>;
    onError?: WorkerErrorHandler;
}

const defaultHostOptions: Required<WorkerHostOptions> = {
    workerID: "",
    pollInterval: DEFAULT_POLL_INTERVAL,
    domain: undefined,
    concurrency: DEFAULT_CONCURRENCY,
    batchPollingTimeout: DEFAULT_BATCH_POLLING_TIMEOUT,
};

function workerId(options: Partial<WorkerHostOptions>) {
    return options.workerID ?? os.hostname();
}

/**
 * Responsible for initializing and managing the runners that poll and work different task queues.
 */
export class WorkerHost {
    private polling: boolean = false;

    readonly options: Required<WorkerHostOptions>;
    private readonly client: ConductorClient;
    private readonly logger: ConductorLogger;
    private readonly errorHandler: WorkerErrorHandler;

    private workers: Array<WorkerInterface>;
    private workerRunners: Map<string, WorkerProcess> = new Map();

    constructor(client: ConductorClient, workers: Array<WorkerInterface>, config: WorkerHostConfig = {}) {
        if (!workers) {
            throw new Error(
                "No workers supplied to WorkerHost. Please pass an array of workers."
            );
        }

        this.client = client;
        this.logger = config.logger ?? new DefaultLogger();
        this.errorHandler = config.onError ?? noopErrorHandler;

        this.workers = workers;

        const providedOptions = config.options ?? {};

        this.options = {
            ...defaultHostOptions,
            ...providedOptions,
            workerID: workerId(providedOptions),
        };
    }

    private workerManagerWorkerOptions = (worker: WorkerInterface): Required<WorkerHostOptions> => {
        return {
            ...this.options,
            concurrency: worker.concurrency ?? this.options.concurrency,
            pollInterval: worker.pollInterval ?? this.options.pollInterval,
            domain: worker.domain ?? this.options.domain,
        };
    };

    get isPolling() {
        return this.polling;
    }

    updatePollingOptionForWorker = (workerTaskDefName: string, options: Partial<WorkerHostOptions>) => {
        const maybeRunner = this.workerRunners.get(workerTaskDefName);

        if (maybeRunner != null) {
            maybeRunner.updateOptions(options);
        } else {
            this.logger.info(`No runner found for worker with taskDefName: ${workerTaskDefName}`);
        }
    };

    /**
     * new options will get merged to existing options
     * @param options new options to update polling options
     */
    updatePollingOptions = (options: Partial<WorkerHostOptions>) => {
        this.workers.forEach((worker) => {
            const newOptions = {
                ...this.workerManagerWorkerOptions(worker),
                ...options,
            };

            this.updatePollingOptionForWorker(worker.taskDefName, newOptions);
        });

        this.options.concurrency = options.concurrency ?? this.options.concurrency;
        this.options.pollInterval = options.pollInterval ?? this.options.pollInterval;
    };

    sanityCheck = () => {
        if (this.workers.length === 0) {
            throw new Error("No workers supplied to WorkerHost");
        }
        const workerIDs = new Set();
        for (const item of this.workers) {
            if (workerIDs.has(item.taskDefName)) {
                throw new Error(`Duplicate worker taskDefName: ${item.taskDefName}`);
            }

            workerIDs.add(item.taskDefName);
        }
    };

    /**
     * Start polling for tasks
     */
    startPolling = () => {
        this.sanityCheck();
        this.workers.forEach((worker) => {
            const options = this.workerManagerWorkerOptions(worker);
            const runner = new WorkerProcess({
                worker,
                options,
                taskResource: this.client.taskResource,
                logger: this.logger,
                onError: this.errorHandler,
            });

            runner.startPolling();
            
            this.workerRunners.set(worker.taskDefName, runner);
        });

        this.polling = true;
    };

    /**
     * Stops polling for tasks
     */
    stopPolling = async () => {
        for (const [workerTaskDefName, runner] of this.workerRunners) {
            this.logger.debug(`Stopping taskDefName=${workerTaskDefName}`);
        
            await runner.stopPolling();
        
            this.workerRunners.delete(workerTaskDefName);
        }

        this.polling = false;
    };
}
