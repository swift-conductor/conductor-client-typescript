[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / ForkJoinDynamicDef

# Interface: ForkJoinDynamicDef

[src/common](../modules/src_common.md).ForkJoinDynamicDef

## Hierarchy

- [`CommonTaskDef`](src_common.CommonTaskDef.md)

  ↳ **`ForkJoinDynamicDef`**

## Table of contents

### Properties

- [asyncComplete](src_common.ForkJoinDynamicDef.md#asynccomplete)
- [dynamicForkTasksInputParamName](src_common.ForkJoinDynamicDef.md#dynamicforktasksinputparamname)
- [dynamicForkTasksParam](src_common.ForkJoinDynamicDef.md#dynamicforktasksparam)
- [inputParameters](src_common.ForkJoinDynamicDef.md#inputparameters)
- [name](src_common.ForkJoinDynamicDef.md#name)
- [optional](src_common.ForkJoinDynamicDef.md#optional)
- [startDelay](src_common.ForkJoinDynamicDef.md#startdelay)
- [taskReferenceName](src_common.ForkJoinDynamicDef.md#taskreferencename)
- [type](src_common.ForkJoinDynamicDef.md#type)

## Properties

### asyncComplete

• `Optional` **asyncComplete**: `boolean`

#### Defined in

[src/common/types.ts:88](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L88)

___

### dynamicForkTasksInputParamName

• **dynamicForkTasksInputParamName**: `string`

#### Defined in

[src/common/types.ts:85](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L85)

___

### dynamicForkTasksParam

• **dynamicForkTasksParam**: `string`

#### Defined in

[src/common/types.ts:84](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L84)

___

### inputParameters

• **inputParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dynamicTasks` | `any` |
| `dynamicTasksInput` | `any` |

#### Defined in

[src/common/types.ts:79](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L79)

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

[src/common/types.ts:87](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L87)

___

### startDelay

• `Optional` **startDelay**: `number`

#### Defined in

[src/common/types.ts:86](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L86)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](src_common.CommonTaskDef.md).[taskReferenceName](src_common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L3)

___

### type

• **type**: [`FORK_JOIN_DYNAMIC`](../enums/src_common.TaskType.md#fork_join_dynamic)

#### Defined in

[src/common/types.ts:83](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L83)
