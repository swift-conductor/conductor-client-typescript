[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/core](../modules/src_core.md) / ConductorError

# Class: ConductorError

[src/core](../modules/src_core.md).ConductorError

## Hierarchy

- `Error`

  ↳ **`ConductorError`**

## Table of contents

### Constructors

- [constructor](src_core.ConductorError.md#constructor)

### Properties

- [\_\_proto\_\_](src_core.ConductorError.md#__proto__)
- [\_trace](src_core.ConductorError.md#_trace)
- [message](src_core.ConductorError.md#message)
- [name](src_core.ConductorError.md#name)
- [stack](src_core.ConductorError.md#stack)
- [prepareStackTrace](src_core.ConductorError.md#preparestacktrace)
- [stackTraceLimit](src_core.ConductorError.md#stacktracelimit)

### Methods

- [captureStackTrace](src_core.ConductorError.md#capturestacktrace)

## Constructors

### constructor

• **new ConductorError**(`message?`, `innerError?`): [`ConductorError`](src_core.ConductorError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `innerError?` | `Error` |

#### Returns

[`ConductorError`](src_core.ConductorError.md)

#### Overrides

Error.constructor

#### Defined in

[src/core/types.ts:7](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/core/types.ts#L7)

## Properties

### \_\_proto\_\_

• `Private` **\_\_proto\_\_**: `any`

#### Defined in

[src/core/types.ts:5](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/core/types.ts#L5)

___

### \_trace

• `Private` **\_trace**: `undefined` \| `Error`

#### Defined in

[src/core/types.ts:4](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/core/types.ts#L4)

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
