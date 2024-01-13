[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / SwitchTaskDef

# Interface: SwitchTaskDef

[src/common](../modules/src_common.md).SwitchTaskDef

## Hierarchy

- [`CommonTaskDef`](src_common.CommonTaskDef.md)

  ↳ **`SwitchTaskDef`**

## Table of contents

### Properties

- [decisionCases](src_common.SwitchTaskDef.md#decisioncases)
- [defaultCase](src_common.SwitchTaskDef.md#defaultcase)
- [evaluatorType](src_common.SwitchTaskDef.md#evaluatortype)
- [expression](src_common.SwitchTaskDef.md#expression)
- [inputParameters](src_common.SwitchTaskDef.md#inputparameters)
- [name](src_common.SwitchTaskDef.md#name)
- [taskReferenceName](src_common.SwitchTaskDef.md#taskreferencename)
- [type](src_common.SwitchTaskDef.md#type)

## Properties

### decisionCases

• **decisionCases**: `Record`\<`string`, [`TaskDefTypes`](../modules/src_common.md#taskdeftypes)[]\>

#### Defined in

[src/common/types.ts:169](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L169)

___

### defaultCase

• **defaultCase**: [`TaskDefTypes`](../modules/src_common.md#taskdeftypes)[]

#### Defined in

[src/common/types.ts:170](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L170)

___

### evaluatorType

• **evaluatorType**: ``"javascript"`` \| ``"value-param"``

#### Defined in

[src/common/types.ts:171](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L171)

___

### expression

• **expression**: `string`

#### Defined in

[src/common/types.ts:172](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L172)

___

### inputParameters

• **inputParameters**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/common/types.ts:167](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L167)

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

• **type**: [`SWITCH`](../enums/src_common.TaskType.md#switch)

#### Defined in

[src/common/types.ts:168](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L168)
