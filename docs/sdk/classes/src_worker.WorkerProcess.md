[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [src/worker](../modules/src_worker.md) / WorkerProcess

# Class: WorkerProcess

[src/worker](../modules/src_worker.md).WorkerProcess

Responsible for polling and executing tasks from a queue.

Because a `poll` in conductor "pops" a task off of a conductor queue,
each runner participates in the poll -> work -> update loop.
We could potentially split this work into a separate "poller" and "worker" pools
but that could lead to picking up more work than the pool of workers are actually able to handle.

## Table of contents

### Constructors

- [constructor](src_worker.WorkerProcess.md#constructor)

### Properties

- [errorHandler](src_worker.WorkerProcess.md#errorhandler)
- [logger](src_worker.WorkerProcess.md#logger)
- [options](src_worker.WorkerProcess.md#options)
- [poller](src_worker.WorkerProcess.md#poller)
- [taskResource](src_worker.WorkerProcess.md#taskresource)
- [worker](src_worker.WorkerProcess.md#worker)

### Accessors

- [getOptions](src_worker.WorkerProcess.md#getoptions)
- [isPolling](src_worker.WorkerProcess.md#ispolling)

### Methods

- [batchPoll](src_worker.WorkerProcess.md#batchpoll)
- [executeTask](src_worker.WorkerProcess.md#executetask)
- [handleUnknownError](src_worker.WorkerProcess.md#handleunknownerror)
- [startPolling](src_worker.WorkerProcess.md#startpolling)
- [stopPolling](src_worker.WorkerProcess.md#stoppolling)
- [updateOptions](src_worker.WorkerProcess.md#updateoptions)
- [updateTaskWithRetry](src_worker.WorkerProcess.md#updatetaskwithretry)

## Constructors

### constructor

• **new WorkerProcess**(`«destructured»`): [`WorkerProcess`](src_worker.WorkerProcess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`WorkerProcessConfig`](../interfaces/src_worker.WorkerProcessConfig.md) |

#### Returns

[`WorkerProcess`](src_worker.WorkerProcess.md)

#### Defined in

[src/worker/WorkerProcess.ts:47](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L47)

## Properties

### errorHandler

• **errorHandler**: [`WorkerErrorHandler`](../modules/src_worker.md#workererrorhandler)

#### Defined in

[src/worker/WorkerProcess.ts:41](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L41)

___

### logger

• `Private` **logger**: [`ConductorLogger`](../interfaces/src_common.ConductorLogger.md)

#### Defined in

[src/worker/WorkerProcess.ts:43](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L43)

___

### options

• `Private` **options**: [`WorkerProcessOptions`](../interfaces/src_worker.WorkerProcessOptions.md)

#### Defined in

[src/worker/WorkerProcess.ts:44](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L44)

___

### poller

• `Private` **poller**: `Poller`\<[`Task`](src_common.Task.md)\>

#### Defined in

[src/worker/WorkerProcess.ts:45](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L45)

___

### taskResource

• **taskResource**: [`TaskResourceApi`](openapi_api.TaskResourceApi.md)

#### Defined in

[src/worker/WorkerProcess.ts:39](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L39)

___

### worker

• **worker**: [`WorkerInterface`](../interfaces/src_worker.WorkerInterface.md)

#### Defined in

[src/worker/WorkerProcess.ts:40](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L40)

## Accessors

### getOptions

• `get` **getOptions**(): [`WorkerProcessOptions`](../interfaces/src_worker.WorkerProcessOptions.md)

#### Returns

[`WorkerProcessOptions`](../interfaces/src_worker.WorkerProcessOptions.md)

#### Defined in

[src/worker/WorkerProcess.ts:104](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L104)

___

### isPolling

• `get` **isPolling**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/worker/WorkerProcess.ts:72](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L72)

## Methods

### batchPoll

▸ **batchPoll**(`count`): `Promise`\<[`Task`](src_common.Task.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Promise`\<[`Task`](src_common.Task.md)[]\>

#### Defined in

[src/worker/WorkerProcess.ts:108](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L108)

___

### executeTask

▸ **executeTask**(`task`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`Task`](src_common.Task.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/worker/WorkerProcess.ts:141](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L141)

___

### handleUnknownError

▸ **handleUnknownError**(`unknownError`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unknownError` | `unknown` |

#### Returns

`void`

#### Defined in

[src/worker/WorkerProcess.ts:165](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L165)

___

### startPolling

▸ **startPolling**(): `void`

Starts polling for work

#### Returns

`void`

#### Defined in

[src/worker/WorkerProcess.ts:79](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L79)

___

### stopPolling

▸ **stopPolling**(): `Promise`\<`void`\>

Stops Polling for work

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/worker/WorkerProcess.ts:87](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L87)

___

### updateOptions

▸ **updateOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<[`WorkerProcessOptions`](../interfaces/src_worker.WorkerProcessOptions.md)\> |

#### Returns

`void`

#### Defined in

[src/worker/WorkerProcess.ts:91](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L91)

___

### updateTaskWithRetry

▸ **updateTaskWithRetry**(`task`, `taskResult`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`Task`](src_common.Task.md) |
| `taskResult` | [`TaskResult`](src_common.TaskResult.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/worker/WorkerProcess.ts:122](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerProcess.ts#L122)
