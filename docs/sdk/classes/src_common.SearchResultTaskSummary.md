[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / SearchResultTaskSummary

# Class: SearchResultTaskSummary

[src/common](../modules/src_common.md).SearchResultTaskSummary

## Table of contents

### Constructors

- [constructor](src_common.SearchResultTaskSummary.md#constructor)

### Properties

- [results](src_common.SearchResultTaskSummary.md#results)
- [totalHits](src_common.SearchResultTaskSummary.md#totalhits)
- [attributeTypeMap](src_common.SearchResultTaskSummary.md#attributetypemap)
- [discriminator](src_common.SearchResultTaskSummary.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.SearchResultTaskSummary.md#getattributetypemap)

## Constructors

### constructor

• **new SearchResultTaskSummary**(): [`SearchResultTaskSummary`](src_common.SearchResultTaskSummary.md)

#### Returns

[`SearchResultTaskSummary`](src_common.SearchResultTaskSummary.md)

#### Defined in

[openapi/api/models/SearchResultTaskSummary.ts:40](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/SearchResultTaskSummary.ts#L40)

## Properties

### results

• `Optional` **results**: [`TaskSummary`](src_common.TaskSummary.md)[]

#### Defined in

[openapi/api/models/SearchResultTaskSummary.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/SearchResultTaskSummary.ts#L18)

___

### totalHits

• `Optional` **totalHits**: `number`

#### Defined in

[openapi/api/models/SearchResultTaskSummary.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/SearchResultTaskSummary.ts#L17)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/SearchResultTaskSummary.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/SearchResultTaskSummary.ts#L22)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/SearchResultTaskSummary.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/SearchResultTaskSummary.ts#L20)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/SearchResultTaskSummary.ts:36](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/SearchResultTaskSummary.ts#L36)
