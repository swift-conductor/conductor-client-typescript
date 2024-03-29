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

import { Action } from '../models/Action';
import { HttpFile } from '../http/http';

export class EventHandler {
    'name': string;
    'event': string;
    'condition'?: string;
    'actions': Array<Action>;
    'active'?: boolean;
    'evaluatorType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
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
            "name": "condition",
            "baseName": "condition",
            "type": "string",
            "format": ""
        },
        {
            "name": "actions",
            "baseName": "actions",
            "type": "Array<Action>",
            "format": ""
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "evaluatorType",
            "baseName": "evaluatorType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventHandler.attributeTypeMap;
    }

    public constructor() {
    }
}

