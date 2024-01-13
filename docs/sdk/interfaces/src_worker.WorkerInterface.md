[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/worker](../modules/src_worker.md) / WorkerInterface

# Interface: WorkerInterface

[src/worker](../modules/src_worker.md).WorkerInterface

Functional interface for defining a worker implementation that processes tasks from a conductor queue.

**`Remarks`**

Optional items allow overriding properties on a per-worker basis. Items not overridden
here will be inherited from the `WorkerHost` options.

## Table of contents

### Properties

- [concurrency](src_worker.WorkerInterface.md#concurrency)
- [domain](src_worker.WorkerInterface.md#domain)
- [execute](src_worker.WorkerInterface.md#execute)
- [pollInterval](src_worker.WorkerInterface.md#pollinterval)
- [taskDefName](src_worker.WorkerInterface.md#taskdefname)

## Properties

### concurrency

• `Optional` **concurrency**: `number`

Number of polling instances to run concurrently

#### Defined in

[src/worker/WorkerInterface.ts:15](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerInterface.ts#L15)

___

### domain

• `Optional` **domain**: `string`

#### Defined in

[src/worker/WorkerInterface.ts:12](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerInterface.ts#L12)

___

### execute

• **execute**: (`task`: [`Task`](../classes/src_common.Task.md)) => `Promise`\<`Omit`\<[`TaskResult`](../classes/src_common.TaskResult.md), ``"taskId"`` \| ``"workflowInstanceId"``\>\>

#### Type declaration

▸ (`task`): `Promise`\<`Omit`\<[`TaskResult`](../classes/src_common.TaskResult.md), ``"taskId"`` \| ``"workflowInstanceId"``\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`Task`](../classes/src_common.Task.md) |

##### Returns

`Promise`\<`Omit`\<[`TaskResult`](../classes/src_common.TaskResult.md), ``"taskId"`` \| ``"workflowInstanceId"``\>\>

#### Defined in

[src/worker/WorkerInterface.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerInterface.ts#L17)

___

### pollInterval

• `Optional` **pollInterval**: `number`

#### Defined in

[src/worker/WorkerInterface.ts:13](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerInterface.ts#L13)

___

### taskDefName

• **taskDefName**: `string`

#### Defined in

[src/worker/WorkerInterface.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/worker/WorkerInterface.ts#L11)
