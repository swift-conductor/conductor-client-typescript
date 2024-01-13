[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / WorkflowResourceApi

# Class: WorkflowResourceApi

[openapi/api](../modules/openapi_api.md).WorkflowResourceApi

## Table of contents

### Constructors

- [constructor](openapi_api.WorkflowResourceApi.md#constructor)

### Properties

- [api](openapi_api.WorkflowResourceApi.md#api)

### Methods

- [\_delete](openapi_api.WorkflowResourceApi.md#_delete)
- [\_deleteWithHttpInfo](openapi_api.WorkflowResourceApi.md#_deletewithhttpinfo)
- [decide](openapi_api.WorkflowResourceApi.md#decide)
- [decideWithHttpInfo](openapi_api.WorkflowResourceApi.md#decidewithhttpinfo)
- [getExecutionStatus](openapi_api.WorkflowResourceApi.md#getexecutionstatus)
- [getExecutionStatusWithHttpInfo](openapi_api.WorkflowResourceApi.md#getexecutionstatuswithhttpinfo)
- [getExternalStorageLocation](openapi_api.WorkflowResourceApi.md#getexternalstoragelocation)
- [getExternalStorageLocation1](openapi_api.WorkflowResourceApi.md#getexternalstoragelocation1)
- [getExternalStorageLocation1WithHttpInfo](openapi_api.WorkflowResourceApi.md#getexternalstoragelocation1withhttpinfo)
- [getExternalStorageLocationWithHttpInfo](openapi_api.WorkflowResourceApi.md#getexternalstoragelocationwithhttpinfo)
- [getRunningWorkflow](openapi_api.WorkflowResourceApi.md#getrunningworkflow)
- [getRunningWorkflowWithHttpInfo](openapi_api.WorkflowResourceApi.md#getrunningworkflowwithhttpinfo)
- [getWorkflows](openapi_api.WorkflowResourceApi.md#getworkflows)
- [getWorkflows1](openapi_api.WorkflowResourceApi.md#getworkflows1)
- [getWorkflows1WithHttpInfo](openapi_api.WorkflowResourceApi.md#getworkflows1withhttpinfo)
- [getWorkflowsWithHttpInfo](openapi_api.WorkflowResourceApi.md#getworkflowswithhttpinfo)
- [pauseWorkflow](openapi_api.WorkflowResourceApi.md#pauseworkflow)
- [pauseWorkflowWithHttpInfo](openapi_api.WorkflowResourceApi.md#pauseworkflowwithhttpinfo)
- [rerun](openapi_api.WorkflowResourceApi.md#rerun)
- [rerunWithHttpInfo](openapi_api.WorkflowResourceApi.md#rerunwithhttpinfo)
- [resetWorkflow](openapi_api.WorkflowResourceApi.md#resetworkflow)
- [resetWorkflowWithHttpInfo](openapi_api.WorkflowResourceApi.md#resetworkflowwithhttpinfo)
- [restart](openapi_api.WorkflowResourceApi.md#restart)
- [restartWithHttpInfo](openapi_api.WorkflowResourceApi.md#restartwithhttpinfo)
- [resumeWorkflow](openapi_api.WorkflowResourceApi.md#resumeworkflow)
- [resumeWorkflowWithHttpInfo](openapi_api.WorkflowResourceApi.md#resumeworkflowwithhttpinfo)
- [retry](openapi_api.WorkflowResourceApi.md#retry)
- [retryWithHttpInfo](openapi_api.WorkflowResourceApi.md#retrywithhttpinfo)
- [search](openapi_api.WorkflowResourceApi.md#search)
- [searchV2](openapi_api.WorkflowResourceApi.md#searchv2)
- [searchV2WithHttpInfo](openapi_api.WorkflowResourceApi.md#searchv2withhttpinfo)
- [searchWithHttpInfo](openapi_api.WorkflowResourceApi.md#searchwithhttpinfo)
- [searchWorkflowsByTasks](openapi_api.WorkflowResourceApi.md#searchworkflowsbytasks)
- [searchWorkflowsByTasksV2](openapi_api.WorkflowResourceApi.md#searchworkflowsbytasksv2)
- [searchWorkflowsByTasksV2WithHttpInfo](openapi_api.WorkflowResourceApi.md#searchworkflowsbytasksv2withhttpinfo)
- [searchWorkflowsByTasksWithHttpInfo](openapi_api.WorkflowResourceApi.md#searchworkflowsbytaskswithhttpinfo)
- [skipTaskFromWorkflow](openapi_api.WorkflowResourceApi.md#skiptaskfromworkflow)
- [skipTaskFromWorkflowWithHttpInfo](openapi_api.WorkflowResourceApi.md#skiptaskfromworkflowwithhttpinfo)
- [startWorkflow](openapi_api.WorkflowResourceApi.md#startworkflow)
- [startWorkflow1](openapi_api.WorkflowResourceApi.md#startworkflow1)
- [startWorkflow1WithHttpInfo](openapi_api.WorkflowResourceApi.md#startworkflow1withhttpinfo)
- [startWorkflowWithHttpInfo](openapi_api.WorkflowResourceApi.md#startworkflowwithhttpinfo)
- [terminate1](openapi_api.WorkflowResourceApi.md#terminate1)
- [terminate1WithHttpInfo](openapi_api.WorkflowResourceApi.md#terminate1withhttpinfo)
- [testWorkflow](openapi_api.WorkflowResourceApi.md#testworkflow)
- [testWorkflowWithHttpInfo](openapi_api.WorkflowResourceApi.md#testworkflowwithhttpinfo)

## Constructors

### constructor

• **new WorkflowResourceApi**(`configuration`, `requestFactory?`, `responseProcessor?`): [`WorkflowResourceApi`](openapi_api.WorkflowResourceApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |
| `requestFactory?` | `WorkflowResourceApiRequestFactory` |
| `responseProcessor?` | `WorkflowResourceApiResponseProcessor` |

#### Returns

[`WorkflowResourceApi`](openapi_api.WorkflowResourceApi.md)

#### Defined in

[openapi/api/types/PromiseAPI.ts:1097](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1097)

## Properties

### api

• `Private` **api**: `ObservableWorkflowResourceApi`

#### Defined in

[openapi/api/types/PromiseAPI.ts:1095](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1095)

## Methods

### \_delete

▸ **_delete**(`workflowId`, `archiveWorkflow?`, `_options?`): `Promise`\<`void`\>

Removes the workflow from the system

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `archiveWorkflow?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1120](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1120)

___

### \_deleteWithHttpInfo

▸ **_deleteWithHttpInfo**(`workflowId`, `archiveWorkflow?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Removes the workflow from the system

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `archiveWorkflow?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1110](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1110)

___

### decide

▸ **decide**(`workflowId`, `_options?`): `Promise`\<`void`\>

Starts the decision task for a workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1138](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1138)

___

### decideWithHttpInfo

▸ **decideWithHttpInfo**(`workflowId`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Starts the decision task for a workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1129](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1129)

___

### getExecutionStatus

▸ **getExecutionStatus**(`workflowId`, `includeTasks?`, `_options?`): `Promise`\<[`Workflow`](src_common.Workflow.md)\>

Gets the workflow by workflow id

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `includeTasks?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`Workflow`](src_common.Workflow.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1158](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1158)

___

### getExecutionStatusWithHttpInfo

▸ **getExecutionStatusWithHttpInfo**(`workflowId`, `includeTasks?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Workflow`](src_common.Workflow.md)\>\>

Gets the workflow by workflow id

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `includeTasks?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Workflow`](src_common.Workflow.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1148](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1148)

___

### getExternalStorageLocation

▸ **getExternalStorageLocation**(`path`, `operation`, `payloadType`, `_options?`): `Promise`\<[`ExternalStorageLocation`](src_common.ExternalStorageLocation.md)\>

Get the uri and path of the external storage where the workflow payload is to be stored

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `operation` | `string` |
| `payloadType` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`ExternalStorageLocation`](src_common.ExternalStorageLocation.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1180](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1180)

___

### getExternalStorageLocation1

▸ **getExternalStorageLocation1**(`path`, `operation`, `payloadType`, `_options?`): `Promise`\<[`ExternalStorageLocation`](src_common.ExternalStorageLocation.md)\>

Get the uri and path of the external storage where the workflow payload is to be stored

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `operation` | `string` |
| `payloadType` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`ExternalStorageLocation`](src_common.ExternalStorageLocation.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1202](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1202)

___

### getExternalStorageLocation1WithHttpInfo

▸ **getExternalStorageLocation1WithHttpInfo**(`path`, `operation`, `payloadType`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`ExternalStorageLocation`](src_common.ExternalStorageLocation.md)\>\>

Get the uri and path of the external storage where the workflow payload is to be stored

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `operation` | `string` |
| `payloadType` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`ExternalStorageLocation`](src_common.ExternalStorageLocation.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1191](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1191)

___

### getExternalStorageLocationWithHttpInfo

▸ **getExternalStorageLocationWithHttpInfo**(`path`, `operation`, `payloadType`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`ExternalStorageLocation`](src_common.ExternalStorageLocation.md)\>\>

Get the uri and path of the external storage where the workflow payload is to be stored

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `operation` | `string` |
| `payloadType` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`ExternalStorageLocation`](src_common.ExternalStorageLocation.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1169](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1169)

___

### getRunningWorkflow

▸ **getRunningWorkflow**(`name`, `version?`, `startTime?`, `endTime?`, `_options?`): `Promise`\<`string`[]\>

Retrieve all the running workflows

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version?` | `number` |
| `startTime?` | `number` |
| `endTime?` | `number` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1226](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1226)

___

### getRunningWorkflowWithHttpInfo

▸ **getRunningWorkflowWithHttpInfo**(`name`, `version?`, `startTime?`, `endTime?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`[]\>\>

Retrieve all the running workflows

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version?` | `number` |
| `startTime?` | `number` |
| `endTime?` | `number` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`[]\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1214](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1214)

___

### getWorkflows

▸ **getWorkflows**(`name`, `requestBody`, `includeClosed?`, `includeTasks?`, `_options?`): `Promise`\<\{ `[key: string]`: [`Workflow`](src_common.Workflow.md)[];  }\>

Lists workflows for the given correlation id list

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `requestBody` | `string`[] |
| `includeClosed?` | `boolean` |
| `includeTasks?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<\{ `[key: string]`: [`Workflow`](src_common.Workflow.md)[];  }\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1250](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1250)

___

### getWorkflows1

▸ **getWorkflows1**(`name`, `correlationId`, `includeClosed?`, `includeTasks?`, `_options?`): `Promise`\<[`Workflow`](src_common.Workflow.md)[]\>

Lists workflows for the given correlation id

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `correlationId` | `string` |
| `includeClosed?` | `boolean` |
| `includeTasks?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`Workflow`](src_common.Workflow.md)[]\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1274](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1274)

___

### getWorkflows1WithHttpInfo

▸ **getWorkflows1WithHttpInfo**(`name`, `correlationId`, `includeClosed?`, `includeTasks?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Workflow`](src_common.Workflow.md)[]\>\>

Lists workflows for the given correlation id

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `correlationId` | `string` |
| `includeClosed?` | `boolean` |
| `includeTasks?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Workflow`](src_common.Workflow.md)[]\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1262](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1262)

___

### getWorkflowsWithHttpInfo

▸ **getWorkflowsWithHttpInfo**(`name`, `requestBody`, `includeClosed?`, `includeTasks?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: [`Workflow`](src_common.Workflow.md)[];  }\>\>

Lists workflows for the given correlation id list

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `requestBody` | `string`[] |
| `includeClosed?` | `boolean` |
| `includeTasks?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: [`Workflow`](src_common.Workflow.md)[];  }\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1238](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1238)

___

### pauseWorkflow

▸ **pauseWorkflow**(`workflowId`, `_options?`): `Promise`\<`void`\>

Pauses the workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1292](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1292)

___

### pauseWorkflowWithHttpInfo

▸ **pauseWorkflowWithHttpInfo**(`workflowId`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Pauses the workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1283](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1283)

___

### rerun

▸ **rerun**(`workflowId`, `rerunWorkflowRequest`, `_options?`): `Promise`\<`string`\>

Reruns the workflow from a specific task

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `rerunWorkflowRequest` | [`RerunWorkflowRequest`](src_common.RerunWorkflowRequest.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1312](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1312)

___

### rerunWithHttpInfo

▸ **rerunWithHttpInfo**(`workflowId`, `rerunWorkflowRequest`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

Reruns the workflow from a specific task

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `rerunWorkflowRequest` | [`RerunWorkflowRequest`](src_common.RerunWorkflowRequest.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1302](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1302)

___

### resetWorkflow

▸ **resetWorkflow**(`workflowId`, `_options?`): `Promise`\<`void`\>

Resets callback times of all non-terminal CUSTOM tasks to 0

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1330](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1330)

___

### resetWorkflowWithHttpInfo

▸ **resetWorkflowWithHttpInfo**(`workflowId`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Resets callback times of all non-terminal CUSTOM tasks to 0

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1321](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1321)

___

### restart

▸ **restart**(`workflowId`, `useLatestDefinitions?`, `_options?`): `Promise`\<`void`\>

Restarts a completed workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `useLatestDefinitions?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1350](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1350)

___

### restartWithHttpInfo

▸ **restartWithHttpInfo**(`workflowId`, `useLatestDefinitions?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Restarts a completed workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `useLatestDefinitions?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1340](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1340)

___

### resumeWorkflow

▸ **resumeWorkflow**(`workflowId`, `_options?`): `Promise`\<`void`\>

Resumes the workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1368](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1368)

___

### resumeWorkflowWithHttpInfo

▸ **resumeWorkflowWithHttpInfo**(`workflowId`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Resumes the workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1359](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1359)

___

### retry

▸ **retry**(`workflowId`, `resumeSubworkflowTasks?`, `_options?`): `Promise`\<`void`\>

Retries the last failed task

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `resumeSubworkflowTasks?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1388](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1388)

___

### retryWithHttpInfo

▸ **retryWithHttpInfo**(`workflowId`, `resumeSubworkflowTasks?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Retries the last failed task

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `resumeSubworkflowTasks?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1378](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1378)

___

### search

▸ **search**(`start?`, `size?`, `sort?`, `freeText?`, `query?`, `_options?`): `Promise`\<[`SearchResultWorkflowSummary`](src_common.SearchResultWorkflowSummary.md)\>

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
Search for workflows based on payload and other parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `size?` | `number` |
| `sort?` | `string` |
| `freeText?` | `string` |
| `query?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`SearchResultWorkflowSummary`](src_common.SearchResultWorkflowSummary.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1416](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1416)

___

### searchV2

▸ **searchV2**(`start?`, `size?`, `sort?`, `freeText?`, `query?`, `_options?`): `Promise`\<[`SearchResultWorkflow`](src_common.SearchResultWorkflow.md)\>

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
Search for workflows based on payload and other parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `size?` | `number` |
| `sort?` | `string` |
| `freeText?` | `string` |
| `query?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`SearchResultWorkflow`](src_common.SearchResultWorkflow.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1444](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1444)

___

### searchV2WithHttpInfo

▸ **searchV2WithHttpInfo**(`start?`, `size?`, `sort?`, `freeText?`, `query?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`SearchResultWorkflow`](src_common.SearchResultWorkflow.md)\>\>

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
Search for workflows based on payload and other parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `size?` | `number` |
| `sort?` | `string` |
| `freeText?` | `string` |
| `query?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`SearchResultWorkflow`](src_common.SearchResultWorkflow.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1430](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1430)

___

### searchWithHttpInfo

▸ **searchWithHttpInfo**(`start?`, `size?`, `sort?`, `freeText?`, `query?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`SearchResultWorkflowSummary`](src_common.SearchResultWorkflowSummary.md)\>\>

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
Search for workflows based on payload and other parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `size?` | `number` |
| `sort?` | `string` |
| `freeText?` | `string` |
| `query?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`SearchResultWorkflowSummary`](src_common.SearchResultWorkflowSummary.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1402](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1402)

___

### searchWorkflowsByTasks

▸ **searchWorkflowsByTasks**(`start?`, `size?`, `sort?`, `freeText?`, `query?`, `_options?`): `Promise`\<[`SearchResultWorkflowSummary`](src_common.SearchResultWorkflowSummary.md)\>

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
Search for workflows based on task parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `size?` | `number` |
| `sort?` | `string` |
| `freeText?` | `string` |
| `query?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`SearchResultWorkflowSummary`](src_common.SearchResultWorkflowSummary.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1472](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1472)

___

### searchWorkflowsByTasksV2

▸ **searchWorkflowsByTasksV2**(`start?`, `size?`, `sort?`, `freeText?`, `query?`, `_options?`): `Promise`\<[`SearchResultWorkflow`](src_common.SearchResultWorkflow.md)\>

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
Search for workflows based on task parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `size?` | `number` |
| `sort?` | `string` |
| `freeText?` | `string` |
| `query?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`SearchResultWorkflow`](src_common.SearchResultWorkflow.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1500](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1500)

___

### searchWorkflowsByTasksV2WithHttpInfo

▸ **searchWorkflowsByTasksV2WithHttpInfo**(`start?`, `size?`, `sort?`, `freeText?`, `query?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`SearchResultWorkflow`](src_common.SearchResultWorkflow.md)\>\>

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
Search for workflows based on task parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `size?` | `number` |
| `sort?` | `string` |
| `freeText?` | `string` |
| `query?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`SearchResultWorkflow`](src_common.SearchResultWorkflow.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1486](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1486)

___

### searchWorkflowsByTasksWithHttpInfo

▸ **searchWorkflowsByTasksWithHttpInfo**(`start?`, `size?`, `sort?`, `freeText?`, `query?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`SearchResultWorkflowSummary`](src_common.SearchResultWorkflowSummary.md)\>\>

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
Search for workflows based on task parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `size?` | `number` |
| `sort?` | `string` |
| `freeText?` | `string` |
| `query?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`SearchResultWorkflowSummary`](src_common.SearchResultWorkflowSummary.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1458](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1458)

___

### skipTaskFromWorkflow

▸ **skipTaskFromWorkflow**(`workflowId`, `taskReferenceName`, `skipTaskRequest`, `_options?`): `Promise`\<`void`\>

Skips a given task from a current running workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `taskReferenceName` | `string` |
| `skipTaskRequest` | [`SkipTaskRequest`](src_common.SkipTaskRequest.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1522](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1522)

___

### skipTaskFromWorkflowWithHttpInfo

▸ **skipTaskFromWorkflowWithHttpInfo**(`workflowId`, `taskReferenceName`, `skipTaskRequest`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Skips a given task from a current running workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `taskReferenceName` | `string` |
| `skipTaskRequest` | [`SkipTaskRequest`](src_common.SkipTaskRequest.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1511](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1511)

___

### startWorkflow

▸ **startWorkflow**(`startWorkflowRequest`, `_options?`): `Promise`\<`string`\>

Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `startWorkflowRequest` | [`StartWorkflowRequest`](src_common.StartWorkflowRequest.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1540](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1540)

___

### startWorkflow1

▸ **startWorkflow1**(`name`, `requestBody`, `version?`, `correlationId?`, `priority?`, `_options?`): `Promise`\<`string`\>

Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `requestBody` | `Object` |
| `version?` | `number` |
| `correlationId?` | `string` |
| `priority?` | `number` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1566](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1566)

___

### startWorkflow1WithHttpInfo

▸ **startWorkflow1WithHttpInfo**(`name`, `requestBody`, `version?`, `correlationId?`, `priority?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `requestBody` | `Object` |
| `version?` | `number` |
| `correlationId?` | `string` |
| `priority?` | `number` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1553](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1553)

___

### startWorkflowWithHttpInfo

▸ **startWorkflowWithHttpInfo**(`startWorkflowRequest`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `startWorkflowRequest` | [`StartWorkflowRequest`](src_common.StartWorkflowRequest.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1531](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1531)

___

### terminate1

▸ **terminate1**(`workflowId`, `reason?`, `triggerFailureWorkflow?`, `_options?`): `Promise`\<`void`\>

Terminate workflow execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `reason?` | `string` |
| `triggerFailureWorkflow?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1588](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1588)

___

### terminate1WithHttpInfo

▸ **terminate1WithHttpInfo**(`workflowId`, `reason?`, `triggerFailureWorkflow?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Terminate workflow execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `reason?` | `string` |
| `triggerFailureWorkflow?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1577](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1577)

___

### testWorkflow

▸ **testWorkflow**(`workflowTestRequest`, `_options?`): `Promise`\<[`Workflow`](src_common.Workflow.md)\>

Test workflow execution using mock data

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowTestRequest` | [`WorkflowTestRequest`](src_common.WorkflowTestRequest.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`Workflow`](src_common.Workflow.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1606](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1606)

___

### testWorkflowWithHttpInfo

▸ **testWorkflowWithHttpInfo**(`workflowTestRequest`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Workflow`](src_common.Workflow.md)\>\>

Test workflow execution using mock data

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowTestRequest` | [`WorkflowTestRequest`](src_common.WorkflowTestRequest.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Workflow`](src_common.Workflow.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1597](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1597)
