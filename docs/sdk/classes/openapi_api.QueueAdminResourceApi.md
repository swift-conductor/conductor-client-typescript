[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / QueueAdminResourceApi

# Class: QueueAdminResourceApi

[openapi/api](../modules/openapi_api.md).QueueAdminResourceApi

## Table of contents

### Constructors

- [constructor](openapi_api.QueueAdminResourceApi.md#constructor)

### Properties

- [api](openapi_api.QueueAdminResourceApi.md#api)

### Methods

- [names](openapi_api.QueueAdminResourceApi.md#names)
- [namesWithHttpInfo](openapi_api.QueueAdminResourceApi.md#nameswithhttpinfo)
- [size1](openapi_api.QueueAdminResourceApi.md#size1)
- [size1WithHttpInfo](openapi_api.QueueAdminResourceApi.md#size1withhttpinfo)
- [update1](openapi_api.QueueAdminResourceApi.md#update1)
- [update1WithHttpInfo](openapi_api.QueueAdminResourceApi.md#update1withhttpinfo)
- [updateByTaskId](openapi_api.QueueAdminResourceApi.md#updatebytaskid)
- [updateByTaskIdWithHttpInfo](openapi_api.QueueAdminResourceApi.md#updatebytaskidwithhttpinfo)

## Constructors

### constructor

• **new QueueAdminResourceApi**(`configuration`, `requestFactory?`, `responseProcessor?`): [`QueueAdminResourceApi`](openapi_api.QueueAdminResourceApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |
| `requestFactory?` | `QueueAdminResourceApiRequestFactory` |
| `responseProcessor?` | `QueueAdminResourceApiResponseProcessor` |

#### Returns

[`QueueAdminResourceApi`](openapi_api.QueueAdminResourceApi.md)

#### Defined in

[openapi/api/types/PromiseAPI.ts:540](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L540)

## Properties

### api

• `Private` **api**: `ObservableQueueAdminResourceApi`

#### Defined in

[openapi/api/types/PromiseAPI.ts:538](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L538)

## Methods

### names

▸ **names**(`_options?`): `Promise`\<\{ `[key: string]`: `string`;  }\>

Get Queue Names

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<\{ `[key: string]`: `string`;  }\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:559](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L559)

___

### namesWithHttpInfo

▸ **namesWithHttpInfo**(`_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `string`;  }\>\>

Get Queue Names

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `string`;  }\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:551](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L551)

___

### size1

▸ **size1**(`_options?`): `Promise`\<\{ `[key: string]`: `number`;  }\>

Get the queue length

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<\{ `[key: string]`: `number`;  }\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:575](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L575)

___

### size1WithHttpInfo

▸ **size1WithHttpInfo**(`_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `number`;  }\>\>

Get the queue length

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `number`;  }\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:567](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L567)

___

### update1

▸ **update1**(`workflowId`, `taskRefName`, `status`, `requestBody`, `_options?`): `Promise`\<`void`\>

Publish a message in queue to mark a wait task as completed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `taskRefName` | `string` |
| `status` | ``"IN_PROGRESS"`` \| ``"CANCELED"`` \| ``"FAILED"`` \| ``"FAILED_WITH_TERMINAL_ERROR"`` \| ``"COMPLETED"`` \| ``"COMPLETED_WITH_ERRORS"`` \| ``"SCHEDULED"`` \| ``"TIMED_OUT"`` \| ``"SKIPPED"`` |
| `requestBody` | `Object` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:599](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L599)

___

### update1WithHttpInfo

▸ **update1WithHttpInfo**(`workflowId`, `taskRefName`, `status`, `requestBody`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Publish a message in queue to mark a wait task as completed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `taskRefName` | `string` |
| `status` | ``"IN_PROGRESS"`` \| ``"CANCELED"`` \| ``"FAILED"`` \| ``"FAILED_WITH_TERMINAL_ERROR"`` \| ``"COMPLETED"`` \| ``"COMPLETED_WITH_ERRORS"`` \| ``"SCHEDULED"`` \| ``"TIMED_OUT"`` \| ``"SKIPPED"`` |
| `requestBody` | `Object` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:587](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L587)

___

### updateByTaskId

▸ **updateByTaskId**(`workflowId`, `taskId`, `status`, `requestBody`, `_options?`): `Promise`\<`void`\>

Publish a message in queue to mark a wait task (by taskId) as completed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `taskId` | `string` |
| `status` | ``"IN_PROGRESS"`` \| ``"CANCELED"`` \| ``"FAILED"`` \| ``"FAILED_WITH_TERMINAL_ERROR"`` \| ``"COMPLETED"`` \| ``"COMPLETED_WITH_ERRORS"`` \| ``"SCHEDULED"`` \| ``"TIMED_OUT"`` \| ``"SKIPPED"`` |
| `requestBody` | `Object` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:623](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L623)

___

### updateByTaskIdWithHttpInfo

▸ **updateByTaskIdWithHttpInfo**(`workflowId`, `taskId`, `status`, `requestBody`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Publish a message in queue to mark a wait task (by taskId) as completed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `taskId` | `string` |
| `status` | ``"IN_PROGRESS"`` \| ``"CANCELED"`` \| ``"FAILED"`` \| ``"FAILED_WITH_TERMINAL_ERROR"`` \| ``"COMPLETED"`` \| ``"COMPLETED_WITH_ERRORS"`` \| ``"SCHEDULED"`` \| ``"TIMED_OUT"`` \| ``"SKIPPED"`` |
| `requestBody` | `Object` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:611](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L611)
