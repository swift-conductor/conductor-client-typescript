[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / WorkflowTask

# Class: WorkflowTask

[src/common](../modules/src_common.md).WorkflowTask

## Table of contents

### Constructors

- [constructor](src_common.WorkflowTask.md#constructor)

### Properties

- [asyncComplete](src_common.WorkflowTask.md#asynccomplete)
- [caseExpression](src_common.WorkflowTask.md#caseexpression)
- [caseValueParam](src_common.WorkflowTask.md#casevalueparam)
- [decisionCases](src_common.WorkflowTask.md#decisioncases)
- [defaultCase](src_common.WorkflowTask.md#defaultcase)
- [defaultExclusiveJoinTask](src_common.WorkflowTask.md#defaultexclusivejointask)
- [description](src_common.WorkflowTask.md#description)
- [dynamicForkJoinTasksParam](src_common.WorkflowTask.md#dynamicforkjointasksparam)
- [dynamicForkTasksInputParamName](src_common.WorkflowTask.md#dynamicforktasksinputparamname)
- [dynamicForkTasksParam](src_common.WorkflowTask.md#dynamicforktasksparam)
- [dynamicTaskNameParam](src_common.WorkflowTask.md#dynamictasknameparam)
- [evaluatorType](src_common.WorkflowTask.md#evaluatortype)
- [expression](src_common.WorkflowTask.md#expression)
- [forkTasks](src_common.WorkflowTask.md#forktasks)
- [inputParameters](src_common.WorkflowTask.md#inputparameters)
- [joinOn](src_common.WorkflowTask.md#joinon)
- [loopCondition](src_common.WorkflowTask.md#loopcondition)
- [loopOver](src_common.WorkflowTask.md#loopover)
- [name](src_common.WorkflowTask.md#name)
- [optional](src_common.WorkflowTask.md#optional)
- [rateLimited](src_common.WorkflowTask.md#ratelimited)
- [retryCount](src_common.WorkflowTask.md#retrycount)
- [scriptExpression](src_common.WorkflowTask.md#scriptexpression)
- [sink](src_common.WorkflowTask.md#sink)
- [startDelay](src_common.WorkflowTask.md#startdelay)
- [subWorkflowParam](src_common.WorkflowTask.md#subworkflowparam)
- [taskDefinition](src_common.WorkflowTask.md#taskdefinition)
- [taskReferenceName](src_common.WorkflowTask.md#taskreferencename)
- [type](src_common.WorkflowTask.md#type)
- [workflowTaskType](src_common.WorkflowTask.md#workflowtasktype)
- [attributeTypeMap](src_common.WorkflowTask.md#attributetypemap)
- [discriminator](src_common.WorkflowTask.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.WorkflowTask.md#getattributetypemap)

## Constructors

### constructor

• **new WorkflowTask**(): [`WorkflowTask`](src_common.WorkflowTask.md)

#### Returns

[`WorkflowTask`](src_common.WorkflowTask.md)

#### Defined in

[openapi/api/models/WorkflowTask.ts:237](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L237)

## Properties

### asyncComplete

• `Optional` **asyncComplete**: `boolean`

#### Defined in

[openapi/api/models/WorkflowTask.ts:41](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L41)

___

### caseExpression

• `Optional` **caseExpression**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:25](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L25)

___

### caseValueParam

• `Optional` **caseValueParam**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L24)

___

### decisionCases

• `Optional` **decisionCases**: `Object`

#### Index signature

▪ [key: `string`]: [`WorkflowTask`](src_common.WorkflowTask.md)[]

#### Defined in

[openapi/api/models/WorkflowTask.ts:27](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L27)

___

### defaultCase

• `Optional` **defaultCase**: [`WorkflowTask`](src_common.WorkflowTask.md)[]

#### Defined in

[openapi/api/models/WorkflowTask.ts:31](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L31)

___

### defaultExclusiveJoinTask

• `Optional` **defaultExclusiveJoinTask**: `string`[]

#### Defined in

[openapi/api/models/WorkflowTask.ts:40](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L40)

___

### description

• `Optional` **description**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L20)

___

### dynamicForkJoinTasksParam

• `Optional` **dynamicForkJoinTasksParam**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:28](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L28)

___

### dynamicForkTasksInputParamName

• `Optional` **dynamicForkTasksInputParamName**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:30](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L30)

___

### dynamicForkTasksParam

• `Optional` **dynamicForkTasksParam**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:29](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L29)

___

### dynamicTaskNameParam

• `Optional` **dynamicTaskNameParam**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L23)

___

### evaluatorType

• `Optional` **evaluatorType**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:45](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L45)

___

### expression

• `Optional` **expression**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:46](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L46)

___

### forkTasks

• `Optional` **forkTasks**: [`WorkflowTask`](src_common.WorkflowTask.md)[][]

#### Defined in

[openapi/api/models/WorkflowTask.ts:32](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L32)

___

### inputParameters

• `Optional` **inputParameters**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/WorkflowTask.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L21)

___

### joinOn

• `Optional` **joinOn**: `string`[]

#### Defined in

[openapi/api/models/WorkflowTask.ts:35](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L35)

___

### loopCondition

• `Optional` **loopCondition**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:42](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L42)

___

### loopOver

• `Optional` **loopOver**: [`WorkflowTask`](src_common.WorkflowTask.md)[]

#### Defined in

[openapi/api/models/WorkflowTask.ts:43](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L43)

___

### name

• **name**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L18)

___

### optional

• `Optional` **optional**: `boolean`

#### Defined in

[openapi/api/models/WorkflowTask.ts:37](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L37)

___

### rateLimited

• `Optional` **rateLimited**: `boolean`

#### Defined in

[openapi/api/models/WorkflowTask.ts:39](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L39)

___

### retryCount

• `Optional` **retryCount**: `number`

#### Defined in

[openapi/api/models/WorkflowTask.ts:44](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L44)

___

### scriptExpression

• `Optional` **scriptExpression**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L26)

___

### sink

• `Optional` **sink**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:36](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L36)

___

### startDelay

• `Optional` **startDelay**: `number`

#### Defined in

[openapi/api/models/WorkflowTask.ts:33](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L33)

___

### subWorkflowParam

• `Optional` **subWorkflowParam**: [`SubWorkflowParams`](src_common.SubWorkflowParams.md)

#### Defined in

[openapi/api/models/WorkflowTask.ts:34](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L34)

___

### taskDefinition

• `Optional` **taskDefinition**: [`TaskDef`](src_common.TaskDef.md)

#### Defined in

[openapi/api/models/WorkflowTask.ts:38](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L38)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L19)

___

### type

• `Optional` **type**: `string`

#### Defined in

[openapi/api/models/WorkflowTask.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L22)

___

### workflowTaskType

• `Optional` **workflowTaskType**: [`WorkflowTaskWorkflowTaskTypeEnum`](../enums/openapi_api.WorkflowTaskWorkflowTaskTypeEnum.md)

#### Defined in

[openapi/api/models/WorkflowTask.ts:47](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L47)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/WorkflowTask.ts:51](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L51)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/WorkflowTask.ts:49](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L49)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/WorkflowTask.ts:233](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowTask.ts#L233)
