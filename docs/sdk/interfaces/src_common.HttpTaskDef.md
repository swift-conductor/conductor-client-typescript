[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / HttpTaskDef

# Interface: HttpTaskDef

[src/common](../modules/src_common.md).HttpTaskDef

## Hierarchy

- [`CommonTaskDef`](src_common.CommonTaskDef.md)

  ↳ **`HttpTaskDef`**

## Table of contents

### Properties

- [inputParameters](src_common.HttpTaskDef.md#inputparameters)
- [name](src_common.HttpTaskDef.md#name)
- [taskReferenceName](src_common.HttpTaskDef.md#taskreferencename)
- [type](src_common.HttpTaskDef.md#type)

## Properties

### inputParameters

• **inputParameters**: `Object`

#### Index signature

▪ [x: `string`]: `unknown`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `http_request` | [`HttpInputParameters`](src_common.HttpInputParameters.md) |

#### Defined in

[src/common/types.ts:102](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L102)

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](src_common.CommonTaskDef.md).[name](src_common.CommonTaskDef.md#name)

#### Defined in

[src/common/types.ts:2](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L2)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](src_common.CommonTaskDef.md).[taskReferenceName](src_common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L3)

___

### type

• **type**: [`HTTP`](../enums/src_common.TaskType.md#http)

#### Defined in

[src/common/types.ts:106](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L106)
