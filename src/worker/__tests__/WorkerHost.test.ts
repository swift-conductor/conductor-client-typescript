import { expect, describe, test, jest } from "@jest/globals";
import { customTask, WorkflowManager } from "../../core";
import { ConductorClient } from "../../common";
import { WorkerHost, WorkerInterface } from "../index";
import { mockLogger } from "./mockLogger";
import { TaskResultStatusEnum, WorkflowStatusEnum } from "../../../openapi/api";

const BASE_TIME = 500;

describe("WorkerHost", () => {
    const client = new ConductorClient();

    jest.setTimeout(15000);

    test("Should run workflow with worker", async () => {
        const manager = new WorkflowManager(client);

        const workflowId = await manager.startWorkflow({
            name: "WorkerHostTest",
            input: {},
            version: 1
        });

        const worker: WorkerInterface = {
            taskDefName: "typescript-custom-task",
            execute: async () => {
                return {
                    outputData: {
                        hello: "From your worker",
                    },
                    status: TaskResultStatusEnum.Completed,
                };
            },
        };

        const host = new WorkerHost(client, [worker], {
            options: { pollInterval: BASE_TIME },
        });

        host.startPolling();
        await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 3));
        await host.stopPolling();

        const workflowStatus = await client.workflowResource.getExecutionStatus(workflowId, false);
        expect(workflowStatus.status).toEqual(WorkflowStatusEnum.Completed);
    });


    test("On error it should call the errorHandler provided", async () => {
        const manager = new WorkflowManager(client);

        await manager.startWorkflow({
            name: "WorkerHostTestE",
            input: {},
            version: 1,
        });

        const worker: WorkerInterface = {
            taskDefName: "workerhost-error-test",
            execute: async () => {
                throw Error("This is a forced error");
            },
        };

        const errorHandler = jest.fn();

        const host = new WorkerHost(client, [worker], {
            onError: errorHandler,
            options: { pollInterval: BASE_TIME },
        });

        host.startPolling();
        await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 4));
        await host.stopPolling();

        expect(errorHandler).toBeCalledTimes(1);
    });


    test("If no error handler provided. it should just update the task", async () => {
        const manager = new WorkflowManager(client);

        const workflowId = await manager.startWorkflow({
            name: "WorkerHostTestE",
            version: 1,
            input: {},
        });

        const worker: WorkerInterface = {
            taskDefName: "workerhost-error-test",
            execute: async () => {
                throw Error("This is a forced error");
            },
        };

        const host = new WorkerHost(client, [worker], {
            options: { pollInterval: BASE_TIME },
        });

        host.startPolling();
        await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 10));
        await host.stopPolling();

        const workflowStatus = await client.workflowResource.getExecutionStatus(workflowId, false);
        expect(workflowStatus.status).toEqual(WorkflowStatusEnum.Failed);
    });

    test("multi worker example", async () => {
        const manager = new WorkflowManager(client);

        // just create a bunch of worker names
        const workerNames: string[] = Array.from({ length: 3 })
            .fill(0)
            .map((_, i: number) => `taskman-multi-${1 + i}`);

        // names to actual workers
        const workers: WorkerInterface[] = workerNames.map((name) => ({
            taskDefName: name,
            execute: async () => {
                return {
                    outputData: {
                        hello: "From your worker",
                    },
                    status: TaskResultStatusEnum.Completed,
                };
            },
        }));

        //create the manager with initial configurations
        const host = new WorkerHost(client, workers, {
            options: { pollInterval: BASE_TIME, concurrency: 2 },
            // logger: console,
        });

        // start polling
        host.startPolling();

        expect(host.isPolling).toBeTruthy();

        const workflowName = "WorkerHostTestMulti";

        // increase polling speed
        host.updatePollingOptions({ concurrency: 4 });

        // create the workflow where we will run the test
        await manager.registerWorkflow({
            name: workflowName,
            version: 1,
            ownerEmail: "hello@swiftsoftwaregroup.com",
            tasks: workerNames.map((name) => customTask(name, name + "_ref", {})),
            inputParameters: [],
            outputParameters: {},
            timeoutSeconds: 0,
        });

        // start workflow
        const workflowId = await manager.startWorkflow({
            name: workflowName,
            version: 1,
        });

        expect(workflowId).toBeDefined();

        // decrease speed again
        host.updatePollingOptions({ pollInterval: BASE_TIME, concurrency: 1 });

        const workflowStatus = await manager.getWorkflow(workflowId!, true);
        expect(workflowStatus.status).toEqual(WorkflowStatusEnum.Completed);

        await host.stopPolling();

        expect(host.isPolling).toBeFalsy();
        expect(host.options.concurrency).toBe(1);
        expect(host.options.pollInterval).toBe(BASE_TIME);
    });

    test("Should not be able to startPolling if WorkerHost has no workers", async () => {
        const manager = new WorkerHost(client, [], {
            options: { pollInterval: BASE_TIME, concurrency: 2 },
        });

        expect(() => manager.startPolling()).toThrowError(
            "No workers supplied to WorkerHost"
        );
    });

    test("Should not be able to startPolling if duplicate workers", async () => {
        const workerNames: string[] = Array.from({ length: 3 })
            .fill(0)
            .map(() => `worker-name`);

        // names to actual workers
        const workers: WorkerInterface[] = workerNames.map((name) => ({
            taskDefName: name,
            execute: async () => {
                return {
                    outputData: {
                        hello: "From your worker",
                    },
                    status: TaskResultStatusEnum.Completed,
                };
            },
        }));

        const manager = new WorkerHost(client, workers, {
            options: { pollInterval: BASE_TIME, concurrency: 2 },
        });

        expect(() => manager.startPolling()).toThrowError(
            "Duplicate worker taskDefName: worker-name"
        );
    });

    test("Updates single worker properties", async () => {
        const executor = new WorkflowManager(client);
        
        // just create a bunch of worker names
        const workerNames: string[] = Array.from({ length: 3 })
            .fill(0)
            .map((_, i: number) => `taskman-single-worker-update${1 + i}`);

        const candidateWorkerUpdate = "taskman-single-worker-update1";
        
        const initialCandidateWorkflowOptions = {
            concurrency: 1,
            pollInterval: BASE_TIME * 3,
        };

        // names to actual workers
        const workers: WorkerInterface[] = workerNames.map((name) => ({
            taskDefName: name,
            execute: async () => {
                return {
                    outputData: {
                        hello: "From your worker",
                    },
                    status: TaskResultStatusEnum.Completed,
                };
            },
            ...(name === candidateWorkerUpdate ? initialCandidateWorkflowOptions : {}),
        }));

        // create the manager with initial configuations
        const manager = new WorkerHost(client, workers, {
            options: { pollInterval: BASE_TIME, concurrency: 2 },
            logger: mockLogger,
        });

        // start polling
        manager.startPolling();

        expect(manager.isPolling).toBeTruthy();

        const workflowName = "WorkerHostTestMultiSingleWorkerUpdate";

        const updatedWorkerOptions = {
            concurrency: 3,
            pollInterval: BASE_TIME,
        };

        // change the polling options for a single worker
        manager.updatePollingOptionForWorker(candidateWorkerUpdate, updatedWorkerOptions);

        // create the workflow where we will run the test
        await executor.registerWorkflow({
            name: workflowName,
            version: 1,
            ownerEmail: "hello@swiftsoftwaregroup.com",
            tasks: workerNames.map((name) => customTask(name, name + "_ref", {})),
            inputParameters: [],
            outputParameters: {},
            timeoutSeconds: 0,
        });

        // Start workflow
        const workflowId = await executor.startWorkflow({
            name: workflowName,
            version: 1
        });

        expect(workflowId).toBeDefined();

        // decrease speed again
        manager.updatePollingOptions({ pollInterval: BASE_TIME, concurrency: 1 });

        const workflowStatus = await executor.getWorkflow(workflowId!, true);

        expect(workflowStatus.status).toEqual(WorkflowStatusEnum.Completed);
        await manager.stopPolling();

        expect(manager.isPolling).toBeFalsy();
        expect(manager.options.concurrency).toBe(1);
        expect(manager.options.pollInterval).toBe(BASE_TIME);
        expect(mockLogger.info).toBeCalledWith(
            `TaskWorker ${candidateWorkerUpdate} initialized with concurrency of ${initialCandidateWorkflowOptions.concurrency} and poll interval of ${initialCandidateWorkflowOptions.pollInterval}`
        );

        expect(mockLogger.info).toBeCalledWith(
            `TaskWorker ${candidateWorkerUpdate} configuration updated with concurrency of ${updatedWorkerOptions.concurrency} and poll interval of ${updatedWorkerOptions.pollInterval}`
        );
    });
});
