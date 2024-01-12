/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowTask } from './WorkflowTask';
export type WorkflowDef = {
    ownerApp?: string;
    createTime?: number;
    updateTime?: number;
    createdBy?: string;
    updatedBy?: string;
    accessPolicy?: Record<string, string>;
    name: string;
    description?: string;
    version?: number;
    tasks: Array<WorkflowTask>;
    inputParameters?: Array<string>;
    outputParameters?: Record<string, Record<string, any>>;
    failureWorkflow?: string;
    schemaVersion?: number;
    restartable?: boolean;
    workflowStatusListenerEnabled?: boolean;
    ownerEmail?: string;
    timeoutPolicy?: 'TIME_OUT_WF' | 'ALERT_ONLY';
    timeoutSeconds: number;
    variables?: Record<string, Record<string, any>>;
    inputTemplate?: Record<string, Record<string, any>>;
};

