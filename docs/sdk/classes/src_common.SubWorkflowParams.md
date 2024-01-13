[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / SubWorkflowParams

# Class: SubWorkflowParams

[src/common](../modules/src_common.md).SubWorkflowParams

## Table of contents

### Constructors

- [constructor](src_common.SubWorkflowParams.md#constructor)

### Properties

- [name](src_common.SubWorkflowParams.md#name)
- [taskToDomain](src_common.SubWorkflowParams.md#tasktodomain)
- [version](src_common.SubWorkflowParams.md#version)
- [workflowDefinition](src_common.SubWorkflowParams.md#workflowdefinition)
- [attributeTypeMap](src_common.SubWorkflowParams.md#attributetypemap)
- [discriminator](src_common.SubWorkflowParams.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.SubWorkflowParams.md#getattributetypemap)

## Constructors

### constructor

• **new SubWorkflowParams**(): [`SubWorkflowParams`](src_common.SubWorkflowParams.md)

#### Returns

[`SubWorkflowParams`](src_common.SubWorkflowParams.md)

#### Defined in

[openapi/api/models/SubWorkflowParams.ts:54](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SubWorkflowParams.ts#L54)

## Properties

### name

• **name**: `string`

#### Defined in

[openapi/api/models/SubWorkflowParams.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SubWorkflowParams.ts#L17)

___

### taskToDomain

• `Optional` **taskToDomain**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[openapi/api/models/SubWorkflowParams.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SubWorkflowParams.ts#L19)

___

### version

• `Optional` **version**: `number`

#### Defined in

[openapi/api/models/SubWorkflowParams.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SubWorkflowParams.ts#L18)

___

### workflowDefinition

• `Optional` **workflowDefinition**: [`WorkflowDef`](src_common.WorkflowDef.md)

#### Defined in

[openapi/api/models/SubWorkflowParams.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SubWorkflowParams.ts#L20)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/SubWorkflowParams.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SubWorkflowParams.ts#L24)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/SubWorkflowParams.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SubWorkflowParams.ts#L22)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/SubWorkflowParams.ts:50](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SubWorkflowParams.ts#L50)
