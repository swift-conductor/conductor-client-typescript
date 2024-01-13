[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / WorkflowTestRequest

# Class: WorkflowTestRequest

[src/common](../modules/src_common.md).WorkflowTestRequest

## Table of contents

### Constructors

- [constructor](src_common.WorkflowTestRequest.md#constructor)

### Properties

- [correlationId](src_common.WorkflowTestRequest.md#correlationid)
- [externalInputPayloadStoragePath](src_common.WorkflowTestRequest.md#externalinputpayloadstoragepath)
- [input](src_common.WorkflowTestRequest.md#input)
- [name](src_common.WorkflowTestRequest.md#name)
- [priority](src_common.WorkflowTestRequest.md#priority)
- [subWorkflowTestRequest](src_common.WorkflowTestRequest.md#subworkflowtestrequest)
- [taskRefToMockOutput](src_common.WorkflowTestRequest.md#taskreftomockoutput)
- [taskToDomain](src_common.WorkflowTestRequest.md#tasktodomain)
- [version](src_common.WorkflowTestRequest.md#version)
- [workflowDef](src_common.WorkflowTestRequest.md#workflowdef)
- [attributeTypeMap](src_common.WorkflowTestRequest.md#attributetypemap)
- [discriminator](src_common.WorkflowTestRequest.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.WorkflowTestRequest.md#getattributetypemap)

## Constructors

### constructor

• **new WorkflowTestRequest**(): [`WorkflowTestRequest`](src_common.WorkflowTestRequest.md)

#### Returns

[`WorkflowTestRequest`](src_common.WorkflowTestRequest.md)

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:97](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L97)

## Properties

### correlationId

• `Optional` **correlationId**: `string`

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L20)

___

### externalInputPayloadStoragePath

• `Optional` **externalInputPayloadStoragePath**: `string`

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L24)

___

### input

• `Optional` **input**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L21)

___

### name

• **name**: `string`

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L18)

___

### priority

• `Optional` **priority**: `number`

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:25](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L25)

___

### subWorkflowTestRequest

• `Optional` **subWorkflowTestRequest**: `Object`

#### Index signature

▪ [key: `string`]: [`WorkflowTestRequest`](src_common.WorkflowTestRequest.md)

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:27](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L27)

___

### taskRefToMockOutput

• `Optional` **taskRefToMockOutput**: `Object`

#### Index signature

▪ [key: `string`]: [`TaskMock`](openapi_api.TaskMock.md)[]

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L26)

___

### taskToDomain

• `Optional` **taskToDomain**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L22)

___

### version

• `Optional` **version**: `number`

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L19)

___

### workflowDef

• `Optional` **workflowDef**: [`WorkflowDef`](src_common.WorkflowDef.md)

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L23)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:31](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L31)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:29](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L29)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/WorkflowTestRequest.ts:93](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/WorkflowTestRequest.ts#L93)
