[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / Task

# Class: Task

[src/common](../modules/src_common.md).Task

## Table of contents

### Constructors

- [constructor](src_common.Task.md#constructor)

### Properties

- [callbackAfterSeconds](src_common.Task.md#callbackafterseconds)
- [callbackFromWorker](src_common.Task.md#callbackfromworker)
- [correlationId](src_common.Task.md#correlationid)
- [domain](src_common.Task.md#domain)
- [endTime](src_common.Task.md#endtime)
- [executed](src_common.Task.md#executed)
- [executionNameSpace](src_common.Task.md#executionnamespace)
- [externalInputPayloadStoragePath](src_common.Task.md#externalinputpayloadstoragepath)
- [externalOutputPayloadStoragePath](src_common.Task.md#externaloutputpayloadstoragepath)
- [inputData](src_common.Task.md#inputdata)
- [isolationGroupId](src_common.Task.md#isolationgroupid)
- [iteration](src_common.Task.md#iteration)
- [loopOverTask](src_common.Task.md#loopovertask)
- [outputData](src_common.Task.md#outputdata)
- [pollCount](src_common.Task.md#pollcount)
- [queueWaitTime](src_common.Task.md#queuewaittime)
- [rateLimitFrequencyInSeconds](src_common.Task.md#ratelimitfrequencyinseconds)
- [rateLimitPerFrequency](src_common.Task.md#ratelimitperfrequency)
- [reasonForIncompletion](src_common.Task.md#reasonforincompletion)
- [referenceTaskName](src_common.Task.md#referencetaskname)
- [responseTimeoutSeconds](src_common.Task.md#responsetimeoutseconds)
- [retried](src_common.Task.md#retried)
- [retriedTaskId](src_common.Task.md#retriedtaskid)
- [retryCount](src_common.Task.md#retrycount)
- [scheduledTime](src_common.Task.md#scheduledtime)
- [seq](src_common.Task.md#seq)
- [startDelayInSeconds](src_common.Task.md#startdelayinseconds)
- [startTime](src_common.Task.md#starttime)
- [status](src_common.Task.md#status)
- [subWorkflowId](src_common.Task.md#subworkflowid)
- [subworkflowChanged](src_common.Task.md#subworkflowchanged)
- [taskDefName](src_common.Task.md#taskdefname)
- [taskDefinition](src_common.Task.md#taskdefinition)
- [taskId](src_common.Task.md#taskid)
- [taskType](src_common.Task.md#tasktype)
- [updateTime](src_common.Task.md#updatetime)
- [workerId](src_common.Task.md#workerid)
- [workflowInstanceId](src_common.Task.md#workflowinstanceid)
- [workflowPriority](src_common.Task.md#workflowpriority)
- [workflowTask](src_common.Task.md#workflowtask)
- [workflowType](src_common.Task.md#workflowtype)
- [attributeTypeMap](src_common.Task.md#attributetypemap)
- [discriminator](src_common.Task.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.Task.md#getattributetypemap)

## Constructors

### constructor

• **new Task**(): [`Task`](src_common.Task.md)

#### Returns

[`Task`](src_common.Task.md)

#### Defined in

[openapi/api/models/Task.ts:314](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L314)

## Properties

### callbackAfterSeconds

• `Optional` **callbackAfterSeconds**: `number`

#### Defined in

[openapi/api/models/Task.ts:41](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L41)

___

### callbackFromWorker

• `Optional` **callbackFromWorker**: `boolean`

#### Defined in

[openapi/api/models/Task.ts:35](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L35)

___

### correlationId

• `Optional` **correlationId**: `string`

#### Defined in

[openapi/api/models/Task.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L24)

___

### domain

• `Optional` **domain**: `string`

#### Defined in

[openapi/api/models/Task.ts:45](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L45)

___

### endTime

• `Optional` **endTime**: `number`

#### Defined in

[openapi/api/models/Task.ts:29](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L29)

___

### executed

• `Optional` **executed**: `boolean`

#### Defined in

[openapi/api/models/Task.ts:34](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L34)

___

### executionNameSpace

• `Optional` **executionNameSpace**: `string`

#### Defined in

[openapi/api/models/Task.ts:51](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L51)

___

### externalInputPayloadStoragePath

• `Optional` **externalInputPayloadStoragePath**: `string`

#### Defined in

[openapi/api/models/Task.ts:48](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L48)

___

### externalOutputPayloadStoragePath

• `Optional` **externalOutputPayloadStoragePath**: `string`

#### Defined in

[openapi/api/models/Task.ts:49](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L49)

___

### inputData

• `Optional` **inputData**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/Task.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L20)

___

### isolationGroupId

• `Optional` **isolationGroupId**: `string`

#### Defined in

[openapi/api/models/Task.ts:52](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L52)

___

### iteration

• `Optional` **iteration**: `number`

#### Defined in

[openapi/api/models/Task.ts:53](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L53)

___

### loopOverTask

• `Optional` **loopOverTask**: `boolean`

#### Defined in

[openapi/api/models/Task.ts:58](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L58)

___

### outputData

• `Optional` **outputData**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/Task.ts:43](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L43)

___

### pollCount

• `Optional` **pollCount**: `number`

#### Defined in

[openapi/api/models/Task.ts:25](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L25)

___

### queueWaitTime

• `Optional` **queueWaitTime**: `number`

#### Defined in

[openapi/api/models/Task.ts:57](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L57)

___

### rateLimitFrequencyInSeconds

• `Optional` **rateLimitFrequencyInSeconds**: `number`

#### Defined in

[openapi/api/models/Task.ts:47](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L47)

___

### rateLimitPerFrequency

• `Optional` **rateLimitPerFrequency**: `number`

#### Defined in

[openapi/api/models/Task.ts:46](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L46)

___

### reasonForIncompletion

• `Optional` **reasonForIncompletion**: `string`

#### Defined in

[openapi/api/models/Task.ts:40](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L40)

___

### referenceTaskName

• `Optional` **referenceTaskName**: `string`

#### Defined in

[openapi/api/models/Task.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L21)

___

### responseTimeoutSeconds

• `Optional` **responseTimeoutSeconds**: `number`

#### Defined in

[openapi/api/models/Task.ts:36](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L36)

___

### retried

• `Optional` **retried**: `boolean`

#### Defined in

[openapi/api/models/Task.ts:33](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L33)

___

### retriedTaskId

• `Optional` **retriedTaskId**: `string`

#### Defined in

[openapi/api/models/Task.ts:32](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L32)

___

### retryCount

• `Optional` **retryCount**: `number`

#### Defined in

[openapi/api/models/Task.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L22)

___

### scheduledTime

• `Optional` **scheduledTime**: `number`

#### Defined in

[openapi/api/models/Task.ts:27](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L27)

___

### seq

• `Optional` **seq**: `number`

#### Defined in

[openapi/api/models/Task.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L23)

___

### startDelayInSeconds

• `Optional` **startDelayInSeconds**: `number`

#### Defined in

[openapi/api/models/Task.ts:31](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L31)

___

### startTime

• `Optional` **startTime**: `number`

#### Defined in

[openapi/api/models/Task.ts:28](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L28)

___

### status

• `Optional` **status**: [`TaskStatusEnum`](../enums/openapi_api.TaskStatusEnum.md)

#### Defined in

[openapi/api/models/Task.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L19)

___

### subWorkflowId

• `Optional` **subWorkflowId**: `string`

#### Defined in

[openapi/api/models/Task.ts:54](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L54)

___

### subworkflowChanged

• `Optional` **subworkflowChanged**: `boolean`

#### Defined in

[openapi/api/models/Task.ts:55](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L55)

___

### taskDefName

• `Optional` **taskDefName**: `string`

#### Defined in

[openapi/api/models/Task.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L26)

___

### taskDefinition

• `Optional` **taskDefinition**: [`TaskDef`](src_common.TaskDef.md)

#### Defined in

[openapi/api/models/Task.ts:56](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L56)

___

### taskId

• `Optional` **taskId**: `string`

#### Defined in

[openapi/api/models/Task.ts:39](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L39)

___

### taskType

• `Optional` **taskType**: `string`

#### Defined in

[openapi/api/models/Task.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L18)

___

### updateTime

• `Optional` **updateTime**: `number`

#### Defined in

[openapi/api/models/Task.ts:30](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L30)

___

### workerId

• `Optional` **workerId**: `string`

#### Defined in

[openapi/api/models/Task.ts:42](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L42)

___

### workflowInstanceId

• `Optional` **workflowInstanceId**: `string`

#### Defined in

[openapi/api/models/Task.ts:37](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L37)

___

### workflowPriority

• `Optional` **workflowPriority**: `number`

#### Defined in

[openapi/api/models/Task.ts:50](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L50)

___

### workflowTask

• `Optional` **workflowTask**: [`WorkflowTask`](src_common.WorkflowTask.md)

#### Defined in

[openapi/api/models/Task.ts:44](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L44)

___

### workflowType

• `Optional` **workflowType**: `string`

#### Defined in

[openapi/api/models/Task.ts:38](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L38)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/Task.ts:62](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L62)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/Task.ts:60](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L60)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/Task.ts:310](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Task.ts#L310)
