# Authoring Workflows with the Javascript SDK

## A simple two-step workflow

```typescript
import {
  ConductorApiConfig,
  conductorClient,
  TaskRunner,
  customTask,
} from "@swiftconductor/conductor-client-typescript";

//API client instance with server address and authentication details
const clientPromise = conductorClient({
  serverUrl: "http://lcoalhost:8080/api",
});

const client = await clientPromise;

//Create new workflow executor
const executor = new WorkflowExecutor(client);

// Using Factory function
const factoryWf = {
  name: "my_first_workflow",
  version: 1,
  ownerEmail: "hello@swiftsoftwaregroup.com",
  tasks: [customTask("custom_task_ref", "custom_task", {})],
  inputParameters: [],
  outputParameters: {},
  timeoutSeconds: 0,
};
const workflow = executor.registerWorkflow(true, factoryWf);
```

### Execute Workflow

#### Using Workflow Executor to start previously registered workflow

```typescript
const executor = new WorkflowExecutor(client);
const executionId = await executor.startWorkflow({ name, version, input: {} });
```

#### Using Workflow Executor to execute a workflow and get the output as a result

```typescript
import {
  conductorClient,
  WorkflowExecutor,
  ConductorClient,
  TaskType,
} from "@swiftconductor/conductor-client-typescript";

//API client instance with server address and authentication details
const clientPromise = conductorClient({
  serverUrl: "http://lcoalhost:8080/api",
});

const client = await clientPromise;

//Create new workflow executor
const executor = new WorkflowExecutor(client);

// Create a workflow
const factoryWf = {
  name: "my_first_workflow",
  version: 1,
  ownerEmail: "hello@swiftsoftwaregroup.com",
  tasks: [customTask("custom_task_ref", "custom_task", {})],
  inputParameters: [],
  outputParameters: {},
  timeoutSeconds: 0,
};

// Register workflow
const workflow = executor.registerWorkflow(true, factoryWf);

// Start Workflow
const executionId = await executor.startWorkflow({
  name: factoryWf.name,
  version: 1,
  input: {},
});

// Query Workflow status
const workflowStatus = await executor.getWorkflow(executionId, true);
```

### More Examples

You can find more examples in the [readme.test.ts](https://github.com/swift-conductor/conductor-client-typescript/blob/main/src/__test__/readme.test.ts)
