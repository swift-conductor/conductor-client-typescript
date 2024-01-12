/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WorkflowSummary = {
    workflowType?: string;
    version?: number;
    workflowId?: string;
    correlationId?: string;
    startTime?: string;
    updateTime?: string;
    endTime?: string;
    status?: 'RUNNING' | 'COMPLETED' | 'FAILED' | 'TIMED_OUT' | 'TERMINATED' | 'PAUSED';
    input?: string;
    output?: string;
    reasonForIncompletion?: string;
    executionTime?: number;
    event?: string;
    failedReferenceTaskNames?: string;
    externalInputPayloadStoragePath?: string;
    externalOutputPayloadStoragePath?: string;
    priority?: number;
    failedTaskNames?: Array<string>;
    inputSize?: number;
    outputSize?: number;
};

