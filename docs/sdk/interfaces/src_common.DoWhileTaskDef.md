[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / DoWhileTaskDef

# Interface: DoWhileTaskDef

[src/common](../modules/src_common.md).DoWhileTaskDef

## Hierarchy

- [`CommonTaskDef`](src_common.CommonTaskDef.md)

  ↳ **`DoWhileTaskDef`**

## Table of contents

### Properties

- [asyncComplete](src_common.DoWhileTaskDef.md#asynccomplete)
- [inputParameters](src_common.DoWhileTaskDef.md#inputparameters)
- [loopCondition](src_common.DoWhileTaskDef.md#loopcondition)
- [loopOver](src_common.DoWhileTaskDef.md#loopover)
- [name](src_common.DoWhileTaskDef.md#name)
- [optional](src_common.DoWhileTaskDef.md#optional)
- [startDelay](src_common.DoWhileTaskDef.md#startdelay)
- [taskReferenceName](src_common.DoWhileTaskDef.md#taskreferencename)
- [type](src_common.DoWhileTaskDef.md#type)

## Properties

### asyncComplete

• `Optional` **asyncComplete**: `boolean`

#### Defined in

[src/common/types.ts:53](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L53)

___

### inputParameters

• **inputParameters**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/common/types.ts:49](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L49)

___

### loopCondition

• **loopCondition**: `string`

#### Defined in

[src/common/types.ts:54](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L54)

___

### loopOver

• **loopOver**: [`TaskDefTypes`](../modules/src_common.md#taskdeftypes)[]

#### Defined in

[src/common/types.ts:55](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L55)

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](src_common.CommonTaskDef.md).[name](src_common.CommonTaskDef.md#name)

#### Defined in

[src/common/types.ts:2](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L2)

___

### optional

• `Optional` **optional**: `boolean`

#### Defined in

[src/common/types.ts:52](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L52)

___

### startDelay

• `Optional` **startDelay**: `number`

#### Defined in

[src/common/types.ts:51](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L51)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](src_common.CommonTaskDef.md).[taskReferenceName](src_common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L3)

___

### type

• **type**: [`DO_WHILE`](../enums/src_common.TaskType.md#do_while)

#### Defined in

[src/common/types.ts:50](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L50)
