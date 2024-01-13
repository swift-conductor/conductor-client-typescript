[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / EventHandler

# Class: EventHandler

[src/common](../modules/src_common.md).EventHandler

## Table of contents

### Constructors

- [constructor](src_common.EventHandler.md#constructor)

### Properties

- [actions](src_common.EventHandler.md#actions)
- [active](src_common.EventHandler.md#active)
- [condition](src_common.EventHandler.md#condition)
- [evaluatorType](src_common.EventHandler.md#evaluatortype)
- [event](src_common.EventHandler.md#event)
- [name](src_common.EventHandler.md#name)
- [attributeTypeMap](src_common.EventHandler.md#attributetypemap)
- [discriminator](src_common.EventHandler.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.EventHandler.md#getattributetypemap)

## Constructors

### constructor

• **new EventHandler**(): [`EventHandler`](src_common.EventHandler.md)

#### Returns

[`EventHandler`](src_common.EventHandler.md)

#### Defined in

[openapi/api/models/EventHandler.ts:68](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/EventHandler.ts#L68)

## Properties

### actions

• **actions**: [`Action`](src_common.Action.md)[]

#### Defined in

[openapi/api/models/EventHandler.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/EventHandler.ts#L20)

___

### active

• `Optional` **active**: `boolean`

#### Defined in

[openapi/api/models/EventHandler.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/EventHandler.ts#L21)

___

### condition

• `Optional` **condition**: `string`

#### Defined in

[openapi/api/models/EventHandler.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/EventHandler.ts#L19)

___

### evaluatorType

• `Optional` **evaluatorType**: `string`

#### Defined in

[openapi/api/models/EventHandler.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/EventHandler.ts#L22)

___

### event

• **event**: `string`

#### Defined in

[openapi/api/models/EventHandler.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/EventHandler.ts#L18)

___

### name

• **name**: `string`

#### Defined in

[openapi/api/models/EventHandler.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/EventHandler.ts#L17)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/EventHandler.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/EventHandler.ts#L26)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/EventHandler.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/EventHandler.ts#L24)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/EventHandler.ts:64](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/EventHandler.ts#L64)
