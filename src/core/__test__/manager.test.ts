import { expect, describe, test, jest } from "@jest/globals";
import { SetVariableTaskDef, TaskType, WorkflowDef } from "../../common";
import { ConductorClient } from "../../common";
import { WorkflowManager as WorkflowManager } from "../manager";
import { v4 as uuidv4 } from "uuid";
import { ApiError } from "../../common/open-api/core/ApiError";

describe("Manager", () => {
  const client = new ConductorClient();

  jest.setTimeout(15000);
  const name = `testWorkflow-${Date.now()}`;
  const version = 1;
  const ownerEmail = 'test@test.com';

  test("Should be able to register a workflow", async () => {
    const manager = new WorkflowManager(client);

    const workflowDef: WorkflowDef = {
      name,
      version,
      ownerEmail,
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
      await manager.registerWorkflow(workflowDef);
    } catch (error) { 
      if (error instanceof ApiError) {
        console.log(error.body.message);
        console.log(error.body.validationErrors);
      }

      throw error;
    }
    
    const workflowDefGet = await client.metadataResource.get(name, version);

    expect(workflowDefGet.name).toEqual(name);
    expect(workflowDefGet.version).toEqual(version);
    expect(workflowDefGet.tasks[0].name).toEqual(workflowDef.tasks[0].name);
    expect(workflowDefGet.tasks[0].taskReferenceName).toEqual(workflowDef.tasks[0].taskReferenceName);
    expect(workflowDefGet.tasks[0].inputParameters).toEqual((workflowDef.tasks[0] as SetVariableTaskDef).inputParameters);
  });

  let executionId: string | undefined = undefined;
  test("Should be able to start a workflow", async () => {
    const manager = new WorkflowManager(client);
    executionId = await manager.startWorkflow({ name, version });
    expect(executionId).toBeTruthy();
  });


  test("Should return workflow status detail", async () => {
    const executor = new WorkflowManager(client);
    const workflowStatus = await executor.getWorkflow(executionId!, true);

    expect(workflowStatus.status).toBeTruthy();
    expect(workflowStatus.tasks?.length).toBe(1);
  });
});
