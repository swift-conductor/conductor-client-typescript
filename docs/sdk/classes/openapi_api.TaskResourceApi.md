[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / TaskResourceApi

# Class: TaskResourceApi

[openapi/api](../modules/openapi_api.md).TaskResourceApi

## Table of contents

### Constructors

- [constructor](openapi_api.TaskResourceApi.md#constructor)

### Properties

- [api](openapi_api.TaskResourceApi.md#api)

### Methods

- [all](openapi_api.TaskResourceApi.md#all)
- [allVerbose](openapi_api.TaskResourceApi.md#allverbose)
- [allVerboseWithHttpInfo](openapi_api.TaskResourceApi.md#allverbosewithhttpinfo)
- [allWithHttpInfo](openapi_api.TaskResourceApi.md#allwithhttpinfo)
- [batchPoll](openapi_api.TaskResourceApi.md#batchpoll)
- [batchPollWithHttpInfo](openapi_api.TaskResourceApi.md#batchpollwithhttpinfo)
- [getAllPollData](openapi_api.TaskResourceApi.md#getallpolldata)
- [getAllPollDataWithHttpInfo](openapi_api.TaskResourceApi.md#getallpolldatawithhttpinfo)
- [getExternalStorageLocation2](openapi_api.TaskResourceApi.md#getexternalstoragelocation2)
- [getExternalStorageLocation2WithHttpInfo](openapi_api.TaskResourceApi.md#getexternalstoragelocation2withhttpinfo)
- [getPollData](openapi_api.TaskResourceApi.md#getpolldata)
- [getPollDataWithHttpInfo](openapi_api.TaskResourceApi.md#getpolldatawithhttpinfo)
- [getTask](openapi_api.TaskResourceApi.md#gettask)
- [getTaskLogs](openapi_api.TaskResourceApi.md#gettasklogs)
- [getTaskLogsWithHttpInfo](openapi_api.TaskResourceApi.md#gettasklogswithhttpinfo)
- [getTaskWithHttpInfo](openapi_api.TaskResourceApi.md#gettaskwithhttpinfo)
- [log](openapi_api.TaskResourceApi.md#log)
- [logWithHttpInfo](openapi_api.TaskResourceApi.md#logwithhttpinfo)
- [poll](openapi_api.TaskResourceApi.md#poll)
- [pollWithHttpInfo](openapi_api.TaskResourceApi.md#pollwithhttpinfo)
- [requeuePendingTask](openapi_api.TaskResourceApi.md#requeuependingtask)
- [requeuePendingTaskWithHttpInfo](openapi_api.TaskResourceApi.md#requeuependingtaskwithhttpinfo)
- [search1](openapi_api.TaskResourceApi.md#search1)
- [search1WithHttpInfo](openapi_api.TaskResourceApi.md#search1withhttpinfo)
- [searchV21](openapi_api.TaskResourceApi.md#searchv21)
- [searchV21WithHttpInfo](openapi_api.TaskResourceApi.md#searchv21withhttpinfo)
- [size](openapi_api.TaskResourceApi.md#size)
- [sizeWithHttpInfo](openapi_api.TaskResourceApi.md#sizewithhttpinfo)
- [taskDepth](openapi_api.TaskResourceApi.md#taskdepth)
- [taskDepthWithHttpInfo](openapi_api.TaskResourceApi.md#taskdepthwithhttpinfo)
- [updateTask](openapi_api.TaskResourceApi.md#updatetask)
- [updateTaskWithHttpInfo](openapi_api.TaskResourceApi.md#updatetaskwithhttpinfo)

## Constructors

### constructor

• **new TaskResourceApi**(`configuration`, `requestFactory?`, `responseProcessor?`): [`TaskResourceApi`](openapi_api.TaskResourceApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |
| `requestFactory?` | `TaskResourceApiRequestFactory` |
| `responseProcessor?` | `TaskResourceApiResponseProcessor` |

#### Returns

[`TaskResourceApi`](openapi_api.TaskResourceApi.md)

#### Defined in

[openapi/api/types/PromiseAPI.ts:639](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L639)

## Properties

### api

• `Private` **api**: `ObservableTaskResourceApi`

#### Defined in

[openapi/api/types/PromiseAPI.ts:637](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L637)

## Methods

### all

▸ **all**(`_options?`): `Promise`\<\{ `[key: string]`: `number`;  }\>

Get the details about each queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<\{ `[key: string]`: `number`;  }\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:658](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L658)

___

### allVerbose

▸ **allVerbose**(`_options?`): `Promise`\<\{ `[key: string]`: \{ `[key: string]`: \{ `[key: string]`: `number`;  };  };  }\>

Get the details about each queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<\{ `[key: string]`: \{ `[key: string]`: \{ `[key: string]`: `number`;  };  };  }\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:674](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L674)

___

### allVerboseWithHttpInfo

▸ **allVerboseWithHttpInfo**(`_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: \{ `[key: string]`: \{ `[key: string]`: `number`;  };  };  }\>\>

Get the details about each queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: \{ `[key: string]`: \{ `[key: string]`: `number`;  };  };  }\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:666](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L666)

___

### allWithHttpInfo

▸ **allWithHttpInfo**(`_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `number`;  }\>\>

Get the details about each queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `number`;  }\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:650](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L650)

___

### batchPoll

▸ **batchPoll**(`tasktype`, `workerid?`, `domain?`, `count?`, `timeout?`, `_options?`): `Promise`\<[`Task`](src_common.Task.md)[]\>

Batch poll for a task of a certain type

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasktype` | `string` |
| `workerid?` | `string` |
| `domain?` | `string` |
| `count?` | `number` |
| `timeout?` | `number` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`Task`](src_common.Task.md)[]\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:700](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L700)

___

### batchPollWithHttpInfo

▸ **batchPollWithHttpInfo**(`tasktype`, `workerid?`, `domain?`, `count?`, `timeout?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Task`](src_common.Task.md)[]\>\>

Batch poll for a task of a certain type

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasktype` | `string` |
| `workerid?` | `string` |
| `domain?` | `string` |
| `count?` | `number` |
| `timeout?` | `number` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Task`](src_common.Task.md)[]\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:687](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L687)

___

### getAllPollData

▸ **getAllPollData**(`_options?`): `Promise`\<[`PollData`](src_common.PollData.md)[]\>

Get the last poll data for all task types

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`PollData`](src_common.PollData.md)[]\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:716](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L716)

___

### getAllPollDataWithHttpInfo

▸ **getAllPollDataWithHttpInfo**(`_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`PollData`](src_common.PollData.md)[]\>\>

Get the last poll data for all task types

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`PollData`](src_common.PollData.md)[]\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:708](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L708)

___

### getExternalStorageLocation2

▸ **getExternalStorageLocation2**(`path`, `operation`, `payloadType`, `_options?`): `Promise`\<[`ExternalStorageLocation`](src_common.ExternalStorageLocation.md)\>

Get the external uri where the task payload is to be stored

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

[openapi/api/types/PromiseAPI.ts:738](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L738)

___

### getExternalStorageLocation2WithHttpInfo

▸ **getExternalStorageLocation2WithHttpInfo**(`path`, `operation`, `payloadType`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`ExternalStorageLocation`](src_common.ExternalStorageLocation.md)\>\>

Get the external uri where the task payload is to be stored

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

[openapi/api/types/PromiseAPI.ts:727](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L727)

___

### getPollData

▸ **getPollData**(`taskType`, `_options?`): `Promise`\<[`PollData`](src_common.PollData.md)[]\>

Get the last poll data for a given task type

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskType` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`PollData`](src_common.PollData.md)[]\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:756](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L756)

___

### getPollDataWithHttpInfo

▸ **getPollDataWithHttpInfo**(`taskType`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`PollData`](src_common.PollData.md)[]\>\>

Get the last poll data for a given task type

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskType` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`PollData`](src_common.PollData.md)[]\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:747](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L747)

___

### getTask

▸ **getTask**(`taskId`, `_options?`): `Promise`\<[`Task`](src_common.Task.md)\>

Get task by Id

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`Task`](src_common.Task.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:774](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L774)

___

### getTaskLogs

▸ **getTaskLogs**(`taskId`, `_options?`): `Promise`\<[`TaskExecLog`](src_common.TaskExecLog.md)[]\>

Get Task Execution Logs

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`TaskExecLog`](src_common.TaskExecLog.md)[]\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:792](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L792)

___

### getTaskLogsWithHttpInfo

▸ **getTaskLogsWithHttpInfo**(`taskId`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`TaskExecLog`](src_common.TaskExecLog.md)[]\>\>

Get Task Execution Logs

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`TaskExecLog`](src_common.TaskExecLog.md)[]\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:783](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L783)

___

### getTaskWithHttpInfo

▸ **getTaskWithHttpInfo**(`taskId`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Task`](src_common.Task.md)\>\>

Get task by Id

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Task`](src_common.Task.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:765](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L765)

___

### log

▸ **log**(`taskId`, `body`, `_options?`): `Promise`\<`void`\>

Log Task Execution Details

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |
| `body` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:812](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L812)

___

### logWithHttpInfo

▸ **logWithHttpInfo**(`taskId`, `body`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Log Task Execution Details

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |
| `body` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:802](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L802)

___

### poll

▸ **poll**(`tasktype`, `workerid?`, `domain?`, `_options?`): `Promise`\<[`Task`](src_common.Task.md)\>

Poll for a task of a certain type

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasktype` | `string` |
| `workerid?` | `string` |
| `domain?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`Task`](src_common.Task.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:834](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L834)

___

### pollWithHttpInfo

▸ **pollWithHttpInfo**(`tasktype`, `workerid?`, `domain?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Task`](src_common.Task.md)\>\>

Poll for a task of a certain type

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasktype` | `string` |
| `workerid?` | `string` |
| `domain?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`Task`](src_common.Task.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:823](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L823)

___

### requeuePendingTask

▸ **requeuePendingTask**(`taskType`, `_options?`): `Promise`\<`string`\>

Requeue pending tasks

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskType` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:852](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L852)

___

### requeuePendingTaskWithHttpInfo

▸ **requeuePendingTaskWithHttpInfo**(`taskType`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

Requeue pending tasks

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskType` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:843](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L843)

___

### search1

▸ **search1**(`start?`, `size?`, `sort?`, `freeText?`, `query?`, `_options?`): `Promise`\<[`SearchResultTaskSummary`](src_common.SearchResultTaskSummary.md)\>

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
Search for tasks based in payload and other parameters

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

`Promise`\<[`SearchResultTaskSummary`](src_common.SearchResultTaskSummary.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:880](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L880)

___

### search1WithHttpInfo

▸ **search1WithHttpInfo**(`start?`, `size?`, `sort?`, `freeText?`, `query?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`SearchResultTaskSummary`](src_common.SearchResultTaskSummary.md)\>\>

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
Search for tasks based in payload and other parameters

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

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`SearchResultTaskSummary`](src_common.SearchResultTaskSummary.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:866](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L866)

___

### searchV21

▸ **searchV21**(`start?`, `size?`, `sort?`, `freeText?`, `query?`, `_options?`): `Promise`\<[`SearchResultTask`](src_common.SearchResultTask.md)\>

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
Search for tasks based in payload and other parameters

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

`Promise`\<[`SearchResultTask`](src_common.SearchResultTask.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:908](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L908)

___

### searchV21WithHttpInfo

▸ **searchV21WithHttpInfo**(`start?`, `size?`, `sort?`, `freeText?`, `query?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`SearchResultTask`](src_common.SearchResultTask.md)\>\>

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
Search for tasks based in payload and other parameters

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

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`SearchResultTask`](src_common.SearchResultTask.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:894](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L894)

___

### size

▸ **size**(`taskType?`, `_options?`): `Promise`\<\{ `[key: string]`: `number`;  }\>

Deprecated. Please use /tasks/queue/size endpoint

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskType?` | `string`[] |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<\{ `[key: string]`: `number`;  }\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:926](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L926)

___

### sizeWithHttpInfo

▸ **sizeWithHttpInfo**(`taskType?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `number`;  }\>\>

Deprecated. Please use /tasks/queue/size endpoint

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskType?` | `string`[] |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<\{ `[key: string]`: `number`;  }\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:917](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L917)

___

### taskDepth

▸ **taskDepth**(`taskType`, `domain?`, `isolationGroupId?`, `executionNamespace?`, `_options?`): `Promise`\<`number`\>

Get queue size for a task type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskType` | `string` |
| `domain?` | `string` |
| `isolationGroupId?` | `string` |
| `executionNamespace?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`number`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:950](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L950)

___

### taskDepthWithHttpInfo

▸ **taskDepthWithHttpInfo**(`taskType`, `domain?`, `isolationGroupId?`, `executionNamespace?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`number`\>\>

Get queue size for a task type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskType` | `string` |
| `domain?` | `string` |
| `isolationGroupId?` | `string` |
| `executionNamespace?` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`number`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:938](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L938)

___

### updateTask

▸ **updateTask**(`taskResult`, `_options?`): `Promise`\<`string`\>

Update a task

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskResult` | [`TaskResult`](src_common.TaskResult.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:968](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L968)

___

### updateTaskWithHttpInfo

▸ **updateTaskWithHttpInfo**(`taskResult`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

Update a task

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskResult` | [`TaskResult`](src_common.TaskResult.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`string`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:959](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L959)
