[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / BulkResponse

# Class: BulkResponse

[openapi/api](../modules/openapi_api.md).BulkResponse

## Table of contents

### Constructors

- [constructor](openapi_api.BulkResponse.md#constructor)

### Properties

- [bulkErrorResults](openapi_api.BulkResponse.md#bulkerrorresults)
- [bulkSuccessfulResults](openapi_api.BulkResponse.md#bulksuccessfulresults)
- [attributeTypeMap](openapi_api.BulkResponse.md#attributetypemap)
- [discriminator](openapi_api.BulkResponse.md#discriminator)

### Methods

- [getAttributeTypeMap](openapi_api.BulkResponse.md#getattributetypemap)

## Constructors

### constructor

• **new BulkResponse**(): [`BulkResponse`](openapi_api.BulkResponse.md)

#### Returns

[`BulkResponse`](openapi_api.BulkResponse.md)

#### Defined in

[openapi/api/models/BulkResponse.ts:39](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/BulkResponse.ts#L39)

## Properties

### bulkErrorResults

• `Optional` **bulkErrorResults**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[openapi/api/models/BulkResponse.ts:16](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/BulkResponse.ts#L16)

___

### bulkSuccessfulResults

• `Optional` **bulkSuccessfulResults**: `string`[]

#### Defined in

[openapi/api/models/BulkResponse.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/BulkResponse.ts#L17)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/BulkResponse.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/BulkResponse.ts#L21)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/BulkResponse.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/BulkResponse.ts#L19)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/BulkResponse.ts:35](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/BulkResponse.ts#L35)
