[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / RerunWorkflowRequest

# Class: RerunWorkflowRequest

[src/common](../modules/src_common.md).RerunWorkflowRequest

## Table of contents

### Constructors

- [constructor](src_common.RerunWorkflowRequest.md#constructor)

### Properties

- [correlationId](src_common.RerunWorkflowRequest.md#correlationid)
- [reRunFromTaskId](src_common.RerunWorkflowRequest.md#rerunfromtaskid)
- [reRunFromWorkflowId](src_common.RerunWorkflowRequest.md#rerunfromworkflowid)
- [taskInput](src_common.RerunWorkflowRequest.md#taskinput)
- [workflowInput](src_common.RerunWorkflowRequest.md#workflowinput)
- [attributeTypeMap](src_common.RerunWorkflowRequest.md#attributetypemap)
- [discriminator](src_common.RerunWorkflowRequest.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.RerunWorkflowRequest.md#getattributetypemap)

## Constructors

### constructor

• **new RerunWorkflowRequest**(): [`RerunWorkflowRequest`](src_common.RerunWorkflowRequest.md)

#### Returns

[`RerunWorkflowRequest`](src_common.RerunWorkflowRequest.md)

#### Defined in

[openapi/api/models/RerunWorkflowRequest.ts:60](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/RerunWorkflowRequest.ts#L60)

## Properties

### correlationId

• `Optional` **correlationId**: `string`

#### Defined in

[openapi/api/models/RerunWorkflowRequest.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/RerunWorkflowRequest.ts#L20)

___

### reRunFromTaskId

• `Optional` **reRunFromTaskId**: `string`

#### Defined in

[openapi/api/models/RerunWorkflowRequest.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/RerunWorkflowRequest.ts#L18)

___

### reRunFromWorkflowId

• `Optional` **reRunFromWorkflowId**: `string`

#### Defined in

[openapi/api/models/RerunWorkflowRequest.ts:16](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/RerunWorkflowRequest.ts#L16)

___

### taskInput

• `Optional` **taskInput**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/RerunWorkflowRequest.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/RerunWorkflowRequest.ts#L19)

___

### workflowInput

• `Optional` **workflowInput**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/RerunWorkflowRequest.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/RerunWorkflowRequest.ts#L17)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/RerunWorkflowRequest.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/RerunWorkflowRequest.ts#L24)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/RerunWorkflowRequest.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/RerunWorkflowRequest.ts#L22)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/RerunWorkflowRequest.ts:56](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/RerunWorkflowRequest.ts#L56)
