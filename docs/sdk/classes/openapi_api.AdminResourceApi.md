[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / AdminResourceApi

# Class: AdminResourceApi

[openapi/api](../modules/openapi_api.md).AdminResourceApi

## Table of contents

### Constructors

- [constructor](openapi_api.AdminResourceApi.md#constructor)

### Properties

- [api](openapi_api.AdminResourceApi.md#api)

### Methods

- [getAllConfig](openapi_api.AdminResourceApi.md#getallconfig)
- [getAllConfigWithHttpInfo](openapi_api.AdminResourceApi.md#getallconfigwithhttpinfo)
- [getEventQueues](openapi_api.AdminResourceApi.md#geteventqueues)
- [getEventQueuesWithHttpInfo](openapi_api.AdminResourceApi.md#geteventqueueswithhttpinfo)
- [requeueSweep](openapi_api.AdminResourceApi.md#requeuesweep)
- [requeueSweepWithHttpInfo](openapi_api.AdminResourceApi.md#requeuesweepwithhttpinfo)
- [verifyAndRepairWorkflowConsistency](openapi_api.AdminResourceApi.md#verifyandrepairworkflowconsistency)
- [verifyAndRepairWorkflowConsistencyWithHttpInfo](openapi_api.AdminResourceApi.md#verifyandrepairworkflowconsistencywithhttpinfo)
- [view](openapi_api.AdminResourceApi.md#view)
- [viewWithHttpInfo](openapi_api.AdminResourceApi.md#viewwithhttpinfo)

## Constructors

### constructor

• **new AdminResourceApi**(`configuration`, `requestFactory?`, `responseProcessor?`): [`AdminResourceApi`](openapi_api.AdminResourceApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |
| `requestFactory?` | `AdminResourceApiRequestFactory` |
| `responseProcessor?` | `AdminResourceApiResponseProcessor` |

#### Returns

[`AdminResourceApi`](openapi_api.AdminResourceApi.md)

#### Defined in

[openapi/api/types/PromiseAPI.ts:38](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L38)

## Properties

### api

• `Private` **api**: `ObservableAdminResourceApi`

#### Defined in

[openapi/api/types/PromiseAPI.ts:36](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L36)

## Methods

### getAllConfig

▸ **getAllConfig**(`_options?`): `Promise`\<\{ `[key: string]`: `any`;  }\>

Get all the configuration parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<\{ `[key: string]`: `any`;  }\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:57](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L57)

___

### getAllConfigWithHttpInfo

▸ **getAllConfigWithHttpInfo**(`_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `any`;  }\>\>

Get all the configuration parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `any`;  }\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:49](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L49)

___

### getEventQueues

▸ **getEventQueues**(`verbose?`, `_options?`): `Promise`\<\{ `[key: string]`: `any`;  }\>

Get registered queues

#### Parameters

| Name | Type |
| :------ | :------ |
| `verbose?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<\{ `[key: string]`: `any`;  }\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:75](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L75)

___

### getEventQueuesWithHttpInfo

▸ **getEventQueuesWithHttpInfo**(`verbose?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `any`;  }\>\>

Get registered queues

#### Parameters

| Name | Type |
| :------ | :------ |
| `verbose?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `any`;  }\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:66](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L66)

___

### requeueSweep

▸ **requeueSweep**(`workflowId`, `_options?`): `Promise`\<`string`\>

Queue up all the running workflows for sweep

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:93](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L93)

___

### requeueSweepWithHttpInfo

▸ **requeueSweepWithHttpInfo**(`workflowId`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

Queue up all the running workflows for sweep

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:84](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L84)

___

### verifyAndRepairWorkflowConsistency

▸ **verifyAndRepairWorkflowConsistency**(`workflowId`, `_options?`): `Promise`\<`string`\>

Verify and repair workflow consistency

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:111](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L111)

___

### verifyAndRepairWorkflowConsistencyWithHttpInfo

▸ **verifyAndRepairWorkflowConsistencyWithHttpInfo**(`workflowId`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

Verify and repair workflow consistency

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:102](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L102)

___

### view

▸ **view**(`tasktype`, `start?`, `count?`, `_options?`): `Promise`\<[`Task`](src_common.Task.md)[]\>

Get the list of pending tasks for a given task type

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasktype` | `string` |
| `start?` | `number` |
| `count?` | `number` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`Task`](src_common.Task.md)[]\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:133](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L133)

___

### viewWithHttpInfo

▸ **viewWithHttpInfo**(`tasktype`, `start?`, `count?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Task`](src_common.Task.md)[]\>\>

Get the list of pending tasks for a given task type

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasktype` | `string` |
| `start?` | `number` |
| `count?` | `number` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Task`](src_common.Task.md)[]\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:122](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L122)
