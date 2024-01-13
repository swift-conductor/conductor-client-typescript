[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / Action

# Class: Action

[src/common](../modules/src_common.md).Action

## Table of contents

### Constructors

- [constructor](src_common.Action.md#constructor)

### Properties

- [action](src_common.Action.md#action)
- [completeTask](src_common.Action.md#completetask)
- [expandInlineJSON](src_common.Action.md#expandinlinejson)
- [failTask](src_common.Action.md#failtask)
- [startWorkflow](src_common.Action.md#startworkflow)
- [attributeTypeMap](src_common.Action.md#attributetypemap)
- [discriminator](src_common.Action.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.Action.md#getattributetypemap)

## Constructors

### constructor

• **new Action**(): [`Action`](src_common.Action.md)

#### Returns

[`Action`](src_common.Action.md)

#### Defined in

[openapi/api/models/Action.ts:62](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Action.ts#L62)

## Properties

### action

• `Optional` **action**: [`ActionActionEnum`](../enums/openapi_api.ActionActionEnum.md)

#### Defined in

[openapi/api/models/Action.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Action.ts#L18)

___

### completeTask

• `Optional` **completeTask**: [`TaskDetails`](src_common.TaskDetails.md)

#### Defined in

[openapi/api/models/Action.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Action.ts#L20)

___

### expandInlineJSON

• `Optional` **expandInlineJSON**: `boolean`

#### Defined in

[openapi/api/models/Action.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Action.ts#L22)

___

### failTask

• `Optional` **failTask**: [`TaskDetails`](src_common.TaskDetails.md)

#### Defined in

[openapi/api/models/Action.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Action.ts#L21)

___

### startWorkflow

• `Optional` **startWorkflow**: [`StartWorkflow`](src_common.StartWorkflow.md)

#### Defined in

[openapi/api/models/Action.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Action.ts#L19)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/Action.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Action.ts#L26)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/Action.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Action.ts#L24)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/Action.ts:58](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Action.ts#L58)
