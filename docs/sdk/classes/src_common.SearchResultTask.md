[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / SearchResultTask

# Class: SearchResultTask

[src/common](../modules/src_common.md).SearchResultTask

## Table of contents

### Constructors

- [constructor](src_common.SearchResultTask.md#constructor)

### Properties

- [results](src_common.SearchResultTask.md#results)
- [totalHits](src_common.SearchResultTask.md#totalhits)
- [attributeTypeMap](src_common.SearchResultTask.md#attributetypemap)
- [discriminator](src_common.SearchResultTask.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.SearchResultTask.md#getattributetypemap)

## Constructors

### constructor

• **new SearchResultTask**(): [`SearchResultTask`](src_common.SearchResultTask.md)

#### Returns

[`SearchResultTask`](src_common.SearchResultTask.md)

#### Defined in

[openapi/api/models/SearchResultTask.ts:40](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SearchResultTask.ts#L40)

## Properties

### results

• `Optional` **results**: [`Task`](src_common.Task.md)[]

#### Defined in

[openapi/api/models/SearchResultTask.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SearchResultTask.ts#L18)

___

### totalHits

• `Optional` **totalHits**: `number`

#### Defined in

[openapi/api/models/SearchResultTask.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SearchResultTask.ts#L17)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/SearchResultTask.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SearchResultTask.ts#L22)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/SearchResultTask.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SearchResultTask.ts#L20)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/SearchResultTask.ts:36](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/SearchResultTask.ts#L36)
