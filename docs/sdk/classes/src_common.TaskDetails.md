[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / TaskDetails

# Class: TaskDetails

[src/common](../modules/src_common.md).TaskDetails

## Table of contents

### Constructors

- [constructor](src_common.TaskDetails.md#constructor)

### Properties

- [output](src_common.TaskDetails.md#output)
- [taskId](src_common.TaskDetails.md#taskid)
- [taskRefName](src_common.TaskDetails.md#taskrefname)
- [workflowId](src_common.TaskDetails.md#workflowid)
- [attributeTypeMap](src_common.TaskDetails.md#attributetypemap)
- [discriminator](src_common.TaskDetails.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.TaskDetails.md#getattributetypemap)

## Constructors

### constructor

• **new TaskDetails**(): [`TaskDetails`](src_common.TaskDetails.md)

#### Returns

[`TaskDetails`](src_common.TaskDetails.md)

#### Defined in

[openapi/api/models/TaskDetails.ts:53](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDetails.ts#L53)

## Properties

### output

• `Optional` **output**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/TaskDetails.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDetails.ts#L18)

___

### taskId

• `Optional` **taskId**: `string`

#### Defined in

[openapi/api/models/TaskDetails.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDetails.ts#L19)

___

### taskRefName

• `Optional` **taskRefName**: `string`

#### Defined in

[openapi/api/models/TaskDetails.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDetails.ts#L17)

___

### workflowId

• `Optional` **workflowId**: `string`

#### Defined in

[openapi/api/models/TaskDetails.ts:16](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDetails.ts#L16)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/TaskDetails.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDetails.ts#L23)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/TaskDetails.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDetails.ts#L21)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/TaskDetails.ts:49](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDetails.ts#L49)
