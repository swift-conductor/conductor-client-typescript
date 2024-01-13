[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / TaskResult

# Class: TaskResult

[src/common](../modules/src_common.md).TaskResult

## Table of contents

### Constructors

- [constructor](src_common.TaskResult.md#constructor)

### Properties

- [callbackAfterSeconds](src_common.TaskResult.md#callbackafterseconds)
- [extendLease](src_common.TaskResult.md#extendlease)
- [externalOutputPayloadStoragePath](src_common.TaskResult.md#externaloutputpayloadstoragepath)
- [logs](src_common.TaskResult.md#logs)
- [outputData](src_common.TaskResult.md#outputdata)
- [reasonForIncompletion](src_common.TaskResult.md#reasonforincompletion)
- [status](src_common.TaskResult.md#status)
- [subWorkflowId](src_common.TaskResult.md#subworkflowid)
- [taskId](src_common.TaskResult.md#taskid)
- [workerId](src_common.TaskResult.md#workerid)
- [workflowInstanceId](src_common.TaskResult.md#workflowinstanceid)
- [attributeTypeMap](src_common.TaskResult.md#attributetypemap)
- [discriminator](src_common.TaskResult.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.TaskResult.md#getattributetypemap)

## Constructors

### constructor

• **new TaskResult**(): [`TaskResult`](src_common.TaskResult.md)

#### Returns

[`TaskResult`](src_common.TaskResult.md)

#### Defined in

[openapi/api/models/TaskResult.ts:103](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L103)

## Properties

### callbackAfterSeconds

• `Optional` **callbackAfterSeconds**: `number`

#### Defined in

[openapi/api/models/TaskResult.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L20)

___

### extendLease

• `Optional` **extendLease**: `boolean`

#### Defined in

[openapi/api/models/TaskResult.ts:27](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L27)

___

### externalOutputPayloadStoragePath

• `Optional` **externalOutputPayloadStoragePath**: `string`

#### Defined in

[openapi/api/models/TaskResult.ts:25](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L25)

___

### logs

• `Optional` **logs**: [`TaskExecLog`](src_common.TaskExecLog.md)[]

#### Defined in

[openapi/api/models/TaskResult.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L24)

___

### outputData

• `Optional` **outputData**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/TaskResult.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L23)

___

### reasonForIncompletion

• `Optional` **reasonForIncompletion**: `string`

#### Defined in

[openapi/api/models/TaskResult.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L19)

___

### status

• `Optional` **status**: [`TaskResultStatusEnum`](../enums/openapi_api.TaskResultStatusEnum.md)

#### Defined in

[openapi/api/models/TaskResult.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L22)

___

### subWorkflowId

• `Optional` **subWorkflowId**: `string`

#### Defined in

[openapi/api/models/TaskResult.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L26)

___

### taskId

• **taskId**: `string`

#### Defined in

[openapi/api/models/TaskResult.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L18)

___

### workerId

• `Optional` **workerId**: `string`

#### Defined in

[openapi/api/models/TaskResult.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L21)

___

### workflowInstanceId

• **workflowInstanceId**: `string`

#### Defined in

[openapi/api/models/TaskResult.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L17)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/TaskResult.ts:31](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L31)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/TaskResult.ts:29](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L29)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/TaskResult.ts:99](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskResult.ts#L99)
