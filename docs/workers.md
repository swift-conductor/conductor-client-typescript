# Writing Workers with the Javascript SDK

A worker is responsible for executing a task.
Operator and System tasks are handled by the Conductor server, while user defined tasks needs to have a worker created that awaits the work to be scheduled by the server for it to be executed.

Worker framework provides features such as polling threads, metrics and server communication.

### Design Principles for Workers

Each worker embodies design pattern and follows certain basic principles:

1. Workers are stateless and do not implement a workflow specific logic.
2. Each worker executes a very specific task and produces well-defined output given specific inputs.
3. Workers are meant to be idempotent (or should handle cases where the task that is partially executed gets rescheduled due to timeouts etc.)
4. Workers do not implement the logic to handle retries etc, that is taken care by the Conductor server.

### Creating Task Workers

Task worker is implemented using a function that confirms to the following function

```typescript
import { WorkerInterface, Task } from "@swift-conductor/conductor-client";

const worker: WorkerInterface = {
  taskDefName: "task-def-name",
  execute: async (task: Task): Promise<Omit<TaskResult, "workflowInstanceId" | "taskId">> => {},
};
```

Worker returns a object as the output of the task execution. The object is just a json that follows the TaskResult interface.
If an `error` is returned, the task is marked as `FAILED`

#### Task worker that returns an object

```typescript
import { WorkerInterface, Task } from "@swift-conductor/conductor-client";

const worker: WorkerInterface = {
    taskDefName: "task-def-name",
    execute: async (task: Task) => {
        // Sample output
        return {
            outputData: { hello: "From your worker" },
            status: TaskResultStatusEnum.Completed,
        };
    },
};
```

#### Controlling execution for long-running tasks

For the long-running tasks you might want to spawn another process/routine and update the status of the task at a later point and complete the execution function without actually marking the task as `TaskResultStatusEnum.Completed`. The `TaskResult` interface allows more fined grained control over the result.

Here is an example of a task execution function that returns with `TaskResultStatusEnum.InProgress` status asking server to push the task again in 60 seconds.

```typescript
const worker: WorkerInterface = {
    taskDefName: "task-def-name",
    execute: async (task: Task) => {
        // Sample output
        return {
            status: TaskResultStatusEnum.InProgress,
            callbackAfterSeconds: 60,
            outputData: {},
        };
    },
    pollInterval: 100, // optional
    concurrency: 2, // optional
};
```

## Starting Workers

The `WorkerHost` interface is used to start the workers, which takes care of polling server for the work, executing worker code and updating the results back to the server.

```typescript
import {
  ConductorClient,
  WorkerHost,
} from "@swift-conductor/conductor-client";

const client = new ConductorClient();

const taskDefName = "HelloWorldWorker";

const customWorker: WorkerInterface = {
    taskDefName,
    execute: async (task: Task) => {
        return {
            outputData: {
                greeting: "Hello World",
            },
            status: TaskResultStatusEnum.Completed,
        };
    },
};

// Worker options will take precedence over the options defined in the host
const host = new WorkerHost(client, [customWorker], {
  options: { pollInterval: 100, concurrency: 1 },
});

host.startPolling();

// update all worker settings
host.updatePollingOptions({ pollInterval: 100, concurrency: 1 });

// update single worker settings
host.updatePollingOptionForWorker(taskDefName, {
  pollInterval: 100,
  concurrency: 1,
});

host.isPolling; // Will resolve to true

await host.stopPolling();

host.isPolling; // Will resolve to false
```

## Task Management APIs

### Get Task Details

```typescript
import {
    ConductorClient,
    WorkflowManager,
    TaskResultStatus,
} from "@swift-conductor/conductor-client";

const client = new ConductorClient();

const manager = new WorkflowManager(client);

const taskDetails = await manager.getTask(someTaskId);
```

### Updating the Task result outside the worker implementation

```typescript
const newChange = { greet: "bye" };
await manager.updateTask(taskId, workflowId, TaskResultStatusEnum.Completed, newChange);
```
