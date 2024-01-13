import { expect, describe, test, jest } from "@jest/globals";
import { WorkerProcess } from "../WorkerProcess";
import { WorkflowManager, customTask } from "../../core";
import { ConductorClient } from "../../common";
import { TaskResultStatusEnum, TaskStatusEnum, WorkflowStatusEnum } from "../../../openapi/api";

const BASE_TIME = 500;

describe("WorkerProcess End-2-end tests", () => {
  const client = new ConductorClient();

  jest.setTimeout(15000);

  test("worker example ", async () => {
    const manager = new WorkflowManager(client);

    const workerProcess = new WorkerProcess({
      taskResource: client.taskResource,
      worker: {
        taskDefName: "task-manager-int-test",
        execute: async () => {
          return {
            outputData: {
              hello: "From your worker",
            },
            status: TaskResultStatusEnum.Completed,
          };
        },
      },
      options: {
        pollInterval: 1000,
        domain: undefined,
        concurrency: 2,
        workerID: "",
      },
    });

    workerProcess.startPolling();

    expect(workerProcess.isPolling).toEqual(true);
    
    const workflowName = "task-manager-int-test-wf";
 
    await manager.unregisterWorkflow(workflowName, 1);

    await manager.registerWorkflow({
      name: workflowName,
      version: 1,
      ownerEmail: "hello@swiftsoftwaregroup.com",
      tasks: [customTask("task-manager-int-test", "task-manager-int-test-ref", {})],
      inputParameters: [],
      outputParameters: {},
      timeoutSeconds: 0,
    });

    const workflowId = await manager.startWorkflow({
        name: workflowName,
        version: 1,
    });

    expect(workflowId).toBeDefined();

    workerProcess.updateOptions({ concurrency: 1, pollInterval: 100 });

    await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 3));

    await workerProcess.stopPolling();
    expect(workerProcess.isPolling).toEqual(false);

    const workflowStatus = await manager.getWorkflow(workflowId!, true);
    expect(workflowStatus.status).toEqual(WorkflowStatusEnum.Completed);

    const [firstTask] = workflowStatus.tasks || [];
    expect(firstTask?.taskType).toEqual("task-manager-int-test");

    const taskDetails = await manager.getTask(firstTask?.taskId || "");
    expect(taskDetails.status).toEqual(TaskStatusEnum.Completed);
  });
});
