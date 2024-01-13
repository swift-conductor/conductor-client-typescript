[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / WorkflowSummary

# Class: WorkflowSummary

[src/common](../modules/src_common.md).WorkflowSummary

## Table of contents

### Constructors

- [constructor](src_common.WorkflowSummary.md#constructor)

### Properties

- [correlationId](src_common.WorkflowSummary.md#correlationid)
- [endTime](src_common.WorkflowSummary.md#endtime)
- [event](src_common.WorkflowSummary.md#event)
- [executionTime](src_common.WorkflowSummary.md#executiontime)
- [externalInputPayloadStoragePath](src_common.WorkflowSummary.md#externalinputpayloadstoragepath)
- [externalOutputPayloadStoragePath](src_common.WorkflowSummary.md#externaloutputpayloadstoragepath)
- [failedReferenceTaskNames](src_common.WorkflowSummary.md#failedreferencetasknames)
- [failedTaskNames](src_common.WorkflowSummary.md#failedtasknames)
- [input](src_common.WorkflowSummary.md#input)
- [inputSize](src_common.WorkflowSummary.md#inputsize)
- [output](src_common.WorkflowSummary.md#output)
- [outputSize](src_common.WorkflowSummary.md#outputsize)
- [priority](src_common.WorkflowSummary.md#priority)
- [reasonForIncompletion](src_common.WorkflowSummary.md#reasonforincompletion)
- [startTime](src_common.WorkflowSummary.md#starttime)
- [status](src_common.WorkflowSummary.md#status)
- [updateTime](src_common.WorkflowSummary.md#updatetime)
- [version](src_common.WorkflowSummary.md#version)
- [workflowId](src_common.WorkflowSummary.md#workflowid)
- [workflowType](src_common.WorkflowSummary.md#workflowtype)
- [attributeTypeMap](src_common.WorkflowSummary.md#attributetypemap)
- [discriminator](src_common.WorkflowSummary.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.WorkflowSummary.md#getattributetypemap)

## Constructors

### constructor

• **new WorkflowSummary**(): [`WorkflowSummary`](src_common.WorkflowSummary.md)

#### Returns

[`WorkflowSummary`](src_common.WorkflowSummary.md)

#### Defined in

[openapi/api/models/WorkflowSummary.ts:165](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L165)

## Properties

### correlationId

• `Optional` **correlationId**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L19)

___

### endTime

• `Optional` **endTime**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L22)

___

### event

• `Optional` **event**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:28](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L28)

___

### executionTime

• `Optional` **executionTime**: `number`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:27](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L27)

___

### externalInputPayloadStoragePath

• `Optional` **externalInputPayloadStoragePath**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:30](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L30)

___

### externalOutputPayloadStoragePath

• `Optional` **externalOutputPayloadStoragePath**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:31](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L31)

___

### failedReferenceTaskNames

• `Optional` **failedReferenceTaskNames**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:29](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L29)

___

### failedTaskNames

• `Optional` **failedTaskNames**: `Set`\<`string`\>

#### Defined in

[openapi/api/models/WorkflowSummary.ts:33](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L33)

___

### input

• `Optional` **input**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L24)

___

### inputSize

• `Optional` **inputSize**: `number`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:34](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L34)

___

### output

• `Optional` **output**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:25](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L25)

___

### outputSize

• `Optional` **outputSize**: `number`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:35](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L35)

___

### priority

• `Optional` **priority**: `number`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:32](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L32)

___

### reasonForIncompletion

• `Optional` **reasonForIncompletion**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L26)

___

### startTime

• `Optional` **startTime**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L20)

___

### status

• `Optional` **status**: [`WorkflowSummaryStatusEnum`](../enums/openapi_api.WorkflowSummaryStatusEnum.md)

#### Defined in

[openapi/api/models/WorkflowSummary.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L23)

___

### updateTime

• `Optional` **updateTime**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L21)

___

### version

• `Optional` **version**: `number`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L17)

___

### workflowId

• `Optional` **workflowId**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L18)

___

### workflowType

• `Optional` **workflowType**: `string`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:16](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L16)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/WorkflowSummary.ts:39](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L39)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/WorkflowSummary.ts:37](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L37)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/WorkflowSummary.ts:161](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowSummary.ts#L161)
