[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / ResponseContext

# Class: ResponseContext

[openapi/api](../modules/openapi_api.md).ResponseContext

## Hierarchy

- **`ResponseContext`**

  ↳ [`HttpInfo`](openapi_api.HttpInfo.md)

## Table of contents

### Constructors

- [constructor](openapi_api.ResponseContext.md#constructor)

### Properties

- [body](openapi_api.ResponseContext.md#body)
- [headers](openapi_api.ResponseContext.md#headers)
- [httpStatusCode](openapi_api.ResponseContext.md#httpstatuscode)

### Methods

- [getBodyAsAny](openapi_api.ResponseContext.md#getbodyasany)
- [getBodyAsFile](openapi_api.ResponseContext.md#getbodyasfile)
- [getParsedHeader](openapi_api.ResponseContext.md#getparsedheader)

## Constructors

### constructor

• **new ResponseContext**(`httpStatusCode`, `headers`, `body`): [`ResponseContext`](openapi_api.ResponseContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpStatusCode` | `number` |
| `headers` | `Object` |
| `body` | [`ResponseBody`](../interfaces/openapi_api.ResponseBody.md) |

#### Returns

[`ResponseContext`](openapi_api.ResponseContext.md)

#### Defined in

[openapi/api/http/http.ts:157](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/http/http.ts#L157)

## Properties

### body

• **body**: [`ResponseBody`](../interfaces/openapi_api.ResponseBody.md)

#### Defined in

[openapi/api/http/http.ts:160](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/http/http.ts#L160)

___

### headers

• **headers**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[openapi/api/http/http.ts:159](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/http/http.ts#L159)

___

### httpStatusCode

• **httpStatusCode**: `number`

#### Defined in

[openapi/api/http/http.ts:158](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/http/http.ts#L158)

## Methods

### getBodyAsAny

▸ **getBodyAsAny**(): `Promise`\<`undefined` \| `string` \| `Blob`\>

Use a heuristic to get a body of unknown data structure.
Return as string if possible, otherwise as binary.

#### Returns

`Promise`\<`undefined` \| `string` \| `Blob`\>

#### Defined in

[openapi/api/http/http.ts:212](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/http/http.ts#L212)

___

### getBodyAsFile

▸ **getBodyAsFile**(): `Promise`\<[`HttpFile`](../modules/openapi_api.md#httpfile)\>

#### Returns

`Promise`\<[`HttpFile`](../modules/openapi_api.md#httpfile)\>

#### Defined in

[openapi/api/http/http.ts:193](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/http/http.ts#L193)

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

#### Defined in

[openapi/api/http/http.ts:170](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/http/http.ts#L170)
