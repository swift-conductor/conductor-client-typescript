/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task } from './Task';
import type { WorkflowDef } from './WorkflowDef';
export type Workflow = {
    ownerApp?: string;
    createTime?: number;
    updateTime?: number;
    createdBy?: string;
    updatedBy?: string;
    status?: 'RUNNING' | 'COMPLETED' | 'FAILED' | 'TIMED_OUT' | 'TERMINATED' | 'PAUSED';
    endTime?: number;
    workflowId?: string;
    parentWorkflowId?: string;
    parentWorkflowTaskId?: string;
    tasks?: Array<Task>;
    input?: Record<string, Record<string, any>>;
    output?: Record<string, Record<string, any>>;
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
    variables?: Record<string, Record<string, any>>;
    lastRetriedTime?: number;
    failedTaskNames?: Array<string>;
    startTime?: number;
    workflowVersion?: number;
    workflowName?: string;
};

