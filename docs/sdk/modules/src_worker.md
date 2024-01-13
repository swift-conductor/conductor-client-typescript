[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / src/worker

# Module: src/worker

## Table of contents

### Classes

- [WorkerHost](../classes/src_worker.WorkerHost.md)
- [WorkerProcess](../classes/src_worker.WorkerProcess.md)

### Interfaces

- [WorkerHostConfig](../interfaces/src_worker.WorkerHostConfig.md)
- [WorkerInterface](../interfaces/src_worker.WorkerInterface.md)
- [WorkerProcessConfig](../interfaces/src_worker.WorkerProcessConfig.md)
- [WorkerProcessOptions](../interfaces/src_worker.WorkerProcessOptions.md)

### Type Aliases

- [WorkerErrorHandler](src_worker.md#workererrorhandler)
- [WorkerHostOptions](src_worker.md#workerhostoptions)

### Functions

- [noopErrorHandler](src_worker.md#nooperrorhandler)

## Type Aliases

### WorkerErrorHandler

Ƭ **WorkerErrorHandler**: (`error`: `Error`, `task?`: [`Task`](../classes/src_common.Task.md)) => `void`

#### Type declaration

▸ (`error`, `task?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `task?` | [`Task`](../classes/src_common.Task.md) |

##### Returns

`void`

#### Defined in

[src/worker/types.ts:5](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/worker/types.ts#L5)

___

### WorkerHostOptions

Ƭ **WorkerHostOptions**: [`WorkerProcessOptions`](../interfaces/src_worker.WorkerProcessOptions.md)

#### Defined in

[src/worker/WorkerHost.ts:14](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/worker/WorkerHost.ts#L14)

## Functions

### noopErrorHandler

▸ **noopErrorHandler**(`error`, `task?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `task?` | [`Task`](../classes/src_common.Task.md) |

#### Returns

`void`

#### Defined in

[src/worker/WorkerProcess.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/worker/WorkerProcess.ts#L19)
