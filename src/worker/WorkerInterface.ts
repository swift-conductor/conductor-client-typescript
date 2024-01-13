import { Task, TaskResult } from "../../openapi/api";

/**
 * Functional interface for defining a worker implementation that processes tasks from a conductor queue.
 *
 * @remarks
 * Optional items allow overriding properties on a per-worker basis. Items not overridden
 * here will be inherited from the `WorkerHost` options.
 */
export interface WorkerInterface {
    taskDefName: string;
    domain?: string;
    pollInterval?: number;
    /** Number of polling instances to run concurrently */
    concurrency?: number;

    execute: (task: Task) => Promise<Omit<TaskResult, "workflowInstanceId" | "taskId">>;
}
