import { jest, test, expect } from "@jest/globals";
import type { Mocked } from "jest-mock";

import { WorkerProcess } from "../WorkerProcess";
import { WorkerProcessConfig } from "../types";
import { mockLogger } from "./mockLogger";
import { TaskResourceApi, TaskResultStatusEnum } from "../../../openapi/api";

test("polls tasks", async () => {
  const taskClientStub: Mocked<
    Pick<TaskResourceApi, "batchPoll" | "updateTask1">
  > = {
    batchPoll: jest.fn(),
    updateTask1: jest.fn(),
  };
  const mockTaskClient = taskClientStub as unknown as TaskResourceApi;
  const workerID = "worker-id";
  const args: WorkerProcessConfig = {
    worker: {
      taskDefName: "test",
      execute: async ({ inputData }) => {
        return {
          outputData: {
            hello: "from worker",
            ...inputData,
          },
          status: TaskResultStatusEnum.Completed,
        };
      },
    },
    options: {
      pollInterval: 10,
      domain: "",
      concurrency: 1,
      workerID,
    },
    logger: mockLogger,
    taskResource: mockTaskClient,
  };
  const workflowInstanceId = "fake-workflow-id";
  const taskId = "fake-task-id";
  taskClientStub.batchPoll.mockResolvedValue([
    {
      taskId,
      workflowInstanceId,
      status: "IN_PROGRESS",
      reasonForIncompletion: undefined,
      inputData: {
        input: "from workflow",
      },
    },
  ]);

  const runner = new WorkerProcess(args);
  runner.startPolling();
  await new Promise((r) => setTimeout(() => r(true), 10));
  runner.stopPolling();
  const expected = {
    taskId,
    workflowInstanceId,
    status: "COMPLETED",
    workerId: workerID,
    outputData: {
      hello: "from worker",
      input: "from workflow",
    },
  };
  expect(taskClientStub.updateTask1).toHaveBeenCalledWith(expected);
});

test("Should set the task as failed if the task has an error", async () => {
  const taskClientStub: Mocked<
    Pick<TaskResourceApi, "batchPoll" | "updateTask1">
  > = {
    batchPoll: jest.fn(),
    updateTask1: jest.fn(),
  };
  const mockTaskClient = taskClientStub as unknown as TaskResourceApi;

  const workerID = "worker-id";
  const args: WorkerProcessConfig = {
    worker: {
      taskDefName: "test",
      execute: async () => {
        throw new Error("Error from worker");
      },
    },
    options: {
      pollInterval: 10,
      domain: "",
      concurrency: 1,
      workerID,
    },
    logger: mockLogger,
    taskResource: mockTaskClient,
  };
  const workflowInstanceId = "fake-workflow-id";
  const taskId = "fake-task-id";
  taskClientStub.batchPoll.mockResolvedValue([
    {
      taskId,
      workflowInstanceId,
      status: "IN_PROGRESS",
      reasonForIncompletion: undefined,
      inputData: {
        input: "from workflow",
      },
    },
  ]);

  const runner = new WorkerProcess(args);
  runner.startPolling();
  await new Promise((r) => setTimeout(() => r(true), 10));
  runner.stopPolling();
  const expected = {
    taskId,
    workflowInstanceId,
    workerId: workerID,
    status: "FAILED",
    outputData: {},
    reasonForIncompletion: "Error from worker",
  };
  expect(taskClientStub.updateTask1).toHaveBeenCalledWith(expected);
});
