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

import { TaskSummary } from '../models/TaskSummary';
import { HttpFile } from '../http/http';

export class SearchResultTaskSummary {
    'totalHits'?: number;
    'results'?: Array<TaskSummary>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "totalHits",
            "baseName": "totalHits",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<TaskSummary>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SearchResultTaskSummary.attributeTypeMap;
    }

    public constructor() {
    }
}
