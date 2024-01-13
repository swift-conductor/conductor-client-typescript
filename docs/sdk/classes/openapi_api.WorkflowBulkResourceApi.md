[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / WorkflowBulkResourceApi

# Class: WorkflowBulkResourceApi

[openapi/api](../modules/openapi_api.md).WorkflowBulkResourceApi

## Table of contents

### Constructors

- [constructor](openapi_api.WorkflowBulkResourceApi.md#constructor)

### Properties

- [api](openapi_api.WorkflowBulkResourceApi.md#api)

### Methods

- [pauseWorkflow1](openapi_api.WorkflowBulkResourceApi.md#pauseworkflow1)
- [pauseWorkflow1WithHttpInfo](openapi_api.WorkflowBulkResourceApi.md#pauseworkflow1withhttpinfo)
- [restart1](openapi_api.WorkflowBulkResourceApi.md#restart1)
- [restart1WithHttpInfo](openapi_api.WorkflowBulkResourceApi.md#restart1withhttpinfo)
- [resumeWorkflow1](openapi_api.WorkflowBulkResourceApi.md#resumeworkflow1)
- [resumeWorkflow1WithHttpInfo](openapi_api.WorkflowBulkResourceApi.md#resumeworkflow1withhttpinfo)
- [retry1](openapi_api.WorkflowBulkResourceApi.md#retry1)
- [retry1WithHttpInfo](openapi_api.WorkflowBulkResourceApi.md#retry1withhttpinfo)
- [terminate](openapi_api.WorkflowBulkResourceApi.md#terminate)
- [terminateWithHttpInfo](openapi_api.WorkflowBulkResourceApi.md#terminatewithhttpinfo)

## Constructors

### constructor

• **new WorkflowBulkResourceApi**(`configuration`, `requestFactory?`, `responseProcessor?`): [`WorkflowBulkResourceApi`](openapi_api.WorkflowBulkResourceApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |
| `requestFactory?` | `WorkflowBulkResourceApiRequestFactory` |
| `responseProcessor?` | `WorkflowBulkResourceApiResponseProcessor` |

#### Returns

[`WorkflowBulkResourceApi`](openapi_api.WorkflowBulkResourceApi.md)

#### Defined in

[openapi/api/types/PromiseAPI.ts:984](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L984)

## Properties

### api

• `Private` **api**: `ObservableWorkflowBulkResourceApi`

#### Defined in

[openapi/api/types/PromiseAPI.ts:982](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L982)

## Methods

### pauseWorkflow1

▸ **pauseWorkflow1**(`requestBody`, `_options?`): `Promise`\<[`BulkResponse`](openapi_api.BulkResponse.md)\>

Pause the list of workflows

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`BulkResponse`](openapi_api.BulkResponse.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1005](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1005)

___

### pauseWorkflow1WithHttpInfo

▸ **pauseWorkflow1WithHttpInfo**(`requestBody`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`BulkResponse`](openapi_api.BulkResponse.md)\>\>

Pause the list of workflows

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`BulkResponse`](openapi_api.BulkResponse.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:996](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L996)

___

### restart1

▸ **restart1**(`requestBody`, `useLatestDefinitions?`, `_options?`): `Promise`\<[`BulkResponse`](openapi_api.BulkResponse.md)\>

Restart the list of completed workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |
| `useLatestDefinitions?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`BulkResponse`](openapi_api.BulkResponse.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1025](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1025)

___

### restart1WithHttpInfo

▸ **restart1WithHttpInfo**(`requestBody`, `useLatestDefinitions?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`BulkResponse`](openapi_api.BulkResponse.md)\>\>

Restart the list of completed workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |
| `useLatestDefinitions?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`BulkResponse`](openapi_api.BulkResponse.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1015](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1015)

___

### resumeWorkflow1

▸ **resumeWorkflow1**(`requestBody`, `_options?`): `Promise`\<[`BulkResponse`](openapi_api.BulkResponse.md)\>

Resume the list of workflows

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`BulkResponse`](openapi_api.BulkResponse.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1043](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1043)

___

### resumeWorkflow1WithHttpInfo

▸ **resumeWorkflow1WithHttpInfo**(`requestBody`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`BulkResponse`](openapi_api.BulkResponse.md)\>\>

Resume the list of workflows

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`BulkResponse`](openapi_api.BulkResponse.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1034](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1034)

___

### retry1

▸ **retry1**(`requestBody`, `_options?`): `Promise`\<[`BulkResponse`](openapi_api.BulkResponse.md)\>

Retry the last failed task for each workflow from the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`BulkResponse`](openapi_api.BulkResponse.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1061](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1061)

___

### retry1WithHttpInfo

▸ **retry1WithHttpInfo**(`requestBody`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`BulkResponse`](openapi_api.BulkResponse.md)\>\>

Retry the last failed task for each workflow from the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`BulkResponse`](openapi_api.BulkResponse.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1052](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1052)

___

### terminate

▸ **terminate**(`requestBody`, `reason?`, `_options?`): `Promise`\<[`BulkResponse`](openapi_api.BulkResponse.md)\>

Terminate workflows execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |
| `reason?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`BulkResponse`](openapi_api.BulkResponse.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1081](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1081)

___

### terminateWithHttpInfo

▸ **terminateWithHttpInfo**(`requestBody`, `reason?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`BulkResponse`](openapi_api.BulkResponse.md)\>\>

Terminate workflows execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |
| `reason?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`BulkResponse`](openapi_api.BulkResponse.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:1071](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L1071)
