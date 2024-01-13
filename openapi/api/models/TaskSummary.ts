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

import { HttpFile } from '../http/http';

export class TaskSummary {
    'workflowId'?: string;
    'workflowType'?: string;
    'correlationId'?: string;
    'scheduledTime'?: string;
    'startTime'?: string;
    'updateTime'?: string;
    'endTime'?: string;
    'status'?: TaskSummaryStatusEnum;
    'reasonForIncompletion'?: string;
    'executionTime'?: number;
    'queueWaitTime'?: number;
    'taskDefName'?: string;
    'taskType'?: string;
    'input'?: string;
    'output'?: string;
    'taskId'?: string;
    'externalInputPayloadStoragePath'?: string;
    'externalOutputPayloadStoragePath'?: string;
    'workflowPriority'?: number;
    'domain'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "workflowId",
            "baseName": "workflowId",
            "type": "string",
            "format": ""
        },
        {
            "name": "workflowType",
            "baseName": "workflowType",
            "type": "string",
            "format": ""
        },
        {
            "name": "correlationId",
            "baseName": "correlationId",
            "type": "string",
            "format": ""
        },
        {
            "name": "scheduledTime",
            "baseName": "scheduledTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "updateTime",
            "baseName": "updateTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TaskSummaryStatusEnum",
            "format": ""
        },
        {
            "name": "reasonForIncompletion",
            "baseName": "reasonForIncompletion",
            "type": "string",
            "format": ""
        },
        {
            "name": "executionTime",
            "baseName": "executionTime",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "queueWaitTime",
            "baseName": "queueWaitTime",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "taskDefName",
            "baseName": "taskDefName",
            "type": "string",
            "format": ""
        },
        {
            "name": "taskType",
            "baseName": "taskType",
            "type": "string",
            "format": ""
        },
        {
            "name": "input",
            "baseName": "input",
            "type": "string",
            "format": ""
        },
        {
            "name": "output",
            "baseName": "output",
            "type": "string",
            "format": ""
        },
        {
            "name": "taskId",
            "baseName": "taskId",
            "type": "string",
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
            "name": "workflowPriority",
            "baseName": "workflowPriority",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TaskSummary.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TaskSummaryStatusEnum {
    InProgress = 'IN_PROGRESS',
    Canceled = 'CANCELED',
    Failed = 'FAILED',
    FailedWithTerminalError = 'FAILED_WITH_TERMINAL_ERROR',
    Completed = 'COMPLETED',
    CompletedWithErrors = 'COMPLETED_WITH_ERRORS',
    Scheduled = 'SCHEDULED',
    TimedOut = 'TIMED_OUT',
    Skipped = 'SKIPPED'
}
