/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Task } from '../models/Task';
import { WorkflowDef } from '../models/WorkflowDef';
import { HttpFile } from '../http/http';

export class Workflow {
    'ownerApp'?: string;
    'createTime'?: number;
    'updateTime'?: number;
    'createdBy'?: string;
    'updatedBy'?: string;
    'status'?: WorkflowStatusEnum;
    'endTime'?: number;
    'workflowId'?: string;
    'parentWorkflowId'?: string;
    'parentWorkflowTaskId'?: string;
    'tasks'?: Array<Task>;
    'input'?: { [key: string]: any; };
    'output'?: { [key: string]: any; };
    'correlationId'?: string;
    'reRunFromWorkflowId'?: string;
    'reasonForIncompletion'?: string;
    'event'?: string;
    'taskToDomain'?: { [key: string]: string; };
    'failedReferenceTaskNames'?: Set<string>;
    'workflowDefinition'?: WorkflowDef;
    'externalInputPayloadStoragePath'?: string;
    'externalOutputPayloadStoragePath'?: string;
    'priority'?: number;
    'variables'?: { [key: string]: any; };
    'lastRetriedTime'?: number;
    'failedTaskNames'?: Set<string>;
    'startTime'?: number;
    'workflowVersion'?: number;
    'workflowName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ownerApp",
            "baseName": "ownerApp",
            "type": "string",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "createTime",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "updateTime",
            "baseName": "updateTime",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedBy",
            "baseName": "updatedBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "WorkflowStatusEnum",
            "format": ""
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "workflowId",
            "baseName": "workflowId",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentWorkflowId",
            "baseName": "parentWorkflowId",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentWorkflowTaskId",
            "baseName": "parentWorkflowTaskId",
            "type": "string",
            "format": ""
        },
        {
            "name": "tasks",
            "baseName": "tasks",
            "type": "Array<Task>",
            "format": ""
        },
        {
            "name": "input",
            "baseName": "input",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "output",
            "baseName": "output",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "correlationId",
            "baseName": "correlationId",
            "type": "string",
            "format": ""
        },
        {
            "name": "reRunFromWorkflowId",
            "baseName": "reRunFromWorkflowId",
            "type": "string",
            "format": ""
        },
        {
            "name": "reasonForIncompletion",
            "baseName": "reasonForIncompletion",
            "type": "string",
            "format": ""
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "string",
            "format": ""
        },
        {
            "name": "taskToDomain",
            "baseName": "taskToDomain",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "failedReferenceTaskNames",
            "baseName": "failedReferenceTaskNames",
            "type": "Set<string>",
            "format": ""
        },
        {
            "name": "workflowDefinition",
            "baseName": "workflowDefinition",
            "type": "WorkflowDef",
            "format": ""
        },
        {
            "name": "externalInputPayloadStoragePath",
            "baseName": "externalInputPayloadStoragePath",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalOutputPayloadStoragePath",
            "baseName": "externalOutputPayloadStoragePath",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "variables",
            "baseName": "variables",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "lastRetriedTime",
            "baseName": "lastRetriedTime",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "failedTaskNames",
            "baseName": "failedTaskNames",
            "type": "Set<string>",
            "format": ""
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "workflowVersion",
            "baseName": "workflowVersion",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "workflowName",
            "baseName": "workflowName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Workflow.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WorkflowStatusEnum {
    Running = 'RUNNING',
    Completed = 'COMPLETED',
    Failed = 'FAILED',
    TimedOut = 'TIMED_OUT',
    Terminated = 'TERMINATED',
    Paused = 'PAUSED'
}

