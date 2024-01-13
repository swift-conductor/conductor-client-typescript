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

import { WorkflowTask } from '../models/WorkflowTask';
import { HttpFile } from '../http/http';

export class WorkflowDef {
    'ownerApp'?: string;
    'createTime'?: number;
    'updateTime'?: number;
    'createdBy'?: string;
    'updatedBy'?: string;
    'accessPolicy'?: { [key: string]: string; };
    'name': string;
    'description'?: string;
    'version'?: number;
    'tasks': Array<WorkflowTask>;
    'inputParameters'?: Array<string>;
    'outputParameters'?: { [key: string]: any; };
    'failureWorkflow'?: string;
    'schemaVersion'?: number;
    'restartable'?: boolean;
    'workflowStatusListenerEnabled'?: boolean;
    'ownerEmail'?: string;
    'timeoutPolicy'?: WorkflowDefTimeoutPolicyEnum;
    'timeoutSeconds': number;
    'variables'?: { [key: string]: any; };
    'inputTemplate'?: { [key: string]: any; };

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
            "name": "accessPolicy",
            "baseName": "accessPolicy",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "tasks",
            "baseName": "tasks",
            "type": "Array<WorkflowTask>",
            "format": ""
        },
        {
            "name": "inputParameters",
            "baseName": "inputParameters",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "outputParameters",
            "baseName": "outputParameters",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "failureWorkflow",
            "baseName": "failureWorkflow",
            "type": "string",
            "format": ""
        },
        {
            "name": "schemaVersion",
            "baseName": "schemaVersion",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "restartable",
            "baseName": "restartable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "workflowStatusListenerEnabled",
            "baseName": "workflowStatusListenerEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ownerEmail",
            "baseName": "ownerEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeoutPolicy",
            "baseName": "timeoutPolicy",
            "type": "WorkflowDefTimeoutPolicyEnum",
            "format": ""
        },
        {
            "name": "timeoutSeconds",
            "baseName": "timeoutSeconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "variables",
            "baseName": "variables",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "inputTemplate",
            "baseName": "inputTemplate",
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WorkflowDef.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WorkflowDefTimeoutPolicyEnum {
    TimeOutWf = 'TIME_OUT_WF',
    AlertOnly = 'ALERT_ONLY'
}
