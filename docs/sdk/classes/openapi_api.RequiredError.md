[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / RequiredError

# Class: RequiredError

[openapi/api](../modules/openapi_api.md).RequiredError

**`Export`**

## Hierarchy

- `Error`

  ↳ **`RequiredError`**

## Table of contents

### Constructors

- [constructor](openapi_api.RequiredError.md#constructor)

### Properties

- [api](openapi_api.RequiredError.md#api)
- [field](openapi_api.RequiredError.md#field)
- [message](openapi_api.RequiredError.md#message)
- [method](openapi_api.RequiredError.md#method)
- [name](openapi_api.RequiredError.md#name)
- [stack](openapi_api.RequiredError.md#stack)
- [prepareStackTrace](openapi_api.RequiredError.md#preparestacktrace)
- [stackTraceLimit](openapi_api.RequiredError.md#stacktracelimit)

### Methods

- [captureStackTrace](openapi_api.RequiredError.md#capturestacktrace)

## Constructors

### constructor

• **new RequiredError**(`api`, `method`, `field`): [`RequiredError`](openapi_api.RequiredError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `string` |
| `method` | `string` |
| `field` | `string` |

#### Returns

[`RequiredError`](openapi_api.RequiredError.md)

#### Overrides

Error.constructor

#### Defined in

[openapi/api/apis/baseapi.ts:34](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/apis/baseapi.ts#L34)

## Properties

### api

• **api**: `string`

#### Defined in

[openapi/api/apis/baseapi.ts:34](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/apis/baseapi.ts#L34)

___

### field

• **field**: `string`

#### Defined in

[openapi/api/apis/baseapi.ts:34](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/apis/baseapi.ts#L34)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### method

• **method**: `string`

#### Defined in

[openapi/api/apis/baseapi.ts:34](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/apis/baseapi.ts#L34)

___

### name

• **name**: ``"RequiredError"``

#### Overrides

Error.name

#### Defined in

[openapi/api/apis/baseapi.ts:33](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/apis/baseapi.ts#L33)

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
