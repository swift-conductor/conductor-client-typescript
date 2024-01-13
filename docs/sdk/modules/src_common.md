[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / src/common

# Module: src/common

## Table of contents

### Enumerations

- [TaskType](../enums/src_common.TaskType.md)

### Classes

- [Action](../classes/src_common.Action.md)
- [ConductorClient](../classes/src_common.ConductorClient.md)
- [DefaultLogger](../classes/src_common.DefaultLogger.md)
- [EventHandler](../classes/src_common.EventHandler.md)
- [ExternalStorageLocation](../classes/src_common.ExternalStorageLocation.md)
- [PollData](../classes/src_common.PollData.md)
- [RerunWorkflowRequest](../classes/src_common.RerunWorkflowRequest.md)
- [SearchResultTask](../classes/src_common.SearchResultTask.md)
- [SearchResultTaskSummary](../classes/src_common.SearchResultTaskSummary.md)
- [SearchResultWorkflow](../classes/src_common.SearchResultWorkflow.md)
- [SearchResultWorkflowSummary](../classes/src_common.SearchResultWorkflowSummary.md)
- [SkipTaskRequest](../classes/src_common.SkipTaskRequest.md)
- [StartWorkflow](../classes/src_common.StartWorkflow.md)
- [StartWorkflowRequest](../classes/src_common.StartWorkflowRequest.md)
- [SubWorkflowParams](../classes/src_common.SubWorkflowParams.md)
- [Task](../classes/src_common.Task.md)
- [TaskDef](../classes/src_common.TaskDef.md)
- [TaskDetails](../classes/src_common.TaskDetails.md)
- [TaskExecLog](../classes/src_common.TaskExecLog.md)
- [TaskResult](../classes/src_common.TaskResult.md)
- [TaskSummary](../classes/src_common.TaskSummary.md)
- [Workflow](../classes/src_common.Workflow.md)
- [WorkflowDef](../classes/src_common.WorkflowDef.md)
- [WorkflowSummary](../classes/src_common.WorkflowSummary.md)
- [WorkflowTask](../classes/src_common.WorkflowTask.md)
- [WorkflowTestRequest](../classes/src_common.WorkflowTestRequest.md)

### Interfaces

- [CommonTaskDef](../interfaces/src_common.CommonTaskDef.md)
- [ConductorLogger](../interfaces/src_common.ConductorLogger.md)
- [CustomTaskDef](../interfaces/src_common.CustomTaskDef.md)
- [DefaultLoggerConfig](../interfaces/src_common.DefaultLoggerConfig.md)
- [DoWhileTaskDef](../interfaces/src_common.DoWhileTaskDef.md)
- [EventTaskDef](../interfaces/src_common.EventTaskDef.md)
- [ForkJoinDynamicDef](../interfaces/src_common.ForkJoinDynamicDef.md)
- [ForkJoinTaskDef](../interfaces/src_common.ForkJoinTaskDef.md)
- [HttpInputParameters](../interfaces/src_common.HttpInputParameters.md)
- [HttpTaskDef](../interfaces/src_common.HttpTaskDef.md)
- [InlineTaskDef](../interfaces/src_common.InlineTaskDef.md)
- [InlineTaskInputParameters](../interfaces/src_common.InlineTaskInputParameters.md)
- [JoinTaskDef](../interfaces/src_common.JoinTaskDef.md)
- [JsonJQTransformTaskDef](../interfaces/src_common.JsonJQTransformTaskDef.md)
- [KafkaPublishInputParameters](../interfaces/src_common.KafkaPublishInputParameters.md)
- [KafkaPublishTaskDef](../interfaces/src_common.KafkaPublishTaskDef.md)
- [SetVariableTaskDef](../interfaces/src_common.SetVariableTaskDef.md)
- [SubWorkflowTaskDef](../interfaces/src_common.SubWorkflowTaskDef.md)
- [SwitchTaskDef](../interfaces/src_common.SwitchTaskDef.md)
- [TerminateTaskDef](../interfaces/src_common.TerminateTaskDef.md)
- [WaitTaskDef](../interfaces/src_common.WaitTaskDef.md)

### Type Aliases

- [ConductorLogLevel](src_common.md#conductorloglevel)
- [TaskDefTypes](src_common.md#taskdeftypes)

### Variables

- [noopLogger](src_common.md#nooplogger)

## Type Aliases

### ConductorLogLevel

Ƭ **ConductorLogLevel**: keyof typeof `LOG_LEVELS`

#### Defined in

[src/common/ConductorLogger.ts:7](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/ConductorLogger.ts#L7)

___

### TaskDefTypes

Ƭ **TaskDefTypes**: [`CustomTaskDef`](../interfaces/src_common.CustomTaskDef.md) \| [`DoWhileTaskDef`](../interfaces/src_common.DoWhileTaskDef.md) \| [`EventTaskDef`](../interfaces/src_common.EventTaskDef.md) \| [`ForkJoinTaskDef`](../interfaces/src_common.ForkJoinTaskDef.md) \| [`ForkJoinDynamicDef`](../interfaces/src_common.ForkJoinDynamicDef.md) \| [`HttpTaskDef`](../interfaces/src_common.HttpTaskDef.md) \| [`InlineTaskDef`](../interfaces/src_common.InlineTaskDef.md) \| [`JsonJQTransformTaskDef`](../interfaces/src_common.JsonJQTransformTaskDef.md) \| [`KafkaPublishTaskDef`](../interfaces/src_common.KafkaPublishTaskDef.md) \| [`SetVariableTaskDef`](../interfaces/src_common.SetVariableTaskDef.md) \| [`SubWorkflowTaskDef`](../interfaces/src_common.SubWorkflowTaskDef.md) \| [`SwitchTaskDef`](../interfaces/src_common.SwitchTaskDef.md) \| [`TerminateTaskDef`](../interfaces/src_common.TerminateTaskDef.md) \| [`JoinTaskDef`](../interfaces/src_common.JoinTaskDef.md) \| [`WaitTaskDef`](../interfaces/src_common.WaitTaskDef.md)

#### Defined in

[src/common/types.ts:31](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/types.ts#L31)

## Variables

### noopLogger

• `Const` **noopLogger**: [`ConductorLogger`](../interfaces/src_common.ConductorLogger.md)

#### Defined in

[src/common/ConductorLogger.ts:65](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/common/ConductorLogger.ts#L65)
