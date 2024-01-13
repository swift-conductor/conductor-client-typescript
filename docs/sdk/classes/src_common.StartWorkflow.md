[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / StartWorkflow

# Class: StartWorkflow

[src/common](../modules/src_common.md).StartWorkflow

## Table of contents

### Constructors

- [constructor](src_common.StartWorkflow.md#constructor)

### Properties

- [correlationId](src_common.StartWorkflow.md#correlationid)
- [input](src_common.StartWorkflow.md#input)
- [name](src_common.StartWorkflow.md#name)
- [taskToDomain](src_common.StartWorkflow.md#tasktodomain)
- [version](src_common.StartWorkflow.md#version)
- [attributeTypeMap](src_common.StartWorkflow.md#attributetypemap)
- [discriminator](src_common.StartWorkflow.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.StartWorkflow.md#getattributetypemap)

## Constructors

### constructor

• **new StartWorkflow**(): [`StartWorkflow`](src_common.StartWorkflow.md)

#### Returns

[`StartWorkflow`](src_common.StartWorkflow.md)

#### Defined in

[openapi/api/models/StartWorkflow.ts:60](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflow.ts#L60)

## Properties

### correlationId

• `Optional` **correlationId**: `string`

#### Defined in

[openapi/api/models/StartWorkflow.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflow.ts#L18)

___

### input

• `Optional` **input**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/StartWorkflow.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflow.ts#L19)

___

### name

• `Optional` **name**: `string`

#### Defined in

[openapi/api/models/StartWorkflow.ts:16](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflow.ts#L16)

___

### taskToDomain

• `Optional` **taskToDomain**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[openapi/api/models/StartWorkflow.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflow.ts#L20)

___

### version

• `Optional` **version**: `number`

#### Defined in

[openapi/api/models/StartWorkflow.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflow.ts#L17)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/StartWorkflow.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflow.ts#L24)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/StartWorkflow.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflow.ts#L22)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/StartWorkflow.ts:56](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/StartWorkflow.ts#L56)
