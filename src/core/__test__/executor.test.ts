import { expect, describe, test, jest } from "@jest/globals";
import { SetVariableTaskDef, TaskType, WorkflowDef } from "../../common";
import { ConductorApiConfig, conductorClient } from "../../conductor";
import { WorkflowExecutor } from "../executor";
import { v4 as uuidv4 } from "uuid";

const playConfig: Partial<ConductorApiConfig> = {
  keyId: `${process.env.KEY_ID}`,
  keySecret: `${process.env.KEY_SECRET}`,
  serverUrl: `${process.env.SERVER_URL}`,
};

describe("Executor", () => {
  const clientPromise = conductorClient(playConfig);

  jest.setTimeout(15000);
  const name = `testWorkflow-${Date.now()}`;
  const version = 1;
  test("Should be able to register a workflow", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const workflowDefinition: WorkflowDef = {
      name,
      version,
      tasks: [
        {
          type: TaskType.SET_VARIABLE,
          name: "setVariable",
          taskReferenceName: "httpTaskRef",
          inputParameters: {
            hello: "world",
          },
        },
      ],
      inputParameters: [],
      timeoutSeconds: 15,
    };

    await expect(
      executor.registerWorkflow(true, workflowDefinition)
    ).resolves.not.toThrowError();
    const workflowDefinitionFromApi = await client.metadataResource.get(
      name,
      version
    );
    expect(workflowDefinitionFromApi.name).toEqual(name);
    expect(workflowDefinitionFromApi.version).toEqual(version);
    expect(workflowDefinitionFromApi.tasks[0].name).toEqual(
      workflowDefinition.tasks[0].name
    );
    expect(workflowDefinitionFromApi.tasks[0].taskReferenceName).toEqual(
      workflowDefinition.tasks[0].taskReferenceName
    );
    expect(workflowDefinitionFromApi.tasks[0].inputParameters).toEqual(
      (workflowDefinition.tasks[0] as SetVariableTaskDef).inputParameters
    );
  });

  let executionId: string | undefined = undefined;
  test("Should be able to start a workflow", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);
    executionId = await executor.startWorkflow({ name, version });
    expect(executionId).toBeTruthy();
  });

  test("Should be able to execute workflow synchronously", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);
    const workflowRun = await executor.executeWorkflow(
      {
        name: name,
        version: version,
      },
      name,
      version,
      uuidv4()
    );
    expect(workflowRun.status).toEqual("COMPLETED");
  });

  test("Should be able to get workflow execution status ", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);
    const workflowStatus = await executor.getWorkflowStatus(
      executionId!,
      true,
      true
    );
    expect(workflowStatus.status).toBeTruthy();
  });

  test("Should return workflow status detail", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);
    const workflowStatus = await executor.getWorkflow(executionId!, true);

    expect(workflowStatus.status).toBeTruthy();
    expect(workflowStatus.tasks?.length).toBe(1);
  });
});
