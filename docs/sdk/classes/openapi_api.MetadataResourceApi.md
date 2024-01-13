[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / MetadataResourceApi

# Class: MetadataResourceApi

[openapi/api](../modules/openapi_api.md).MetadataResourceApi

## Table of contents

### Constructors

- [constructor](openapi_api.MetadataResourceApi.md#constructor)

### Properties

- [api](openapi_api.MetadataResourceApi.md#api)

### Methods

- [create](openapi_api.MetadataResourceApi.md#create)
- [createWithHttpInfo](openapi_api.MetadataResourceApi.md#createwithhttpinfo)
- [get](openapi_api.MetadataResourceApi.md#get)
- [getAll](openapi_api.MetadataResourceApi.md#getall)
- [getAllWithHttpInfo](openapi_api.MetadataResourceApi.md#getallwithhttpinfo)
- [getAllWorkflowsWithLatestVersions](openapi_api.MetadataResourceApi.md#getallworkflowswithlatestversions)
- [getAllWorkflowsWithLatestVersionsWithHttpInfo](openapi_api.MetadataResourceApi.md#getallworkflowswithlatestversionswithhttpinfo)
- [getTaskDef](openapi_api.MetadataResourceApi.md#gettaskdef)
- [getTaskDefWithHttpInfo](openapi_api.MetadataResourceApi.md#gettaskdefwithhttpinfo)
- [getTaskDefs](openapi_api.MetadataResourceApi.md#gettaskdefs)
- [getTaskDefsWithHttpInfo](openapi_api.MetadataResourceApi.md#gettaskdefswithhttpinfo)
- [getWithHttpInfo](openapi_api.MetadataResourceApi.md#getwithhttpinfo)
- [getWorkflowNamesAndVersions](openapi_api.MetadataResourceApi.md#getworkflownamesandversions)
- [getWorkflowNamesAndVersionsWithHttpInfo](openapi_api.MetadataResourceApi.md#getworkflownamesandversionswithhttpinfo)
- [registerTaskDef](openapi_api.MetadataResourceApi.md#registertaskdef)
- [registerTaskDefWithHttpInfo](openapi_api.MetadataResourceApi.md#registertaskdefwithhttpinfo)
- [unregisterTaskDef](openapi_api.MetadataResourceApi.md#unregistertaskdef)
- [unregisterTaskDefWithHttpInfo](openapi_api.MetadataResourceApi.md#unregistertaskdefwithhttpinfo)
- [unregisterWorkflowDef](openapi_api.MetadataResourceApi.md#unregisterworkflowdef)
- [unregisterWorkflowDefWithHttpInfo](openapi_api.MetadataResourceApi.md#unregisterworkflowdefwithhttpinfo)
- [update](openapi_api.MetadataResourceApi.md#update)
- [updateTaskDef](openapi_api.MetadataResourceApi.md#updatetaskdef)
- [updateTaskDefWithHttpInfo](openapi_api.MetadataResourceApi.md#updatetaskdefwithhttpinfo)
- [updateWithHttpInfo](openapi_api.MetadataResourceApi.md#updatewithhttpinfo)
- [validate](openapi_api.MetadataResourceApi.md#validate)
- [validateWithHttpInfo](openapi_api.MetadataResourceApi.md#validatewithhttpinfo)

## Constructors

### constructor

• **new MetadataResourceApi**(`configuration`, `requestFactory?`, `responseProcessor?`): [`MetadataResourceApi`](openapi_api.MetadataResourceApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |
| `requestFactory?` | `MetadataResourceApiRequestFactory` |
| `responseProcessor?` | `MetadataResourceApiResponseProcessor` |

#### Returns

[`MetadataResourceApi`](openapi_api.MetadataResourceApi.md)

#### Defined in

[openapi/api/types/PromiseAPI.ts:291](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L291)

## Properties

### api

• `Private` **api**: `ObservableMetadataResourceApi`

#### Defined in

[openapi/api/types/PromiseAPI.ts:289](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L289)

## Methods

### create

▸ **create**(`workflowDef`, `_options?`): `Promise`\<`void`\>

Create a new workflow definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowDef` | [`WorkflowDef`](src_common.WorkflowDef.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:312](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L312)

___

### createWithHttpInfo

▸ **createWithHttpInfo**(`workflowDef`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Create a new workflow definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowDef` | [`WorkflowDef`](src_common.WorkflowDef.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:303](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L303)

___

### get

▸ **get**(`name`, `version?`, `_options?`): `Promise`\<[`WorkflowDef`](src_common.WorkflowDef.md)\>

Retrieves workflow definition along with blueprint

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version?` | `number` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`WorkflowDef`](src_common.WorkflowDef.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:332](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L332)

___

### getAll

▸ **getAll**(`_options?`): `Promise`\<[`WorkflowDef`](src_common.WorkflowDef.md)[]\>

Retrieves all workflow definition along with blueprint

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`WorkflowDef`](src_common.WorkflowDef.md)[]\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:348](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L348)

___

### getAllWithHttpInfo

▸ **getAllWithHttpInfo**(`_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`WorkflowDef`](src_common.WorkflowDef.md)[]\>\>

Retrieves all workflow definition along with blueprint

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`WorkflowDef`](src_common.WorkflowDef.md)[]\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:340](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L340)

___

### getAllWorkflowsWithLatestVersions

▸ **getAllWorkflowsWithLatestVersions**(`_options?`): `Promise`\<[`WorkflowDef`](src_common.WorkflowDef.md)[]\>

Returns only the latest version of all workflow definitions

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`WorkflowDef`](src_common.WorkflowDef.md)[]\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:364](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L364)

___

### getAllWorkflowsWithLatestVersionsWithHttpInfo

▸ **getAllWorkflowsWithLatestVersionsWithHttpInfo**(`_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`WorkflowDef`](src_common.WorkflowDef.md)[]\>\>

Returns only the latest version of all workflow definitions

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`WorkflowDef`](src_common.WorkflowDef.md)[]\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:356](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L356)

___

### getTaskDef

▸ **getTaskDef**(`tasktype`, `_options?`): `Promise`\<[`TaskDef`](src_common.TaskDef.md)\>

Gets the task definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasktype` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`TaskDef`](src_common.TaskDef.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:382](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L382)

___

### getTaskDefWithHttpInfo

▸ **getTaskDefWithHttpInfo**(`tasktype`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`TaskDef`](src_common.TaskDef.md)\>\>

Gets the task definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasktype` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`TaskDef`](src_common.TaskDef.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:373](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L373)

___

### getTaskDefs

▸ **getTaskDefs**(`_options?`): `Promise`\<[`TaskDef`](src_common.TaskDef.md)[]\>

Gets all task definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`TaskDef`](src_common.TaskDef.md)[]\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:398](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L398)

___

### getTaskDefsWithHttpInfo

▸ **getTaskDefsWithHttpInfo**(`_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`TaskDef`](src_common.TaskDef.md)[]\>\>

Gets all task definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`TaskDef`](src_common.TaskDef.md)[]\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:390](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L390)

___

### getWithHttpInfo

▸ **getWithHttpInfo**(`name`, `version?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`WorkflowDef`](src_common.WorkflowDef.md)\>\>

Retrieves workflow definition along with blueprint

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version?` | `number` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`WorkflowDef`](src_common.WorkflowDef.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:322](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L322)

___

### getWorkflowNamesAndVersions

▸ **getWorkflowNamesAndVersions**(`_options?`): `Promise`\<\{ `[key: string]`: `any`;  }\>

Returns workflow names and versions only (no definition bodies)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<\{ `[key: string]`: `any`;  }\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:414](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L414)

___

### getWorkflowNamesAndVersionsWithHttpInfo

▸ **getWorkflowNamesAndVersionsWithHttpInfo**(`_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `any`;  }\>\>

Returns workflow names and versions only (no definition bodies)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `any`;  }\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:406](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L406)

___

### registerTaskDef

▸ **registerTaskDef**(`taskDef`, `_options?`): `Promise`\<`void`\>

Create new task definition(s)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskDef` | [`TaskDef`](src_common.TaskDef.md)[] |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:432](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L432)

___

### registerTaskDefWithHttpInfo

▸ **registerTaskDefWithHttpInfo**(`taskDef`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Create new task definition(s)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskDef` | [`TaskDef`](src_common.TaskDef.md)[] |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:423](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L423)

___

### unregisterTaskDef

▸ **unregisterTaskDef**(`tasktype`, `_options?`): `Promise`\<`void`\>

Remove a task definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasktype` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:450](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L450)

___

### unregisterTaskDefWithHttpInfo

▸ **unregisterTaskDefWithHttpInfo**(`tasktype`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Remove a task definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasktype` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:441](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L441)

___

### unregisterWorkflowDef

▸ **unregisterWorkflowDef**(`name`, `version`, `_options?`): `Promise`\<`void`\>

Removes workflow definition. It does not remove workflows associated with the definition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version` | `number` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:470](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L470)

___

### unregisterWorkflowDefWithHttpInfo

▸ **unregisterWorkflowDefWithHttpInfo**(`name`, `version`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Removes workflow definition. It does not remove workflows associated with the definition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version` | `number` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:460](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L460)

___

### update

▸ **update**(`workflowDef`, `_options?`): `Promise`\<[`BulkResponse`](openapi_api.BulkResponse.md)\>

Create or update workflow definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowDef` | [`WorkflowDef`](src_common.WorkflowDef.md)[] |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`BulkResponse`](openapi_api.BulkResponse.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:488](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L488)

___

### updateTaskDef

▸ **updateTaskDef**(`taskDef`, `_options?`): `Promise`\<`void`\>

Update an existing task

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskDef` | [`TaskDef`](src_common.TaskDef.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:506](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L506)

___

### updateTaskDefWithHttpInfo

▸ **updateTaskDefWithHttpInfo**(`taskDef`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Update an existing task

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskDef` | [`TaskDef`](src_common.TaskDef.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:497](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L497)

___

### updateWithHttpInfo

▸ **updateWithHttpInfo**(`workflowDef`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`BulkResponse`](openapi_api.BulkResponse.md)\>\>

Create or update workflow definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowDef` | [`WorkflowDef`](src_common.WorkflowDef.md)[] |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`BulkResponse`](openapi_api.BulkResponse.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:479](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L479)

___

### validate

▸ **validate**(`workflowDef`, `_options?`): `Promise`\<`void`\>

Validates a new workflow definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowDef` | [`WorkflowDef`](src_common.WorkflowDef.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:524](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L524)

___

### validateWithHttpInfo

▸ **validateWithHttpInfo**(`workflowDef`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Validates a new workflow definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowDef` | [`WorkflowDef`](src_common.WorkflowDef.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:515](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L515)
