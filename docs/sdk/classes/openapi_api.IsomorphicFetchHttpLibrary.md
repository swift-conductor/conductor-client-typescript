[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / IsomorphicFetchHttpLibrary

# Class: IsomorphicFetchHttpLibrary

[openapi/api](../modules/openapi_api.md).IsomorphicFetchHttpLibrary

## Implements

- [`HttpLibrary`](../interfaces/openapi_api.HttpLibrary.md)

## Table of contents

### Constructors

- [constructor](openapi_api.IsomorphicFetchHttpLibrary.md#constructor)

### Methods

- [send](openapi_api.IsomorphicFetchHttpLibrary.md#send)

## Constructors

### constructor

• **new IsomorphicFetchHttpLibrary**(): [`IsomorphicFetchHttpLibrary`](openapi_api.IsomorphicFetchHttpLibrary.md)

#### Returns

[`IsomorphicFetchHttpLibrary`](openapi_api.IsomorphicFetchHttpLibrary.md)

## Methods

### send

▸ **send**(`request`): `Observable`\<[`ResponseContext`](openapi_api.ResponseContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestContext`](openapi_api.RequestContext.md) |

#### Returns

`Observable`\<[`ResponseContext`](openapi_api.ResponseContext.md)\>

#### Implementation of

[HttpLibrary](../interfaces/openapi_api.HttpLibrary.md).[send](../interfaces/openapi_api.HttpLibrary.md#send)

#### Defined in

[openapi/api/http/isomorphic-fetch.ts:7](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/http/isomorphic-fetch.ts#L7)
