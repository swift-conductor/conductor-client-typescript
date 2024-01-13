[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/core](../modules/src_core.md) / WorkflowManager

# Class: WorkflowManager

[src/core](../modules/src_core.md).WorkflowManager

## Table of contents

### Constructors

- [constructor](src_core.WorkflowManager.md#constructor)

### Properties

- [\_client](src_core.WorkflowManager.md#_client)

### Methods

- [getTask](src_core.WorkflowManager.md#gettask)
- [getWorkflow](src_core.WorkflowManager.md#getworkflow)
- [pause](src_core.WorkflowManager.md#pause)
- [registerWorkflow](src_core.WorkflowManager.md#registerworkflow)
- [rerun](src_core.WorkflowManager.md#rerun)
- [restart](src_core.WorkflowManager.md#restart)
- [resume](src_core.WorkflowManager.md#resume)
- [retry](src_core.WorkflowManager.md#retry)
- [search](src_core.WorkflowManager.md#search)
- [skipTasksFromWorkflow](src_core.WorkflowManager.md#skiptasksfromworkflow)
- [startWorkflow](src_core.WorkflowManager.md#startworkflow)
- [startWorkflows](src_core.WorkflowManager.md#startworkflows)
- [terminate](src_core.WorkflowManager.md#terminate)
- [unregisterWorkflow](src_core.WorkflowManager.md#unregisterworkflow)
- [updateTask](src_core.WorkflowManager.md#updatetask)

## Constructors

### constructor

• **new WorkflowManager**(`client`): [`WorkflowManager`](src_core.WorkflowManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ConductorClient`](src_common.ConductorClient.md) |

#### Returns

[`WorkflowManager`](src_core.WorkflowManager.md)

#### Defined in

[src/core/manager.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L21)

## Properties

### \_client

• `Readonly` **\_client**: [`ConductorClient`](src_common.ConductorClient.md)

#### Defined in

[src/core/manager.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L19)

## Methods

### getTask

▸ **getTask**(`taskId`): `Promise`\<[`Task`](src_common.Task.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |

#### Returns

`Promise`\<[`Task`](src_common.Task.md)\>

#### Defined in

[src/core/manager.ts:258](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L258)

___

### getWorkflow

▸ **getWorkflow**(`workflowInstanceId`, `includeTasks`, `retry?`): `Promise`\<[`Workflow`](src_common.Workflow.md)\>

Takes an workflowInstanceId and an includeTasks and an optional retry parameter returns the whole execution status.
If includeTasks flag is provided. Details of tasks execution will be returned as well,
retry specifies the amount of retrys before throwing an error.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `workflowInstanceId` | `string` | `undefined` |
| `includeTasks` | `boolean` | `undefined` |
| `retry` | `number` | `0` |

#### Returns

`Promise`\<[`Workflow`](src_common.Workflow.md)\>

#### Defined in

[src/core/manager.ts:77](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L77)

___

### pause

▸ **pause**(`workflowInstanceId`): `Promise`\<`void`\>

Pauses a running workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workflowInstanceId` | `string` | current workflow execution |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/manager.ts:99](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L99)

___

### registerWorkflow

▸ **registerWorkflow**(`workflowDef`): `Promise`\<`void`\>

Will persist a workflow in conductor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workflowDef` | [`WorkflowDef`](src_common.WorkflowDef.md) | Complete workflow definition |

#### Returns

`Promise`\<`void`\>

null

#### Defined in

[src/core/manager.ts:30](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L30)

___

### rerun

▸ **rerun**(`workflowInstanceId`, `rerunWorkflowRequest?`): `Promise`\<`string`\>

Reruns workflowInstanceId workflow. with new parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workflowInstanceId` | `string` | current workflow execution |
| `rerunWorkflowRequest` | `Partial`\<[`RerunWorkflowRequest`](src_common.RerunWorkflowRequest.md)\> | Rerun Workflow Execution Request |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/core/manager.ts:111](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L111)

___

### restart

▸ **restart**(`workflowInstanceId`, `useLatestDefinitions`): `Promise`\<`void`\>

Restarts workflow with workflowInstanceId, if useLatestDefinition uses last defintion

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowInstanceId` | `string` |
| `useLatestDefinitions` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/manager.ts:129](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L129)

___

### resume

▸ **resume**(`workflowInstanceId`): `Promise`\<`void`\>

Resumes a previously paused execution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workflowInstanceId` | `string` | Running workflow workflowInstanceId |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/manager.ts:144](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L144)

___

### retry

▸ **retry**(`workflowInstanceId`, `resumeSubworkflowTasks`): `Promise`\<`void`\>

Retries workflow from last failing task
if resumeSubworkflowTasks is true will resume tasks in spawned subworkflows

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowInstanceId` | `string` |
| `resumeSubworkflowTasks` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/manager.ts:158](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L158)

___

### search

▸ **search**(`start`, `size`, `query`, `freeText`, `sort?`): `Promise`\<[`SearchResultWorkflowSummary`](src_common.SearchResultWorkflowSummary.md)\>

Searches for existing workflows given the following querys

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | `number` | `undefined` |
| `size` | `number` | `undefined` |
| `query` | `string` | `undefined` |
| `freeText` | `string` | `undefined` |
| `sort` | `string` | `""` |

#### Returns

`Promise`\<[`SearchResultWorkflowSummary`](src_common.SearchResultWorkflowSummary.md)\>

#### Defined in

[src/core/manager.ts:176](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L176)

___

### skipTasksFromWorkflow

▸ **skipTasksFromWorkflow**(`workflowInstanceId`, `taskReferenceName`, `skipTaskRequest`): `Promise`\<`void`\>

Skips a task of a running workflow.
by providing a skipTaskRequest you can set the input and the output of the skipped tasks

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowInstanceId` | `string` |
| `taskReferenceName` | `string` |
| `skipTaskRequest` | `Partial`\<[`SkipTaskRequest`](src_common.SkipTaskRequest.md)\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/manager.ts:201](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L201)

___

### startWorkflow

▸ **startWorkflow**(`workflowRequest`): `Promise`\<`string`\>

Takes a StartWorkflowRequest. returns a Promise<string> with the workflowInstanceId of the running workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowRequest` | [`StartWorkflowRequest`](src_common.StartWorkflowRequest.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/core/manager.ts:53](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L53)

___

### startWorkflows

▸ **startWorkflows**(`workflowsRequest`): `Promise`\<`string`\>[]

Takes an array of StartWorkflowRequest[]. returns a Promise<string>[] with the workflowInstanceIds of the running workflows

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowsRequest` | [`StartWorkflowRequest`](src_common.StartWorkflowRequest.md)[] |

#### Returns

`Promise`\<`string`\>[]

#### Defined in

[src/core/manager.ts:64](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L64)

___

### terminate

▸ **terminate**(`workflowInstanceId`, `reason`): `Promise`\<`void`\>

Takes an workflowInstanceId, and terminates a running workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowInstanceId` | `string` |
| `reason` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/manager.ts:220](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L220)

___

### unregisterWorkflow

▸ **unregisterWorkflow**(`name`, `version`): `Promise`\<`void`\>

Delete workflow definition from conductor

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version` | `number` |

#### Returns

`Promise`\<`void`\>

null

#### Defined in

[src/core/manager.ts:41](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L41)

___

### updateTask

▸ **updateTask**(`taskId`, `workflowInstanceId`, `taskStatus`, `outputData`): `Promise`\<`string`\>

Takes a taskId and a workflowInstanceId. Will update the task for the corresponding taskId

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |
| `workflowInstanceId` | `string` |
| `taskStatus` | [`TaskResultStatus`](../modules/src_core.md#taskresultstatus) |
| `outputData` | `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/core/manager.ts:234](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/src/core/manager.ts#L234)
