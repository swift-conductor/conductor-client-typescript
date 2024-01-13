[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / StartWorkflowRequest

# Class: StartWorkflowRequest

[src/common](../modules/src_common.md).StartWorkflowRequest

## Table of contents

### Constructors

- [constructor](src_common.StartWorkflowRequest.md#constructor)

### Properties

- [correlationId](src_common.StartWorkflowRequest.md#correlationid)
- [externalInputPayloadStoragePath](src_common.StartWorkflowRequest.md#externalinputpayloadstoragepath)
- [input](src_common.StartWorkflowRequest.md#input)
- [name](src_common.StartWorkflowRequest.md#name)
- [priority](src_common.StartWorkflowRequest.md#priority)
- [taskToDomain](src_common.StartWorkflowRequest.md#tasktodomain)
- [version](src_common.StartWorkflowRequest.md#version)
- [workflowDef](src_common.StartWorkflowRequest.md#workflowdef)
- [attributeTypeMap](src_common.StartWorkflowRequest.md#attributetypemap)
- [discriminator](src_common.StartWorkflowRequest.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.StartWorkflowRequest.md#getattributetypemap)

## Constructors

### constructor

• **new StartWorkflowRequest**(): [`StartWorkflowRequest`](src_common.StartWorkflowRequest.md)

#### Returns

[`StartWorkflowRequest`](src_common.StartWorkflowRequest.md)

#### Defined in

[openapi/api/models/StartWorkflowRequest.ts:82](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflowRequest.ts#L82)

## Properties

### correlationId

• `Optional` **correlationId**: `string`

#### Defined in

[openapi/api/models/StartWorkflowRequest.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflowRequest.ts#L19)

___

### externalInputPayloadStoragePath

• `Optional` **externalInputPayloadStoragePath**: `string`

#### Defined in

[openapi/api/models/StartWorkflowRequest.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflowRequest.ts#L23)

___

### input

• `Optional` **input**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/StartWorkflowRequest.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflowRequest.ts#L20)

___

### name

• **name**: `string`

#### Defined in

[openapi/api/models/StartWorkflowRequest.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflowRequest.ts#L17)

___

### priority

• `Optional` **priority**: `number`

#### Defined in

[openapi/api/models/StartWorkflowRequest.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflowRequest.ts#L24)

___

### taskToDomain

• `Optional` **taskToDomain**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[openapi/api/models/StartWorkflowRequest.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflowRequest.ts#L21)

___

### version

• `Optional` **version**: `number`

#### Defined in

[openapi/api/models/StartWorkflowRequest.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflowRequest.ts#L18)

___

### workflowDef

• `Optional` **workflowDef**: [`WorkflowDef`](src_common.WorkflowDef.md)

#### Defined in

[openapi/api/models/StartWorkflowRequest.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflowRequest.ts#L22)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/StartWorkflowRequest.ts:28](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflowRequest.ts#L28)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/StartWorkflowRequest.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflowRequest.ts#L26)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/StartWorkflowRequest.ts:78](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflowRequest.ts#L78)
