[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / SelfDecodingBody

# Class: SelfDecodingBody

[openapi/api](../modules/openapi_api.md).SelfDecodingBody

Helper class to generate a `ResponseBody` from binary data

## Implements

- [`ResponseBody`](../interfaces/openapi_api.ResponseBody.md)

## Table of contents

### Constructors

- [constructor](openapi_api.SelfDecodingBody.md#constructor)

### Properties

- [dataSource](openapi_api.SelfDecodingBody.md#datasource)

### Methods

- [binary](openapi_api.SelfDecodingBody.md#binary)
- [text](openapi_api.SelfDecodingBody.md#text)

## Constructors

### constructor

• **new SelfDecodingBody**(`dataSource`): [`SelfDecodingBody`](openapi_api.SelfDecodingBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataSource` | `Promise`\<`Blob`\> |

#### Returns

[`SelfDecodingBody`](openapi_api.SelfDecodingBody.md)

#### Defined in

[openapi/api/http/http.ts:133](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L133)

## Properties

### dataSource

• `Private` **dataSource**: `Promise`\<`Blob`\>

#### Defined in

[openapi/api/http/http.ts:133](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L133)

## Methods

### binary

▸ **binary**(): `Promise`\<`Blob`\>

#### Returns

`Promise`\<`Blob`\>

#### Implementation of

[ResponseBody](../interfaces/openapi_api.ResponseBody.md).[binary](../interfaces/openapi_api.ResponseBody.md#binary)

#### Defined in

[openapi/api/http/http.ts:135](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L135)

___

### text

▸ **text**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Implementation of

[ResponseBody](../interfaces/openapi_api.ResponseBody.md).[text](../interfaces/openapi_api.ResponseBody.md#text)

#### Defined in

[openapi/api/http/http.ts:139](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L139)
