import { expect, describe, test, jest } from "@jest/globals";
import {
  OrkesApiConfig,
  orkesConductorClient,
  WorkflowExecutor,
  TaskRunner,
  ConductorWorker,
  generate,
  TaskResult,
} from "../../";
import { TaskType } from "../../";

const config: Partial<OrkesApiConfig> = {
  keyId: `${process.env.KEY_ID}`,
  keySecret: `${process.env.KEY_SECRET}`,
  serverUrl: "https://pg-staging.orkesconductor.com/api",
};

describe("TaskManager", () => {
  const clientPromise = orkesConductorClient(config);

  jest.setTimeout(10000);
  test("worker example ", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const taskRunner = new TaskRunner({
      taskResource: client.taskResource,
      worker: {
        taskDefName: "taskmanager-test",
        execute: async () => {
          return {
            outputData: {
              hello: "From your worker",
            },
            status: "COMPLETED",
          };
        },
      },
      options: {
        pollInterval: 10,
        domain: undefined,
        concurrency: 1,
        workerID: "",
      },
    });
    taskRunner.startPolling();

    const executionId = await executor.startWorkflow({
      name: "TaskManagerTest",
      input: {},
      version: 1,
    });
    await new Promise((r) => setTimeout(() => r(true), 900));
    const workflowStatus = await executor.getWorkflow(executionId, true);

    const [firstTask] = workflowStatus.tasks || [];
    expect(firstTask?.taskType).toEqual("taskmanager-test");
    expect(workflowStatus.status).toEqual("COMPLETED");

    taskRunner.stopPolling();
    const taskDetails = await executor.getTask(firstTask?.taskId || "");
    expect(taskDetails.status).toEqual("COMPLETED");
  });

  test("update task example ", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);
    const waitTaskReference = "wait_task_ref";
    const workflowWithWaitTask = generate({
      name: "waitTaskWf",
      tasks: [{ type: TaskType.WAIT, taskReferenceName: waitTaskReference }],
    });
    await executor.registerWorkflow(true, workflowWithWaitTask);

    const executionId = await executor.startWorkflow({
      name: workflowWithWaitTask.name,
      input: {},
      version: 1,
    });
    await new Promise((r) => setTimeout(() => r(true), 500));
    const workflowStatus = await executor.getWorkflow(executionId, true);

    const [firstTask] = workflowStatus.tasks || [];
    expect(firstTask?.referenceTaskName).toEqual(waitTaskReference);
    const changedValue = { greet: "changed value" };
    await executor.updateTaskByRefName(
      firstTask!.referenceTaskName!,
      executionId,
      TaskResult.COMPLETED,
      changedValue
    );

    const taskDetails = await executor.getTask(firstTask?.taskId || "");
    expect(taskDetails.outputData).toEqual(changedValue);
  });

  test("Should create and run a workflow that sums two numbers", async () => {
    const client = await clientPromise;

    //Create new workflow executor
    const executor = new WorkflowExecutor(client);

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

    await executor.registerWorkflow(true, sumTwoNumbers);

    const executionId = await executor.startWorkflow({
      name: sumTwoNumbers.name,
      version: 1,
      input: {
        numberOne: 1,
        numberTwo: 2,
      },
    });

    const workflowStatus = await executor.getWorkflow(executionId, true);
    
    await new Promise((r) => setTimeout(() => r(true), 900));
    
    expect(workflowStatus.status).toEqual("COMPLETED");
    expect(workflowStatus.output?.result).toEqual(3);

  });
});