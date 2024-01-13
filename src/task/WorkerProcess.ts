import { ConductorLogger, noopLogger } from "../common";
import { WorkerInterface } from "./WorkerInterface";
import { Task, TaskResourceApi, TaskResult, TaskResultStatusEnum } from "../../openapi/api";
import { Poller } from "./Poller";

import {
  DEFAULT_POLL_INTERVAL,
  DEFAULT_BATCH_POLLING_TIMEOUT,
  DEFAULT_CONCURRENCY,
} from "./constants";

import { WorkerErrorHandler, WorkerProcessOptions, WorkerProcessConfig } from "./types";
import { optionEquals } from "./helpers";

const DEFAULT_ERROR_MESSAGE = "An unknown error occurred";
const MAX_RETRIES = 3;

//eslint-disable-next-line
export const noopErrorHandler: WorkerErrorHandler = (__error: Error) => {};

const defaultRunnerOptions: Required<WorkerProcessOptions> = {
  workerID: "",
  pollInterval: DEFAULT_POLL_INTERVAL,
  domain: undefined,
  concurrency: DEFAULT_CONCURRENCY,
  batchPollingTimeout: DEFAULT_BATCH_POLLING_TIMEOUT,
};

/**
 * Responsible for polling and executing tasks from a queue.
 *
 * Because a `poll` in conductor "pops" a task off of a conductor queue,
 * each runner participates in the poll -> work -> update loop.
 * We could potentially split this work into a separate "poller" and "worker" pools
 * but that could lead to picking up more work than the pool of workers are actually able to handle.
 *
 */
export class WorkerProcess {
  taskResource: TaskResourceApi;
  worker: WorkerInterface;
  errorHandler: WorkerErrorHandler;
  
  private logger: ConductorLogger;
  private options: WorkerProcessOptions;
  private poller: Poller<Task>;

  constructor({
    worker,
    taskResource,
    options,
    logger = noopLogger,
    onError: errorHandler = noopErrorHandler,
  }: WorkerProcessConfig) {
    this.taskResource = taskResource;
    this.logger = logger;
    this.worker = worker;
    this.options = { ...defaultRunnerOptions, ...options };
    this.errorHandler = errorHandler;
    this.poller = new Poller(
      worker.taskDefName,
      this.batchPoll,
      this.executeTask,
      {
        concurrency: worker.concurrency ?? options.concurrency,
        pollInterval: worker.pollInterval ?? options.pollInterval,
      },
      this.logger
    );
  }

  get isPolling() {
    return this.poller.isPolling;
  }

  /**
   * Starts polling for work
   */
  startPolling = () => {
    this.poller.startPolling();
    this.logger.info(
      `TaskWorker ${this.worker.taskDefName} initialized with concurrency of ${this.poller.options.concurrency} and poll interval of ${this.poller.options.pollInterval}`
    );
  };
  /**
   * Stops Polling for work
   */
  stopPolling = async () => {
    await this.poller.stopPolling();
  };

  updateOptions(options: Partial<WorkerProcessOptions>) {
    const newOptions = { ...this.options, ...options };
    const isOptionsUpdated = !optionEquals(this.options, newOptions);

    if (isOptionsUpdated) {
      this.poller.updateOptions({
        concurrency: newOptions.concurrency,
        pollInterval: newOptions.pollInterval,
      });
      this.logger.info(
        `TaskWorker ${this.worker.taskDefName} configuration updated with concurrency of ${this.poller.options.concurrency} and poll interval of ${this.poller.options.pollInterval}`
      );
    }

    this.options = newOptions;
  }

  get getOptions(): WorkerProcessOptions {
    return this.options;
  }

  private batchPoll = async (count: number): Promise<Task[]> => {
    const { workerID } = this.options;
    const tasks = await this.taskResource.batchPoll(
      this.worker.taskDefName,
      workerID,
      this.worker.domain ?? this.options.domain,
      count,
      this.options.batchPollingTimeout ?? 100 // default batch poll defined in the method
    );
    return tasks;
  };

  updateTaskWithRetry = async (task: Task, taskResult: TaskResult) => {
    const { workerID } = this.options;
    let retryCount = 0;
    while (retryCount < MAX_RETRIES) {
      try {
        await this.taskResource.updateTask({
          ...taskResult,
          workerId: workerID,
        });
        return;
      } catch (error: unknown) {
        this.errorHandler(error as Error, task);
        this.logger.error(
          `Error updating task ${taskResult.taskId} on retry ${retryCount}`,
          error
        );
        retryCount++;
        await new Promise((r) => setTimeout(() => r(true), retryCount * 10));
      }
    }
    this.logger.error(
      `Unable to update task ${taskResult.taskId} after ${retryCount} retries`
    );
  };

  private executeTask = async (task: Task) => {
    try {
      const result = await this.worker.execute(task);
      await this.updateTaskWithRetry(task, {
        ...result,
        workflowInstanceId: task.workflowInstanceId!,
        taskId: task.taskId!,
      });
      this.logger.debug(`Task has executed successfully ${task.taskId}`);
    } catch (error: unknown) {
      await this.updateTaskWithRetry(task, {
        workflowInstanceId: task.workflowInstanceId!,
        taskId: task.taskId!,
        reasonForIncompletion:
          (error as Record<string, string>)?.message ?? DEFAULT_ERROR_MESSAGE,
        status: TaskResultStatusEnum.Failed,
        outputData: {},
      });
      this.errorHandler(error as Error, task);
      this.logger.error(`Error executing ${task.taskId}`, error);
    }
  };

  handleUnknownError = (unknownError: unknown) => {
    let message = "";
    let stack: string | undefined = "";
    if ((unknownError as Error).stack) {
      stack = (unknownError as Error).stack;
    }
    if ((unknownError as Error).message) {
      message = (unknownError as Error).message;
    }
    this.logger.error(
      `Error for ${this.worker.taskDefName}: error: ${message}, stack: ${stack}`
    );
  };
}
