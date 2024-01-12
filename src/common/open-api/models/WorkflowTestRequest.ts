/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskMock } from './TaskMock';
import type { WorkflowDef } from './WorkflowDef';
export type WorkflowTestRequest = {
    name: string;
    version?: number;
    correlationId?: string;
    input?: Record<string, Record<string, any>>;
    taskToDomain?: Record<string, string>;
    workflowDef?: WorkflowDef;
    externalInputPayloadStoragePath?: string;
    priority?: number;
    taskRefToMockOutput?: Record<string, Array<TaskMock>>;
    subWorkflowTestRequest?: Record<string, WorkflowTestRequest>;
};

