import { expect, describe, test, jest } from "@jest/globals";

import { TaskResultStatusEnum, TaskStatusEnum, WorkflowStatusEnum } from "../../openapi/api";

import { TaskType } from "../common";
import { ConductorClient } from "../common";
import { WorkerProcess } from "../worker";

import { WorkflowManager, customTask, generate } from "../core";

describe("WorkerHost", () => {
    const client = new ConductorClient();

    jest.setTimeout(20000);

    test("worker example ", async () => {
        const manager = new WorkflowManager(client);

        const workerProcess = new WorkerProcess({
            worker: {
                taskDefName: "typescript-custom-task",
                execute: async () => {
                    return {
                        outputData: {
                            hello: "From your worker",
                        },
                        status: TaskResultStatusEnum.Completed,
                    };
                },
            },
            taskResource: client.taskResource,
            options: {
                pollInterval: 10,
                domain: undefined,
                concurrency: 1,
                workerID: "",
            },
        });

        workerProcess.startPolling();

        await manager.unregisterWorkflow("my-first-workflow-typescript", 1);

        await manager.registerWorkflow({
            name: "my-first-workflow-typescript",
            version: 1,
            ownerEmail: "hello@swiftsoftwaregroup.com",
            tasks: [customTask("typescript-custom-task", "typescript-custom-task_ref", {})],
            inputParameters: [],
            outputParameters: {},
            timeoutSeconds: 0,
        });

        const workflowId = await manager.startWorkflow({
            name: "my-first-workflow-typescript",
            input: {},
            version: 1,
        });

        await new Promise((r) => setTimeout(() => r(true), 900));

        workerProcess.stopPolling();

        const workflowStatus = await manager.getWorkflow(workflowId, true);

        const [firstTask] = workflowStatus.tasks || [];
        expect(firstTask?.taskType).toEqual("typescript-custom-task");
        expect(workflowStatus.status).toEqual(WorkflowStatusEnum.Completed);

        const taskDetails = await manager.getTask(firstTask?.taskId || "");
        expect(taskDetails.status).toEqual(TaskStatusEnum.Completed);
    });


    test("update task example ", async () => {
        const manager = new WorkflowManager(client);
        
        const waitTaskReference = "wait_task_ref";
        
        const workflowWithWaitTask = generate({
            name: "waitTaskWf",
            tasks: [{ type: TaskType.WAIT, taskReferenceName: waitTaskReference }],
        });

        await manager.unregisterWorkflow(workflowWithWaitTask.name, workflowWithWaitTask.version!);

        await manager.registerWorkflow(workflowWithWaitTask);

        const workflowId = await manager.startWorkflow({
            name: workflowWithWaitTask.name,
            input: {},
            version: 1,
        });

        await new Promise((r) => setTimeout(() => r(true), 900));

        const workflowStatus = await manager.getWorkflow(workflowId!, true);
        const [firstTask] = workflowStatus.tasks || [];
        expect(firstTask?.referenceTaskName).toEqual(waitTaskReference);
        
        const changedValue = { greet: "changed value" };
        await manager.updateTask(firstTask!.taskId!, workflowId!, TaskResultStatusEnum.InProgress, changedValue);

        const taskDetails = await manager.getTask(firstTask?.taskId || "");
        expect(taskDetails.outputData).toEqual(changedValue);

        const newChange = { greet: "bye" };
        await manager.updateTask(firstTask!.taskId!, workflowId!, TaskResultStatusEnum.Completed, newChange);

        const taskAfterUpdate = await manager.getTask(firstTask?.taskId || "");
        expect(taskAfterUpdate.outputData).toEqual(newChange);
    });

    test("Should create and run a workflow that sums two numbers", async () => {
        // Create new workflow manager
        const manager = new WorkflowManager(client);

        // Create a workflow
        const sumTwoNumbers = generate({
            name: "sumTwoNumbers",
            tasks: [
                {
                    name: "sum_two_numbers",
                    inputParameters: {
                        numberOne: "${workflow.input.numberOne}",
                        numberTwo: "${workflow.input.numberTwo}",
                        expression: function ($: { numberOne: number; numberTwo: number }) {
                            // The returned function will be executed by conductors. INLINE task
                            return function () {
                                return $.numberOne + $.numberTwo;
                            };
                        },
                    },
                    type: TaskType.INLINE,
                },
            ],
            inputParameters: ["numberOne", "numberTwo"],
            outputParameters: {
                result: "${sum_two_numbers_ref.output.result}",
            },
        });

        await manager.unregisterWorkflow(sumTwoNumbers.name, sumTwoNumbers.version!);

        await manager.registerWorkflow(sumTwoNumbers);

        const workflowId = await manager.startWorkflow({
            name: sumTwoNumbers.name,
            version: 1,

            input: {
                numberOne: 1,
                numberTwo: 2,
            },
        });

        await new Promise((r) => setTimeout(() => r(true), 900));

        const workflowStatus = await manager.getWorkflow(workflowId!, true);

        expect(workflowStatus.status).toEqual(WorkflowStatusEnum.Completed);
        expect(workflowStatus.output?.result).toEqual(3);
    });
});
