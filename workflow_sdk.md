# Authoring Workflows with the Javascript SDK

## A simple two-step workflow

```typescript
import {
  ConductorApiConfig,
  conductorClient,
  TaskRunner,
  simpleTask,
} from "@com-swiftconductor/conductor-client-typescript";

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
  tasks: [simpleTask("simple_task_ref", "simple_task", {})],
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
} from "@com-swiftconductor/conductor-client-typescript";

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
  tasks: [simpleTask("simple_task_ref", "simple_task", {})],
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

// The workflow status returns the following type
export type Workflow = {
  ownerApp?: string;
  createTime?: number;
  updateTime?: number;
  createdBy?: string;
  updatedBy?: string;
  status?:
    | "RUNNING"
    | "COMPLETED"
    | "FAILED"
    | "TIMED_OUT"
    | "TERMINATED"
    | "PAUSED";
  endTime?: number;
  workflowId?: string;
  parentWorkflowId?: string;
  parentWorkflowTaskId?: string;
  tasks?: Array<Task>;
  input?: Record<string, any>;
  output?: Record<string, any>;
  correlationId?: string;
  reRunFromWorkflowId?: string;
  reasonForIncompletion?: string;
  event?: string;
  taskToDomain?: Record<string, string>;
  failedReferenceTaskNames?: Array<string>;
  workflowDefinition?: WorkflowDef;
  externalInputPayloadStoragePath?: string;
  externalOutputPayloadStoragePath?: string;
  priority?: number;
  variables?: Record<string, any>;
  lastRetriedTime?: number;
  startTime?: number;
  workflowVersion?: number;
  workflowName?: string;
};
```

### More Examples

You can find more examples at the following GitHub repository:
https://github.com/swift-conductor/javascript-sdk-examples
