import type { ConductorLogger } from "../common";
import type { WorkerInterface } from "./WorkerInterface";
import type { Task, TaskResourceApi } from "../../openapi/api";

export type WorkerErrorHandler = (error: Error, task?: Task) => void;

export interface WorkerProcessOptions {
  workerID: string;
  domain: string | undefined;
  pollInterval?: number;
  concurrency?: number;
  batchPollingTimeout?: number;
}

export interface WorkerProcessConfig {
  worker: WorkerInterface;
  taskResource: TaskResourceApi;
  options: WorkerProcessOptions;
  logger?: ConductorLogger;
  onError?: WorkerErrorHandler;
  concurrency?: number;
}
