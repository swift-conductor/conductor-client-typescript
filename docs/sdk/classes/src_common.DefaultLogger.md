[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / DefaultLogger

# Class: DefaultLogger

[src/common](../modules/src_common.md).DefaultLogger

## Implements

- [`ConductorLogger`](../interfaces/src_common.ConductorLogger.md)

## Table of contents

### Constructors

- [constructor](src_common.DefaultLogger.md#constructor)

### Properties

- [level](src_common.DefaultLogger.md#level)
- [tags](src_common.DefaultLogger.md#tags)

### Methods

- [debug](src_common.DefaultLogger.md#debug)
- [error](src_common.DefaultLogger.md#error)
- [info](src_common.DefaultLogger.md#info)
- [log](src_common.DefaultLogger.md#log)

## Constructors

### constructor

• **new DefaultLogger**(`config?`): [`DefaultLogger`](src_common.DefaultLogger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`DefaultLoggerConfig`](../interfaces/src_common.DefaultLoggerConfig.md) |

#### Returns

[`DefaultLogger`](src_common.DefaultLogger.md)

#### Defined in

[src/common/ConductorLogger.ts:28](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/ConductorLogger.ts#L28)

## Properties

### level

• `Private` `Readonly` **level**: `number`

#### Defined in

[src/common/ConductorLogger.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/ConductorLogger.ts#L26)

___

### tags

• `Private` `Readonly` **tags**: `Object`[]

#### Defined in

[src/common/ConductorLogger.ts:25](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/ConductorLogger.ts#L25)

## Methods

### debug

▸ **debug**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`void`

#### Implementation of

[ConductorLogger](../interfaces/src_common.ConductorLogger.md).[debug](../interfaces/src_common.ConductorLogger.md#debug)

#### Defined in

[src/common/ConductorLogger.ts:56](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/ConductorLogger.ts#L56)

___

### error

▸ **error**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`void`

#### Implementation of

[ConductorLogger](../interfaces/src_common.ConductorLogger.md).[error](../interfaces/src_common.ConductorLogger.md#error)

#### Defined in

[src/common/ConductorLogger.ts:60](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/ConductorLogger.ts#L60)

___

### info

▸ **info**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`void`

#### Implementation of

[ConductorLogger](../interfaces/src_common.ConductorLogger.md).[info](../interfaces/src_common.ConductorLogger.md#info)

#### Defined in

[src/common/ConductorLogger.ts:52](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/ConductorLogger.ts#L52)

___

### log

▸ **log**(`level`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | ``"DEBUG"`` \| ``"INFO"`` \| ``"ERROR"`` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

[src/common/ConductorLogger.ts:38](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/ConductorLogger.ts#L38)
