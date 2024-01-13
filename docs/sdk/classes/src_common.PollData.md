[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / PollData

# Class: PollData

[src/common](../modules/src_common.md).PollData

## Table of contents

### Constructors

- [constructor](src_common.PollData.md#constructor)

### Properties

- [domain](src_common.PollData.md#domain)
- [lastPollTime](src_common.PollData.md#lastpolltime)
- [queueName](src_common.PollData.md#queuename)
- [workerId](src_common.PollData.md#workerid)
- [attributeTypeMap](src_common.PollData.md#attributetypemap)
- [discriminator](src_common.PollData.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.PollData.md#getattributetypemap)

## Constructors

### constructor

• **new PollData**(): [`PollData`](src_common.PollData.md)

#### Returns

[`PollData`](src_common.PollData.md)

#### Defined in

[openapi/api/models/PollData.ts:53](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/PollData.ts#L53)

## Properties

### domain

• `Optional` **domain**: `string`

#### Defined in

[openapi/api/models/PollData.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/PollData.ts#L17)

___

### lastPollTime

• `Optional` **lastPollTime**: `number`

#### Defined in

[openapi/api/models/PollData.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/PollData.ts#L19)

___

### queueName

• `Optional` **queueName**: `string`

#### Defined in

[openapi/api/models/PollData.ts:16](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/PollData.ts#L16)

___

### workerId

• `Optional` **workerId**: `string`

#### Defined in

[openapi/api/models/PollData.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/PollData.ts#L18)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/PollData.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/PollData.ts#L23)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/PollData.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/PollData.ts#L21)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/PollData.ts:49](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/PollData.ts#L49)
