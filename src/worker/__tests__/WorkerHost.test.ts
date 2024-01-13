import { expect, describe, test, jest } from "@jest/globals";
import { customTask, WorkflowManager } from "../../core";
import { ConductorClient, TaskType } from "../../common";
import { WorkerHost, WorkerInterface } from "../index";
import { mockLogger } from "./mockLogger";
import { Task, TaskDef, TaskResultStatusEnum, WorkflowDef, WorkflowStatusEnum } from "../../../openapi/api";

const BASE_TIME = 500;

describe("WorkerHost", () => {
    const client = new ConductorClient();

    jest.setTimeout(15000);

    test("Should run workflow with worker", async () => {
        const manager = new WorkflowManager(client);

        const workflowDef: WorkflowDef = {
            name: "WorkerHostTest",
            version: 1,
            ownerEmail: "test@test.com",
            tasks: [
                {
                    type: TaskType.SET_VARIABLE,
                    name: "setVar",
                    taskReferenceName: "setVarRef",
                    inputParameters: {
                        hello: "world" as any,
                    },
                },
            ],
            inputParameters: [],
            timeoutSeconds: 15,
        };

        try {
            await manager.unregisterWorkflow(workflowDef.name, workflowDef.version!);
        } catch (e) {
            // ignore
        }

        await manager.registerWorkflow(workflowDef);

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
        
        const workflowName = `worker-host-error-handler-workflow-${Date.now()}` 
        const taskName = `worker-host-error-handler-workflow-task-${Date.now()}` 
        
        const workflowDef: WorkflowDef = {
            name: workflowName,
            version: 1,
            ownerEmail: "test@test.com",
            tasks: [
                customTask(taskName, taskName + "_ref", {})
            ],
            inputParameters: [],
            timeoutSeconds: 15,
        };

        try {
            await manager.unregisterWorkflow(workflowDef.name, workflowDef.version!);
        } catch (e) {
            // ignore
        }

        await manager.registerWorkflow(workflowDef);

        await manager.startWorkflow({
            name: workflowDef.name,
            version: 1,
            input: {},
        });

        const worker: WorkerInterface = {
            taskDefName: taskName,
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
        await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 10));
        await host.stopPolling();

        expect(errorHandler).toBeCalledTimes(1);
    });


    test("If no error handler provided. it should just update the task", async () => {
        const manager = new WorkflowManager(client);

        const taskName = `worker-host-no-error-handler-task-${Date.now()}`    
        
        const taskDef : TaskDef = {
            name: taskName, 
            timeoutSeconds: -1,
            retryCount: 0,
            ownerEmail: "test@test.com",
        };

        await manager._client.metadataResource.registerTaskDef([taskDef]);
        const taskDefRet = await manager._client.metadataResource.getTaskDef(taskName);

        const workflowName = `worker-host-no-error-handler-workflow-${Date.now()}`
        
        const workflowDef: WorkflowDef = {
            name: workflowName, 
            version: 1,
            ownerEmail: "test@test.com",
            tasks: [
                customTask(taskName, taskName + "_ref", {})
            ],
            inputParameters: [],
            timeoutSeconds: -1,
        };

        try {
            await manager.unregisterWorkflow(workflowDef.name, workflowDef.version!);
        } catch (e) {
            // ignore
        }

        await manager.registerWorkflow(workflowDef);

        const workflowId = await manager.startWorkflow({
            name: workflowDef.name,
            version: workflowDef.version!,
            input: {},
        });

        const worker: WorkerInterface = {
            taskDefName: taskName,
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

    test("multiple worker example", async () => {
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

        const workflowName = `worker-host-multiple-workers-workflow-${Date.now()}`;

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

        await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 10));
        await host.stopPolling();

        expect(host.isPolling).toBeFalsy();
        expect(host.options.concurrency).toBe(1);
        expect(host.options.pollInterval).toBe(BASE_TIME);

        const workflowStatus = await manager.getWorkflow(workflowId!, true);
        expect(workflowStatus.status).toEqual(WorkflowStatusEnum.Completed);
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

        const workflowName = `worker-host-single-worker-update-workflow-${Date.now()}`;

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

        await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 10));
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

        const workflowStatus = await executor.getWorkflow(workflowId!, true);
        expect(workflowStatus.status).toEqual(WorkflowStatusEnum.Completed);
    });
});
