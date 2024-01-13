[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / ApiException

# Class: ApiException\<T\>

[openapi/api](../modules/openapi_api.md).ApiException

Represents an error caused by an api call i.e. it has attributes for a HTTP status code
and the returned body object.

Example
API returns a ErrorMessageObject whenever HTTP status code is not in [200, 299]
=> ApiException(404, someErrorMessageObject)

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Error`

  ↳ **`ApiException`**

## Table of contents

### Constructors

- [constructor](openapi_api.ApiException.md#constructor)

### Properties

- [body](openapi_api.ApiException.md#body)
- [code](openapi_api.ApiException.md#code)
- [headers](openapi_api.ApiException.md#headers)
- [message](openapi_api.ApiException.md#message)
- [name](openapi_api.ApiException.md#name)
- [stack](openapi_api.ApiException.md#stack)
- [prepareStackTrace](openapi_api.ApiException.md#preparestacktrace)
- [stackTraceLimit](openapi_api.ApiException.md#stacktracelimit)

### Methods

- [captureStackTrace](openapi_api.ApiException.md#capturestacktrace)

## Constructors

### constructor

• **new ApiException**\<`T`\>(`code`, `message`, `body`, `headers`): [`ApiException`](openapi_api.ApiException.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `message` | `string` |
| `body` | `T` |
| `headers` | `Object` |

#### Returns

[`ApiException`](openapi_api.ApiException.md)\<`T`\>

#### Overrides

Error.constructor

#### Defined in

[openapi/api/apis/exception.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/apis/exception.ts#L11)

## Properties

### body

• **body**: `T`

#### Defined in

[openapi/api/apis/exception.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/apis/exception.ts#L11)

___

### code

• **code**: `number`

#### Defined in

[openapi/api/apis/exception.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/apis/exception.ts#L11)

___

### headers

• **headers**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[openapi/api/apis/exception.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/apis/exception.ts#L11)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:27

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:29

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:20
