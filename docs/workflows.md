# Authoring Workflows with the TypeScript SDK

## A simple two-step workflow

```typescript
import {
    ConductorClient,
    WorkflowManager
    WorkerProcess,
    customTask,
} from "@swiftconductor/conductor-client-typescript";

const client = new ConductorClient();

// Create new workflow manager
const manager = new WorkflowManager(client);

// Using Factory function
const firstWorkflow: WorkflowDef = {
    name: "my_first_workflow",
    version: 1,
    ownerEmail: "hello@swiftsoftwaregroup.com",
    tasks: [
        customTask("custom_task", "custom_task_ref", {})
    ],
    inputParameters: [],
    outputParameters: {},
    timeoutSeconds: 0,
};

const workflow = await manager.registerWorkflow(firstWorkflow);
```

### Start Workflow

#### Using Workflow Manager to start previously registered workflow

```typescript
const manager = new WorkflowManager(client);
const executionId = await manager.startWorkflow({ name, version, input: {} });
```

#### Using Workflow Manager to start a workflow and get the output as a result

```typescript
import {
    ConductorClient,
    WorkflowManager,
    ConductorClient,
    TaskType,
    WorkflowDef,
} from "@swiftconductor/conductor-client-typescript";

const client = new ConductorClient();

// Create new workflow manager
const manager = new WorkflowManager(client);

// Create a workflow
const firstWorkflow: WorkflowDef = {
    name: "my_first_workflow",
    version: 1,
    ownerEmail: "hello@swiftsoftwaregroup.com",
    tasks: [
        customTask("custom_task", "custom_task_ref", {})
    ],
    inputParameters: [],
    outputParameters: {},
    timeoutSeconds: 0,
};

// Register workflow
const workflow = await manager.registerWorkflow(true, firstWorkflow);

// Start Workflow
const executionId = await manager.startWorkflow({
    name: firstWorkflow.name,
    version: 1,
    input: {},
});

// Query Workflow status
const workflowStatus = await manager.getWorkflow(executionId, true);
```

### More Examples

You can find more examples in the [readme.test.ts](https://github.com/swift-conductor/conductor-client-typescript/blob/main/src/__test__/readme.test.ts)
