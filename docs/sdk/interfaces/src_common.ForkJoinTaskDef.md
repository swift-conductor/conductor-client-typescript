[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / ForkJoinTaskDef

# Interface: ForkJoinTaskDef

[src/common](../modules/src_common.md).ForkJoinTaskDef

## Hierarchy

- [`CommonTaskDef`](src_common.CommonTaskDef.md)

  ↳ **`ForkJoinTaskDef`**

## Table of contents

### Properties

- [forkTasks](src_common.ForkJoinTaskDef.md#forktasks)
- [inputParameters](src_common.ForkJoinTaskDef.md#inputparameters)
- [name](src_common.ForkJoinTaskDef.md#name)
- [taskReferenceName](src_common.ForkJoinTaskDef.md#taskreferencename)
- [type](src_common.ForkJoinTaskDef.md#type)

## Properties

### forkTasks

• **forkTasks**: [`TaskDefTypes`](../modules/src_common.md#taskdeftypes)[][]

#### Defined in

[src/common/types.ts:67](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L67)

___

### inputParameters

• `Optional` **inputParameters**: `Record`\<`string`, `string`\>

#### Defined in

[src/common/types.ts:66](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L66)

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](src_common.CommonTaskDef.md).[name](src_common.CommonTaskDef.md#name)

#### Defined in

[src/common/types.ts:2](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L2)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](src_common.CommonTaskDef.md).[taskReferenceName](src_common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L3)

___

### type

• **type**: [`FORK_JOIN`](../enums/src_common.TaskType.md#fork_join)

#### Defined in

[src/common/types.ts:65](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L65)
