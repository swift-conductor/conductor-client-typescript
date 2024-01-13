[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [src/worker](../modules/src_worker.md) / WorkerHost

# Class: WorkerHost

[src/worker](../modules/src_worker.md).WorkerHost

Responsible for initializing and managing the runners that poll and work different task queues.

## Table of contents

### Constructors

- [constructor](src_worker.WorkerHost.md#constructor)

### Properties

- [client](src_worker.WorkerHost.md#client)
- [errorHandler](src_worker.WorkerHost.md#errorhandler)
- [logger](src_worker.WorkerHost.md#logger)
- [options](src_worker.WorkerHost.md#options)
- [polling](src_worker.WorkerHost.md#polling)
- [workerRunners](src_worker.WorkerHost.md#workerrunners)
- [workers](src_worker.WorkerHost.md#workers)

### Accessors

- [isPolling](src_worker.WorkerHost.md#ispolling)

### Methods

- [sanityCheck](src_worker.WorkerHost.md#sanitycheck)
- [startPolling](src_worker.WorkerHost.md#startpolling)
- [stopPolling](src_worker.WorkerHost.md#stoppolling)
- [updatePollingOptionForWorker](src_worker.WorkerHost.md#updatepollingoptionforworker)
- [updatePollingOptions](src_worker.WorkerHost.md#updatepollingoptions)
- [workerManagerWorkerOptions](src_worker.WorkerHost.md#workermanagerworkeroptions)

## Constructors

### constructor

• **new WorkerHost**(`client`, `workers`, `config?`): [`WorkerHost`](src_worker.WorkerHost.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ConductorClient`](src_common.ConductorClient.md) |
| `workers` | [`WorkerInterface`](../interfaces/src_worker.WorkerInterface.md)[] |
| `config` | [`WorkerHostConfig`](../interfaces/src_worker.WorkerHostConfig.md) |

#### Returns

[`WorkerHost`](src_worker.WorkerHost.md)

#### Defined in

[src/worker/WorkerHost.ts:48](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L48)

## Properties

### client

• `Private` `Readonly` **client**: [`ConductorClient`](src_common.ConductorClient.md)

#### Defined in

[src/worker/WorkerHost.ts:41](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L41)

___

### errorHandler

• `Private` `Readonly` **errorHandler**: [`WorkerErrorHandler`](../modules/src_worker.md#workererrorhandler)

#### Defined in

[src/worker/WorkerHost.ts:43](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L43)

___

### logger

• `Private` `Readonly` **logger**: [`ConductorLogger`](../interfaces/src_common.ConductorLogger.md)

#### Defined in

[src/worker/WorkerHost.ts:42](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L42)

___

### options

• `Readonly` **options**: `Required`\<[`WorkerProcessOptions`](../interfaces/src_worker.WorkerProcessOptions.md)\>

#### Defined in

[src/worker/WorkerHost.ts:40](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L40)

___

### polling

• `Private` **polling**: `boolean` = `false`

#### Defined in

[src/worker/WorkerHost.ts:38](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L38)

___

### workerRunners

• `Private` **workerRunners**: `Map`\<`string`, [`WorkerProcess`](src_worker.WorkerProcess.md)\>

#### Defined in

[src/worker/WorkerHost.ts:46](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L46)

___

### workers

• `Private` **workers**: [`WorkerInterface`](../interfaces/src_worker.WorkerInterface.md)[]

#### Defined in

[src/worker/WorkerHost.ts:45](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L45)

## Accessors

### isPolling

• `get` **isPolling**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/worker/WorkerHost.ts:79](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L79)

## Methods

### sanityCheck

▸ **sanityCheck**(): `void`

#### Returns

`void`

#### Defined in

[src/worker/WorkerHost.ts:111](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L111)

___

### startPolling

▸ **startPolling**(): `void`

Start polling for tasks

#### Returns

`void`

#### Defined in

[src/worker/WorkerHost.ts:128](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L128)

___

### stopPolling

▸ **stopPolling**(): `Promise`\<`void`\>

Stops polling for tasks

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/worker/WorkerHost.ts:151](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L151)

___

### updatePollingOptionForWorker

▸ **updatePollingOptionForWorker**(`workerTaskDefName`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workerTaskDefName` | `string` |
| `options` | `Partial`\<[`WorkerProcessOptions`](../interfaces/src_worker.WorkerProcessOptions.md)\> |

#### Returns

`void`

#### Defined in

[src/worker/WorkerHost.ts:83](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L83)

___

### updatePollingOptions

▸ **updatePollingOptions**(`options`): `void`

new options will get merged to existing options

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Partial`\<[`WorkerProcessOptions`](../interfaces/src_worker.WorkerProcessOptions.md)\> | new options to update polling options |

#### Returns

`void`

#### Defined in

[src/worker/WorkerHost.ts:97](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L97)

___

### workerManagerWorkerOptions

▸ **workerManagerWorkerOptions**(`worker`): `Required`\<[`WorkerProcessOptions`](../interfaces/src_worker.WorkerProcessOptions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `worker` | [`WorkerInterface`](../interfaces/src_worker.WorkerInterface.md) |

#### Returns

`Required`\<[`WorkerProcessOptions`](../interfaces/src_worker.WorkerProcessOptions.md)\>

#### Defined in

[src/worker/WorkerHost.ts:70](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerHost.ts#L70)
