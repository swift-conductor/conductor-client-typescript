[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / HttpInfo

# Class: HttpInfo\<T\>

[openapi/api](../modules/openapi_api.md).HttpInfo

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ResponseContext`](openapi_api.ResponseContext.md)

  ↳ **`HttpInfo`**

## Table of contents

### Constructors

- [constructor](openapi_api.HttpInfo.md#constructor)

### Properties

- [body](openapi_api.HttpInfo.md#body)
- [data](openapi_api.HttpInfo.md#data)
- [headers](openapi_api.HttpInfo.md#headers)
- [httpStatusCode](openapi_api.HttpInfo.md#httpstatuscode)

### Methods

- [getBodyAsAny](openapi_api.HttpInfo.md#getbodyasany)
- [getBodyAsFile](openapi_api.HttpInfo.md#getbodyasfile)
- [getParsedHeader](openapi_api.HttpInfo.md#getparsedheader)

## Constructors

### constructor

• **new HttpInfo**\<`T`\>(`httpStatusCode`, `headers`, `body`, `data`): [`HttpInfo`](openapi_api.HttpInfo.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpStatusCode` | `number` |
| `headers` | `Object` |
| `body` | [`ResponseBody`](../interfaces/openapi_api.ResponseBody.md) |
| `data` | `T` |

#### Returns

[`HttpInfo`](openapi_api.HttpInfo.md)\<`T`\>

#### Overrides

[ResponseContext](openapi_api.ResponseContext.md).[constructor](openapi_api.ResponseContext.md#constructor)

#### Defined in

[openapi/api/http/http.ts:242](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L242)

## Properties

### body

• **body**: [`ResponseBody`](../interfaces/openapi_api.ResponseBody.md)

#### Inherited from

[ResponseContext](openapi_api.ResponseContext.md).[body](openapi_api.ResponseContext.md#body)

#### Defined in

[openapi/api/http/http.ts:245](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L245)

___

### data

• **data**: `T`

#### Defined in

[openapi/api/http/http.ts:246](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L246)

___

### headers

• **headers**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Inherited from

[ResponseContext](openapi_api.ResponseContext.md).[headers](openapi_api.ResponseContext.md#headers)

#### Defined in

[openapi/api/http/http.ts:244](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L244)

___

### httpStatusCode

• **httpStatusCode**: `number`

#### Inherited from

[ResponseContext](openapi_api.ResponseContext.md).[httpStatusCode](openapi_api.ResponseContext.md#httpstatuscode)

#### Defined in

[openapi/api/http/http.ts:243](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L243)

## Methods

### getBodyAsAny

▸ **getBodyAsAny**(): `Promise`\<`undefined` \| `string` \| `Blob`\>

Use a heuristic to get a body of unknown data structure.
Return as string if possible, otherwise as binary.

#### Returns

`Promise`\<`undefined` \| `string` \| `Blob`\>

#### Inherited from

[ResponseContext](openapi_api.ResponseContext.md).[getBodyAsAny](openapi_api.ResponseContext.md#getbodyasany)

#### Defined in

[openapi/api/http/http.ts:212](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L212)

___

### getBodyAsFile

▸ **getBodyAsFile**(): `Promise`\<[`HttpFile`](../modules/openapi_api.md#httpfile)\>

#### Returns

`Promise`\<[`HttpFile`](../modules/openapi_api.md#httpfile)\>

#### Inherited from

[ResponseContext](openapi_api.ResponseContext.md).[getBodyAsFile](openapi_api.ResponseContext.md#getbodyasfile)

#### Defined in

[openapi/api/http/http.ts:193](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L193)

___

### getParsedHeader

▸ **getParsedHeader**(`headerName`): `Object`

Parse header value in the form `value; param1="value1"`

E.g. for Content-Type or Content-Disposition
Parameter names are converted to lower case
The first parameter is returned with the key `""`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerName` | `string` |

#### Returns

`Object`

#### Inherited from

[ResponseContext](openapi_api.ResponseContext.md).[getParsedHeader](openapi_api.ResponseContext.md#getparsedheader)

#### Defined in

[openapi/api/http/http.ts:170](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L170)
