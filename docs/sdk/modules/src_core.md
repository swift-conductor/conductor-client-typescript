[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / src/core

# Module: src/core

## Table of contents

### Classes

- [ConductorError](../classes/src_core.ConductorError.md)
- [WorkflowManager](../classes/src_core.WorkflowManager.md)

### Type Aliases

- [TaskResultStatus](src_core.md#taskresultstatus)

### Functions

- [conductorEventTask](src_core.md#conductoreventtask)
- [customTask](src_core.md#customtask)
- [doWhileTask](src_core.md#dowhiletask)
- [dynamicForkTask](src_core.md#dynamicforktask)
- [eventTask](src_core.md#eventtask)
- [forkTask](src_core.md#forktask)
- [forkTaskJoin](src_core.md#forktaskjoin)
- [generate](src_core.md#generate)
- [generateCustomTask](src_core.md#generatecustomtask)
- [generateDoWhileTask](src_core.md#generatedowhiletask)
- [generateEventTask](src_core.md#generateeventtask)
- [generateForkJoinTask](src_core.md#generateforkjointask)
- [generateHTTPTask](src_core.md#generatehttptask)
- [generateInlineTask](src_core.md#generateinlinetask)
- [generateJQTransformTask](src_core.md#generatejqtransformtask)
- [generateJoinTask](src_core.md#generatejointask)
- [generateKafkaPublishTask](src_core.md#generatekafkapublishtask)
- [generateSetVariableTask](src_core.md#generatesetvariabletask)
- [generateSubWorkflowTask](src_core.md#generatesubworkflowtask)
- [generateSwitchTask](src_core.md#generateswitchtask)
- [generateTerminateTask](src_core.md#generateterminatetask)
- [generateWaitTask](src_core.md#generatewaittask)
- [httpTask](src_core.md#httptask)
- [inlineTask](src_core.md#inlinetask)
- [joinTask](src_core.md#jointask)
- [jsonJqTask](src_core.md#jsonjqtask)
- [kafkaPublishTask](src_core.md#kafkapublishtask)
- [newLoopTask](src_core.md#newlooptask)
- [setVariableTask](src_core.md#setvariabletask)
- [sqsEventTask](src_core.md#sqseventtask)
- [subWorkflowTask](src_core.md#subworkflowtask)
- [switchTask](src_core.md#switchtask)
- [taskGenMapper](src_core.md#taskgenmapper)
- [terminateTask](src_core.md#terminatetask)
- [waitTaskDuration](src_core.md#waittaskduration)
- [waitTaskUntil](src_core.md#waittaskuntil)
- [workflow](src_core.md#workflow)

## Type Aliases

### TaskResultStatus

Ƭ **TaskResultStatus**: `NonNullable`\<[`TaskResult`](../classes/src_common.TaskResult.md)[``"status"``]\>

#### Defined in

[src/core/types.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/types.ts#L20)

## Functions

### conductorEventTask

▸ **conductorEventTask**(`taskReferenceName`, `eventName`): [`EventTaskDef`](../interfaces/src_common.EventTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `eventName` | `string` |

#### Returns

[`EventTaskDef`](../interfaces/src_common.EventTaskDef.md)

#### Defined in

[src/core/sdk/event.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/event.ts#L17)

___

### customTask

▸ **customTask**(`name`, `taskReferenceName`, `inputParameters`): [`CustomTaskDef`](../interfaces/src_common.CustomTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `taskReferenceName` | `string` |
| `inputParameters` | `Record`\<`string`, `any`\> |

#### Returns

[`CustomTaskDef`](../interfaces/src_common.CustomTaskDef.md)

#### Defined in

[src/core/sdk/custom.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/custom.ts#L3)

___

### doWhileTask

▸ **doWhileTask**(`taskRefName`, `terminationCondition`, `tasks`): [`DoWhileTaskDef`](../interfaces/src_common.DoWhileTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskRefName` | `string` |
| `terminationCondition` | `string` |
| `tasks` | [`TaskDefTypes`](src_common.md#taskdeftypes)[] |

#### Returns

[`DoWhileTaskDef`](../interfaces/src_common.DoWhileTaskDef.md)

#### Defined in

[src/core/sdk/doWhile.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/doWhile.ts#L3)

___

### dynamicForkTask

▸ **dynamicForkTask**(`taskReferenceName`, `preForkTasks?`, `dynamicTasksInput?`): [`ForkJoinDynamicDef`](../interfaces/src_common.ForkJoinDynamicDef.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `taskReferenceName` | `string` | `undefined` |
| `preForkTasks` | [`TaskDefTypes`](src_common.md#taskdeftypes)[] | `[]` |
| `dynamicTasksInput` | `string` | `""` |

#### Returns

[`ForkJoinDynamicDef`](../interfaces/src_common.ForkJoinDynamicDef.md)

#### Defined in

[src/core/sdk/dynamicFork.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/dynamicFork.ts#L3)

___

### eventTask

▸ **eventTask**(`taskReferenceName`, `eventPrefix`, `eventSuffix`): [`EventTaskDef`](../interfaces/src_common.EventTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `eventPrefix` | `string` |
| `eventSuffix` | `string` |

#### Returns

[`EventTaskDef`](../interfaces/src_common.EventTaskDef.md)

#### Defined in

[src/core/sdk/event.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/event.ts#L3)

___

### forkTask

▸ **forkTask**(`taskReferenceName`, `forkTasks`): [`ForkJoinTaskDef`](../interfaces/src_common.ForkJoinTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `forkTasks` | [`TaskDefTypes`](src_common.md#taskdeftypes)[] |

#### Returns

[`ForkJoinTaskDef`](../interfaces/src_common.ForkJoinTaskDef.md)

#### Defined in

[src/core/sdk/forkJoin.ts:4](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/forkJoin.ts#L4)

___

### forkTaskJoin

▸ **forkTaskJoin**(`taskReferenceName`, `forkTasks`): [[`ForkJoinTaskDef`](../interfaces/src_common.ForkJoinTaskDef.md), [`JoinTaskDef`](../interfaces/src_common.JoinTaskDef.md)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `forkTasks` | [`TaskDefTypes`](src_common.md#taskdeftypes)[] |

#### Returns

[[`ForkJoinTaskDef`](../interfaces/src_common.ForkJoinTaskDef.md), [`JoinTaskDef`](../interfaces/src_common.JoinTaskDef.md)]

#### Defined in

[src/core/sdk/forkJoin.ts:14](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/forkJoin.ts#L14)

___

### generate

▸ **generate**(`overrides`): [`WorkflowDef`](../classes/src_common.WorkflowDef.md)

Takes an optional partial WorkflowDefGen
generates a workflow replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`\<`WorkflowDefGen`\> | overrides for defaults |

#### Returns

[`WorkflowDef`](../classes/src_common.WorkflowDef.md)

a fully defined task

#### Defined in

[src/core/generators/generator.ts:87](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/generator.ts#L87)

___

### generateCustomTask

▸ **generateCustomTask**(`overrides?`): [`CustomTaskDef`](../interfaces/src_common.CustomTaskDef.md)

Takes an optional partial CustomTaskDef
generates a task replacing default values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`\<[`CustomTaskDef`](../interfaces/src_common.CustomTaskDef.md)\> | overrides for defaults |

#### Returns

[`CustomTaskDef`](../interfaces/src_common.CustomTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/CustomTask.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/CustomTask.ts#L11)

___

### generateDoWhileTask

▸ **generateDoWhileTask**(`overrides?`, `nestedTasksMapper?`): [`DoWhileTaskDef`](../interfaces/src_common.DoWhileTaskDef.md)

Takes an optional partial DoWhileTaskDefGen and an optional nestedMapper
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `overrides` | `Partial`\<`DoWhileTaskDefGen`\> | `{}` | overrides for defaults |
| `nestedTasksMapper` | `NestedTaskMapper` | `taskGenMapper` | function to run on array of nested tasks |

#### Returns

[`DoWhileTaskDef`](../interfaces/src_common.DoWhileTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/index.ts:46](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/index.ts#L46)

___

### generateEventTask

▸ **generateEventTask**(`overrides?`): [`EventTaskDef`](../interfaces/src_common.EventTaskDef.md)

Takes an optional partial EventTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`\<[`EventTaskDef`](../interfaces/src_common.EventTaskDef.md)\> | overrides for defaults |

#### Returns

[`EventTaskDef`](../interfaces/src_common.EventTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/EventTask.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/EventTask.ts#L11)

___

### generateForkJoinTask

▸ **generateForkJoinTask**(`overrides?`, `nestedMapper?`): [`ForkJoinTaskDef`](../interfaces/src_common.ForkJoinTaskDef.md)

Takes an optional partial DoWhileTaskDefGen and an optional nestedMapper
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `overrides` | `Partial`\<`ForkJoinTaskDefGen`\> | `{}` | overrides for defaults |
| `nestedMapper` | `NestedTaskMapper` | `taskGenMapper` | - |

#### Returns

[`ForkJoinTaskDef`](../interfaces/src_common.ForkJoinTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/index.ts:59](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/index.ts#L59)

___

### generateHTTPTask

▸ **generateHTTPTask**(`overrides?`): [`HttpTaskDef`](../interfaces/src_common.HttpTaskDef.md)

Takes an optional partial HttpTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`\<[`HttpTaskDef`](../interfaces/src_common.HttpTaskDef.md)\> | overrides for defaults |

#### Returns

[`HttpTaskDef`](../interfaces/src_common.HttpTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/HttpTask.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/HttpTask.ts#L11)

___

### generateInlineTask

▸ **generateInlineTask**(`override?`): [`InlineTaskDef`](../interfaces/src_common.InlineTaskDef.md)

Takes an optional partial InlineTaskDefGen
generates a task replacing default/fake values with provided overrides

<b>note</b> that the inputParameters.expression can be either a string containing javascript
or a function thar returns an ES5 function

#### Parameters

| Name | Type |
| :------ | :------ |
| `override` | `Partial`\<`InlineTaskDefGen`\> |

#### Returns

[`InlineTaskDef`](../interfaces/src_common.InlineTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/InlineTask.ts:40](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/InlineTask.ts#L40)

___

### generateJQTransformTask

▸ **generateJQTransformTask**(`overrides?`): [`JsonJQTransformTaskDef`](../interfaces/src_common.JsonJQTransformTaskDef.md)

Takes an optional partial JsonJQTransformTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`\<[`JsonJQTransformTaskDef`](../interfaces/src_common.JsonJQTransformTaskDef.md)\> | overrides for defaults |

#### Returns

[`JsonJQTransformTaskDef`](../interfaces/src_common.JsonJQTransformTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/JsonJQTransform.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/JsonJQTransform.ts#L11)

___

### generateJoinTask

▸ **generateJoinTask**(`overrides?`): [`JoinTaskDef`](../interfaces/src_common.JoinTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides` | `Partial`\<[`JoinTaskDef`](../interfaces/src_common.JoinTaskDef.md)\> |

#### Returns

[`JoinTaskDef`](../interfaces/src_common.JoinTaskDef.md)

#### Defined in

[src/core/generators/ForkJoin.ts:16](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/ForkJoin.ts#L16)

___

### generateKafkaPublishTask

▸ **generateKafkaPublishTask**(`overrides?`): [`KafkaPublishTaskDef`](../interfaces/src_common.KafkaPublishTaskDef.md)

Takes an optional partial KafkaPublishTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`\<[`KafkaPublishTaskDef`](../interfaces/src_common.KafkaPublishTaskDef.md)\> | overrides for defaults |

#### Returns

[`KafkaPublishTaskDef`](../interfaces/src_common.KafkaPublishTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/KafkaTask.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/KafkaTask.ts#L11)

___

### generateSetVariableTask

▸ **generateSetVariableTask**(`overrides?`): [`SetVariableTaskDef`](../interfaces/src_common.SetVariableTaskDef.md)

Takes an optional partial SetVariableTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`\<[`SetVariableTaskDef`](../interfaces/src_common.SetVariableTaskDef.md)\> | overrides for defaults |

#### Returns

[`SetVariableTaskDef`](../interfaces/src_common.SetVariableTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/SetVariableTask.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/SetVariableTask.ts#L11)

___

### generateSubWorkflowTask

▸ **generateSubWorkflowTask**(`overrides?`): [`SubWorkflowTaskDef`](../interfaces/src_common.SubWorkflowTaskDef.md)

Takes an optional partial SubWorkflowTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`\<[`SubWorkflowTaskDef`](../interfaces/src_common.SubWorkflowTaskDef.md)\> | overrides for defaults |

#### Returns

[`SubWorkflowTaskDef`](../interfaces/src_common.SubWorkflowTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/SubWorkflowTask.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/SubWorkflowTask.ts#L11)

___

### generateSwitchTask

▸ **generateSwitchTask**(`overrides?`, `nestedTasksMapper?`): [`SwitchTaskDef`](../interfaces/src_common.SwitchTaskDef.md)

Takes an optional partial SwitchTaskDefGen and an optional nestedMapper
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `overrides` | `Partial`\<`SwitchTaskDefGen`\> | `{}` | overrides for defaults |
| `nestedTasksMapper` | `NestedTaskMapper` | `taskGenMapper` | function to run on array of nested tasks |

#### Returns

[`SwitchTaskDef`](../interfaces/src_common.SwitchTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/index.ts:33](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/index.ts#L33)

___

### generateTerminateTask

▸ **generateTerminateTask**(`overrides?`): [`TerminateTaskDef`](../interfaces/src_common.TerminateTaskDef.md)

Takes an optional partial TerminateTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`\<[`TerminateTaskDef`](../interfaces/src_common.TerminateTaskDef.md)\> | overrides for defaults |

#### Returns

[`TerminateTaskDef`](../interfaces/src_common.TerminateTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/TerminateTask.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/TerminateTask.ts#L11)

___

### generateWaitTask

▸ **generateWaitTask**(`overrides?`): [`WaitTaskDef`](../interfaces/src_common.WaitTaskDef.md)

Takes an optional partial WaitTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`\<[`WaitTaskDef`](../interfaces/src_common.WaitTaskDef.md)\> | overrides for defaults |

#### Returns

[`WaitTaskDef`](../interfaces/src_common.WaitTaskDef.md)

a fully defined task

#### Defined in

[src/core/generators/WaitTask.ts:11](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/WaitTask.ts#L11)

___

### httpTask

▸ **httpTask**(`taskReferenceName`, `inputParameters`): [`HttpTaskDef`](../interfaces/src_common.HttpTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `inputParameters` | [`HttpInputParameters`](../interfaces/src_common.HttpInputParameters.md) |

#### Returns

[`HttpTaskDef`](../interfaces/src_common.HttpTaskDef.md)

#### Defined in

[src/core/sdk/http.ts:7](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/http.ts#L7)

___

### inlineTask

▸ **inlineTask**(`taskReferenceName`, `script`, `evaluatorType?`): [`InlineTaskDef`](../interfaces/src_common.InlineTaskDef.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `taskReferenceName` | `string` | `undefined` |
| `script` | `string` | `undefined` |
| `evaluatorType` | ``"javascript"`` \| ``"value-param"`` | `"javascript"` |

#### Returns

[`InlineTaskDef`](../interfaces/src_common.InlineTaskDef.md)

#### Defined in

[src/core/sdk/inline.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/inline.ts#L3)

___

### joinTask

▸ **joinTask**(`taskReferenceName`, `joinOn`): [`JoinTaskDef`](../interfaces/src_common.JoinTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `joinOn` | `string`[] |

#### Returns

[`JoinTaskDef`](../interfaces/src_common.JoinTaskDef.md)

#### Defined in

[src/core/sdk/join.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/join.ts#L3)

___

### jsonJqTask

▸ **jsonJqTask**(`taskReferenceName`, `script`): [`JsonJQTransformTaskDef`](../interfaces/src_common.JsonJQTransformTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `script` | `string` |

#### Returns

[`JsonJQTransformTaskDef`](../interfaces/src_common.JsonJQTransformTaskDef.md)

#### Defined in

[src/core/sdk/jsonJq.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/jsonJq.ts#L3)

___

### kafkaPublishTask

▸ **kafkaPublishTask**(`taskReferenceName`, `kafka_request`): [`KafkaPublishTaskDef`](../interfaces/src_common.KafkaPublishTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `kafka_request` | [`KafkaPublishInputParameters`](../interfaces/src_common.KafkaPublishInputParameters.md) |

#### Returns

[`KafkaPublishTaskDef`](../interfaces/src_common.KafkaPublishTaskDef.md)

#### Defined in

[src/core/sdk/kafkaPublish.ts:7](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/kafkaPublish.ts#L7)

___

### newLoopTask

▸ **newLoopTask**(`taskRefName`, `iterations`, `tasks`): [`DoWhileTaskDef`](../interfaces/src_common.DoWhileTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskRefName` | `string` |
| `iterations` | `number` |
| `tasks` | [`TaskDefTypes`](src_common.md#taskdeftypes)[] |

#### Returns

[`DoWhileTaskDef`](../interfaces/src_common.DoWhileTaskDef.md)

#### Defined in

[src/core/sdk/doWhile.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/doWhile.ts#L19)

___

### setVariableTask

▸ **setVariableTask**(`taskReferenceName`, `inputParameters`): [`SetVariableTaskDef`](../interfaces/src_common.SetVariableTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `inputParameters` | `Record`\<`string`, `any`\> |

#### Returns

[`SetVariableTaskDef`](../interfaces/src_common.SetVariableTaskDef.md)

#### Defined in

[src/core/sdk/setVariable.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/setVariable.ts#L3)

___

### sqsEventTask

▸ **sqsEventTask**(`taskReferenceName`, `queueName`): [`EventTaskDef`](../interfaces/src_common.EventTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `queueName` | `string` |

#### Returns

[`EventTaskDef`](../interfaces/src_common.EventTaskDef.md)

#### Defined in

[src/core/sdk/event.ts:14](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/event.ts#L14)

___

### subWorkflowTask

▸ **subWorkflowTask**(`taskReferenceName`, `workflowName`, `version?`): [`SubWorkflowTaskDef`](../interfaces/src_common.SubWorkflowTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `workflowName` | `string` |
| `version?` | `number` |

#### Returns

[`SubWorkflowTaskDef`](../interfaces/src_common.SubWorkflowTaskDef.md)

#### Defined in

[src/core/sdk/subWorkflow.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/subWorkflow.ts#L3)

___

### switchTask

▸ **switchTask**(`taskReferenceName`, `expression`, `decisionCases?`, `defaultCase?`): [`SwitchTaskDef`](../interfaces/src_common.SwitchTaskDef.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `taskReferenceName` | `string` | `undefined` |
| `expression` | `string` | `undefined` |
| `decisionCases` | `Record`\<`string`, [`TaskDefTypes`](src_common.md#taskdeftypes)[]\> | `{}` |
| `defaultCase` | [`TaskDefTypes`](src_common.md#taskdeftypes)[] | `[]` |

#### Returns

[`SwitchTaskDef`](../interfaces/src_common.SwitchTaskDef.md)

#### Defined in

[src/core/sdk/switch.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/switch.ts#L3)

___

### taskGenMapper

▸ **taskGenMapper**(`tasks`): [`TaskDefTypes`](src_common.md#taskdeftypes)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | `Partial`\<`TaskDefTypesGen`\>[] |

#### Returns

[`TaskDefTypes`](src_common.md#taskdeftypes)[]

#### Defined in

[src/core/generators/generator.ts:57](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/generators/generator.ts#L57)

___

### terminateTask

▸ **terminateTask**(`taskReferenceName`, `status`, `terminationReason?`): [`TerminateTaskDef`](../interfaces/src_common.TerminateTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `status` | ``"FAILED"`` \| ``"COMPLETED"`` |
| `terminationReason?` | `string` |

#### Returns

[`TerminateTaskDef`](../interfaces/src_common.TerminateTaskDef.md)

#### Defined in

[src/core/sdk/terminate.ts:2](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/terminate.ts#L2)

___

### waitTaskDuration

▸ **waitTaskDuration**(`taskReferenceName`, `duration`): [`WaitTaskDef`](../interfaces/src_common.WaitTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `duration` | `string` |

#### Returns

[`WaitTaskDef`](../interfaces/src_common.WaitTaskDef.md)

#### Defined in

[src/core/sdk/wait.ts:3](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/wait.ts#L3)

___

### waitTaskUntil

▸ **waitTaskUntil**(`taskReferenceName`, `until`): [`WaitTaskDef`](../interfaces/src_common.WaitTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `until` | `string` |

#### Returns

[`WaitTaskDef`](../interfaces/src_common.WaitTaskDef.md)

#### Defined in

[src/core/sdk/wait.ts:12](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/wait.ts#L12)

___

### workflow

▸ **workflow**(`name`, `tasks`): [`WorkflowDef`](../classes/src_common.WorkflowDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `tasks` | [`TaskDefTypes`](src_common.md#taskdeftypes)[] |

#### Returns

[`WorkflowDef`](../classes/src_common.WorkflowDef.md)

#### Defined in

[src/core/sdk/workflow.ts:4](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/sdk/workflow.ts#L4)
