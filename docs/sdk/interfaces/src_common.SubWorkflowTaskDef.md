[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / SubWorkflowTaskDef

# Interface: SubWorkflowTaskDef

[src/common](../modules/src_common.md).SubWorkflowTaskDef

## Hierarchy

- [`CommonTaskDef`](src_common.CommonTaskDef.md)

  ↳ **`SubWorkflowTaskDef`**

## Table of contents

### Properties

- [inputParameters](src_common.SubWorkflowTaskDef.md#inputparameters)
- [name](src_common.SubWorkflowTaskDef.md#name)
- [subWorkflowParam](src_common.SubWorkflowTaskDef.md#subworkflowparam)
- [taskReferenceName](src_common.SubWorkflowTaskDef.md#taskreferencename)
- [type](src_common.SubWorkflowTaskDef.md#type)

## Properties

### inputParameters

• `Optional` **inputParameters**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/common/types.ts:158](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L158)

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](src_common.CommonTaskDef.md).[name](src_common.CommonTaskDef.md#name)

#### Defined in

[src/common/types.ts:2](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L2)

___

### subWorkflowParam

• **subWorkflowParam**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `taskToDomain?` | `Record`\<`string`, `string`\> |
| `version?` | `number` |

#### Defined in

[src/common/types.ts:159](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L159)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](src_common.CommonTaskDef.md).[taskReferenceName](src_common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L3)

___

### type

• **type**: [`SUB_WORKFLOW`](../enums/src_common.TaskType.md#sub_workflow)

#### Defined in

[src/common/types.ts:157](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/src/common/types.ts#L157)
