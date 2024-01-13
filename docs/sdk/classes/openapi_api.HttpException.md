[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / HttpException

# Class: HttpException

[openapi/api](../modules/openapi_api.md).HttpException

## Hierarchy

- `Error`

  ↳ **`HttpException`**

## Table of contents

### Constructors

- [constructor](openapi_api.HttpException.md#constructor)

### Properties

- [message](openapi_api.HttpException.md#message)
- [name](openapi_api.HttpException.md#name)
- [stack](openapi_api.HttpException.md#stack)
- [prepareStackTrace](openapi_api.HttpException.md#preparestacktrace)
- [stackTraceLimit](openapi_api.HttpException.md#stacktracelimit)

### Methods

- [captureStackTrace](openapi_api.HttpException.md#capturestacktrace)

## Constructors

### constructor

• **new HttpException**(`msg`): [`HttpException`](openapi_api.HttpException.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

[`HttpException`](openapi_api.HttpException.md)

#### Overrides

Error.constructor

#### Defined in

[openapi/api/http/http.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/http/http.ts#L26)

## Properties

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
