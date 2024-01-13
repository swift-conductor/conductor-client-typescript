[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / Workflow

# Class: Workflow

[src/common](../modules/src_common.md).Workflow

## Table of contents

### Constructors

- [constructor](src_common.Workflow.md#constructor)

### Properties

- [correlationId](src_common.Workflow.md#correlationid)
- [createTime](src_common.Workflow.md#createtime)
- [createdBy](src_common.Workflow.md#createdby)
- [endTime](src_common.Workflow.md#endtime)
- [event](src_common.Workflow.md#event)
- [externalInputPayloadStoragePath](src_common.Workflow.md#externalinputpayloadstoragepath)
- [externalOutputPayloadStoragePath](src_common.Workflow.md#externaloutputpayloadstoragepath)
- [failedReferenceTaskNames](src_common.Workflow.md#failedreferencetasknames)
- [failedTaskNames](src_common.Workflow.md#failedtasknames)
- [input](src_common.Workflow.md#input)
- [lastRetriedTime](src_common.Workflow.md#lastretriedtime)
- [output](src_common.Workflow.md#output)
- [ownerApp](src_common.Workflow.md#ownerapp)
- [parentWorkflowId](src_common.Workflow.md#parentworkflowid)
- [parentWorkflowTaskId](src_common.Workflow.md#parentworkflowtaskid)
- [priority](src_common.Workflow.md#priority)
- [reRunFromWorkflowId](src_common.Workflow.md#rerunfromworkflowid)
- [reasonForIncompletion](src_common.Workflow.md#reasonforincompletion)
- [startTime](src_common.Workflow.md#starttime)
- [status](src_common.Workflow.md#status)
- [taskToDomain](src_common.Workflow.md#tasktodomain)
- [tasks](src_common.Workflow.md#tasks)
- [updateTime](src_common.Workflow.md#updatetime)
- [updatedBy](src_common.Workflow.md#updatedby)
- [variables](src_common.Workflow.md#variables)
- [workflowDefinition](src_common.Workflow.md#workflowdefinition)
- [workflowId](src_common.Workflow.md#workflowid)
- [workflowName](src_common.Workflow.md#workflowname)
- [workflowVersion](src_common.Workflow.md#workflowversion)
- [attributeTypeMap](src_common.Workflow.md#attributetypemap)
- [discriminator](src_common.Workflow.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.Workflow.md#getattributetypemap)

## Constructors

### constructor

• **new Workflow**(): [`Workflow`](src_common.Workflow.md)

#### Returns

[`Workflow`](src_common.Workflow.md)

#### Defined in

[openapi/api/models/Workflow.ts:230](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L230)

## Properties

### correlationId

• `Optional` **correlationId**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:31](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L31)

___

### createTime

• `Optional` **createTime**: `number`

#### Defined in

[openapi/api/models/Workflow.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L19)

___

### createdBy

• `Optional` **createdBy**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L21)

___

### endTime

• `Optional` **endTime**: `number`

#### Defined in

[openapi/api/models/Workflow.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L24)

___

### event

• `Optional` **event**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:34](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L34)

___

### externalInputPayloadStoragePath

• `Optional` **externalInputPayloadStoragePath**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:38](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L38)

___

### externalOutputPayloadStoragePath

• `Optional` **externalOutputPayloadStoragePath**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:39](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L39)

___

### failedReferenceTaskNames

• `Optional` **failedReferenceTaskNames**: `Set`\<`string`\>

#### Defined in

[openapi/api/models/Workflow.ts:36](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L36)

___

### failedTaskNames

• `Optional` **failedTaskNames**: `Set`\<`string`\>

#### Defined in

[openapi/api/models/Workflow.ts:43](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L43)

___

### input

• `Optional` **input**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/Workflow.ts:29](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L29)

___

### lastRetriedTime

• `Optional` **lastRetriedTime**: `number`

#### Defined in

[openapi/api/models/Workflow.ts:42](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L42)

___

### output

• `Optional` **output**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/Workflow.ts:30](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L30)

___

### ownerApp

• `Optional` **ownerApp**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L18)

___

### parentWorkflowId

• `Optional` **parentWorkflowId**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L26)

___

### parentWorkflowTaskId

• `Optional` **parentWorkflowTaskId**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:27](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L27)

___

### priority

• `Optional` **priority**: `number`

#### Defined in

[openapi/api/models/Workflow.ts:40](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L40)

___

### reRunFromWorkflowId

• `Optional` **reRunFromWorkflowId**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:32](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L32)

___

### reasonForIncompletion

• `Optional` **reasonForIncompletion**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:33](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L33)

___

### startTime

• `Optional` **startTime**: `number`

#### Defined in

[openapi/api/models/Workflow.ts:45](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L45)

___

### status

• `Optional` **status**: [`WorkflowStatusEnum`](../enums/openapi_api.WorkflowStatusEnum.md)

#### Defined in

[openapi/api/models/Workflow.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L23)

___

### taskToDomain

• `Optional` **taskToDomain**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[openapi/api/models/Workflow.ts:35](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L35)

___

### tasks

• `Optional` **tasks**: [`Task`](src_common.Task.md)[]

#### Defined in

[openapi/api/models/Workflow.ts:28](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L28)

___

### updateTime

• `Optional` **updateTime**: `number`

#### Defined in

[openapi/api/models/Workflow.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L20)

___

### updatedBy

• `Optional` **updatedBy**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L22)

___

### variables

• `Optional` **variables**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/Workflow.ts:41](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L41)

___

### workflowDefinition

• `Optional` **workflowDefinition**: [`WorkflowDef`](src_common.WorkflowDef.md)

#### Defined in

[openapi/api/models/Workflow.ts:37](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L37)

___

### workflowId

• `Optional` **workflowId**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:25](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L25)

___

### workflowName

• `Optional` **workflowName**: `string`

#### Defined in

[openapi/api/models/Workflow.ts:44](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L44)

___

### workflowVersion

• `Optional` **workflowVersion**: `number`

#### Defined in

[openapi/api/models/Workflow.ts:46](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L46)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/Workflow.ts:50](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L50)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/Workflow.ts:48](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L48)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/Workflow.ts:226](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/Workflow.ts#L226)
