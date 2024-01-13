[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / KafkaPublishTaskDef

# Interface: KafkaPublishTaskDef

[src/common](../modules/src_common.md).KafkaPublishTaskDef

## Hierarchy

- [`CommonTaskDef`](src_common.CommonTaskDef.md)

  ↳ **`KafkaPublishTaskDef`**

## Table of contents

### Properties

- [inputParameters](src_common.KafkaPublishTaskDef.md#inputparameters)
- [name](src_common.KafkaPublishTaskDef.md#name)
- [taskReferenceName](src_common.KafkaPublishTaskDef.md#taskreferencename)
- [type](src_common.KafkaPublishTaskDef.md#type)

## Properties

### inputParameters

• **inputParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kafka_request` | [`KafkaPublishInputParameters`](src_common.KafkaPublishInputParameters.md) |

#### Defined in

[src/common/types.ts:140](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L140)

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

• **type**: [`KAFKA_PUBLISH`](../enums/src_common.TaskType.md#kafka_publish)

#### Defined in

[src/common/types.ts:143](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L143)
