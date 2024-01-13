[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / TerminateTaskDef

# Interface: TerminateTaskDef

[src/common](../modules/src_common.md).TerminateTaskDef

## Hierarchy

- [`CommonTaskDef`](src_common.CommonTaskDef.md)

  ↳ **`TerminateTaskDef`**

## Table of contents

### Properties

- [inputParameters](src_common.TerminateTaskDef.md#inputparameters)
- [name](src_common.TerminateTaskDef.md#name)
- [optional](src_common.TerminateTaskDef.md#optional)
- [startDelay](src_common.TerminateTaskDef.md#startdelay)
- [taskReferenceName](src_common.TerminateTaskDef.md#taskreferencename)
- [type](src_common.TerminateTaskDef.md#type)

## Properties

### inputParameters

• **inputParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `terminationReason?` | `string` |
| `terminationStatus` | ``"FAILED"`` \| ``"COMPLETED"`` |
| `workflowOutput?` | `Record`\<`string`, `string`\> |

#### Defined in

[src/common/types.ts:176](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L176)

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

[src/common/types.ts:183](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L183)

___

### startDelay

• `Optional` **startDelay**: `number`

#### Defined in

[src/common/types.ts:182](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L182)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](src_common.CommonTaskDef.md).[taskReferenceName](src_common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L3)

___

### type

• **type**: [`TERMINATE`](../enums/src_common.TaskType.md#terminate)

#### Defined in

[src/common/types.ts:181](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L181)
