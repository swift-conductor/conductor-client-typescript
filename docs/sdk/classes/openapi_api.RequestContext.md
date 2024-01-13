[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / RequestContext

# Class: RequestContext

[openapi/api](../modules/openapi_api.md).RequestContext

Represents an HTTP request context

## Table of contents

### Constructors

- [constructor](openapi_api.RequestContext.md#constructor)

### Properties

- [body](openapi_api.RequestContext.md#body)
- [headers](openapi_api.RequestContext.md#headers)
- [httpMethod](openapi_api.RequestContext.md#httpmethod)
- [url](openapi_api.RequestContext.md#url)

### Methods

- [addCookie](openapi_api.RequestContext.md#addcookie)
- [getBody](openapi_api.RequestContext.md#getbody)
- [getHeaders](openapi_api.RequestContext.md#getheaders)
- [getHttpMethod](openapi_api.RequestContext.md#gethttpmethod)
- [getUrl](openapi_api.RequestContext.md#geturl)
- [setBody](openapi_api.RequestContext.md#setbody)
- [setHeaderParam](openapi_api.RequestContext.md#setheaderparam)
- [setQueryParam](openapi_api.RequestContext.md#setqueryparam)
- [setUrl](openapi_api.RequestContext.md#seturl)

## Constructors

### constructor

• **new RequestContext**(`url`, `httpMethod`): [`RequestContext`](openapi_api.RequestContext.md)

Creates the request context using a http method and request resource url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url of the requested resource |
| `httpMethod` | [`HttpMethod`](../enums/openapi_api.HttpMethod.md) | http method |

#### Returns

[`RequestContext`](openapi_api.RequestContext.md)

#### Defined in

[openapi/api/http/http.ts:57](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L57)

## Properties

### body

• `Private` **body**: [`RequestBody`](../modules/openapi_api.md#requestbody) = `undefined`

#### Defined in

[openapi/api/http/http.ts:48](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L48)

___

### headers

• `Private` **headers**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[openapi/api/http/http.ts:47](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L47)

___

### httpMethod

• `Private` **httpMethod**: [`HttpMethod`](../enums/openapi_api.HttpMethod.md)

http method

#### Defined in

[openapi/api/http/http.ts:57](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L57)

___

### url

• `Private` **url**: `URL`

#### Defined in

[openapi/api/http/http.ts:49](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L49)

## Methods

### addCookie

▸ **addCookie**(`name`, `value`): `void`

Sets a cookie with the name and value. NO check  for duplicate cookies is performed

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[openapi/api/http/http.ts:112](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L112)

___

### getBody

▸ **getBody**(): [`RequestBody`](../modules/openapi_api.md#requestbody)

#### Returns

[`RequestBody`](../modules/openapi_api.md#requestbody)

#### Defined in

[openapi/api/http/http.ts:100](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L100)

___

### getHeaders

▸ **getHeaders**(): `Object`

#### Returns

`Object`

#### Defined in

[openapi/api/http/http.ts:96](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L96)

___

### getHttpMethod

▸ **getHttpMethod**(): [`HttpMethod`](../enums/openapi_api.HttpMethod.md)

#### Returns

[`HttpMethod`](../enums/openapi_api.HttpMethod.md)

#### Defined in

[openapi/api/http/http.ts:92](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L92)

___

### getUrl

▸ **getUrl**(): `string`

#### Returns

`string`

#### Defined in

[openapi/api/http/http.ts:65](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L65)

___

### setBody

▸ **setBody**(`body`): `void`

Sets the body of the http request either as a string or FormData

Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
request is discouraged.
https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`RequestBody`](../modules/openapi_api.md#requestbody) | the body of the request |

#### Returns

`void`

#### Defined in

[openapi/api/http/http.ts:88](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L88)

___

### setHeaderParam

▸ **setHeaderParam**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[openapi/api/http/http.ts:119](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L119)

___

### setQueryParam

▸ **setQueryParam**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[openapi/api/http/http.ts:104](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L104)

___

### setUrl

▸ **setUrl**(`url`): `void`

Replaces the url set in the constructor with this url.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[openapi/api/http/http.ts:75](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L75)
