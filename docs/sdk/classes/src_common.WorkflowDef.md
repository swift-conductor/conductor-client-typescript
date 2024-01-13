[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / WorkflowDef

# Class: WorkflowDef

[src/common](../modules/src_common.md).WorkflowDef

## Table of contents

### Constructors

- [constructor](src_common.WorkflowDef.md#constructor)

### Properties

- [accessPolicy](src_common.WorkflowDef.md#accesspolicy)
- [createTime](src_common.WorkflowDef.md#createtime)
- [createdBy](src_common.WorkflowDef.md#createdby)
- [description](src_common.WorkflowDef.md#description)
- [failureWorkflow](src_common.WorkflowDef.md#failureworkflow)
- [inputParameters](src_common.WorkflowDef.md#inputparameters)
- [inputTemplate](src_common.WorkflowDef.md#inputtemplate)
- [name](src_common.WorkflowDef.md#name)
- [outputParameters](src_common.WorkflowDef.md#outputparameters)
- [ownerApp](src_common.WorkflowDef.md#ownerapp)
- [ownerEmail](src_common.WorkflowDef.md#owneremail)
- [restartable](src_common.WorkflowDef.md#restartable)
- [schemaVersion](src_common.WorkflowDef.md#schemaversion)
- [tasks](src_common.WorkflowDef.md#tasks)
- [timeoutPolicy](src_common.WorkflowDef.md#timeoutpolicy)
- [timeoutSeconds](src_common.WorkflowDef.md#timeoutseconds)
- [updateTime](src_common.WorkflowDef.md#updatetime)
- [updatedBy](src_common.WorkflowDef.md#updatedby)
- [variables](src_common.WorkflowDef.md#variables)
- [version](src_common.WorkflowDef.md#version)
- [workflowStatusListenerEnabled](src_common.WorkflowDef.md#workflowstatuslistenerenabled)
- [attributeTypeMap](src_common.WorkflowDef.md#attributetypemap)
- [discriminator](src_common.WorkflowDef.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.WorkflowDef.md#getattributetypemap)

## Constructors

### constructor

• **new WorkflowDef**(): [`WorkflowDef`](src_common.WorkflowDef.md)

#### Returns

[`WorkflowDef`](src_common.WorkflowDef.md)

#### Defined in

[openapi/api/models/WorkflowDef.ts:173](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L173)

## Properties

### accessPolicy

• `Optional` **accessPolicy**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[openapi/api/models/WorkflowDef.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L22)

___

### createTime

• `Optional` **createTime**: `number`

#### Defined in

[openapi/api/models/WorkflowDef.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L18)

___

### createdBy

• `Optional` **createdBy**: `string`

#### Defined in

[openapi/api/models/WorkflowDef.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L20)

___

### description

• `Optional` **description**: `string`

#### Defined in

[openapi/api/models/WorkflowDef.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L24)

___

### failureWorkflow

• `Optional` **failureWorkflow**: `string`

#### Defined in

[openapi/api/models/WorkflowDef.ts:29](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L29)

___

### inputParameters

• `Optional` **inputParameters**: `string`[]

#### Defined in

[openapi/api/models/WorkflowDef.ts:27](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L27)

___

### inputTemplate

• `Optional` **inputTemplate**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/WorkflowDef.ts:37](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L37)

___

### name

• **name**: `string`

#### Defined in

[openapi/api/models/WorkflowDef.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L23)

___

### outputParameters

• `Optional` **outputParameters**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/WorkflowDef.ts:28](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L28)

___

### ownerApp

• `Optional` **ownerApp**: `string`

#### Defined in

[openapi/api/models/WorkflowDef.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L17)

___

### ownerEmail

• `Optional` **ownerEmail**: `string`

#### Defined in

[openapi/api/models/WorkflowDef.ts:33](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L33)

___

### restartable

• `Optional` **restartable**: `boolean`

#### Defined in

[openapi/api/models/WorkflowDef.ts:31](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L31)

___

### schemaVersion

• `Optional` **schemaVersion**: `number`

#### Defined in

[openapi/api/models/WorkflowDef.ts:30](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L30)

___

### tasks

• **tasks**: [`WorkflowTask`](src_common.WorkflowTask.md)[]

#### Defined in

[openapi/api/models/WorkflowDef.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L26)

___

### timeoutPolicy

• `Optional` **timeoutPolicy**: [`WorkflowDefTimeoutPolicyEnum`](../enums/openapi_api.WorkflowDefTimeoutPolicyEnum.md)

#### Defined in

[openapi/api/models/WorkflowDef.ts:34](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L34)

___

### timeoutSeconds

• **timeoutSeconds**: `number`

#### Defined in

[openapi/api/models/WorkflowDef.ts:35](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L35)

___

### updateTime

• `Optional` **updateTime**: `number`

#### Defined in

[openapi/api/models/WorkflowDef.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L19)

___

### updatedBy

• `Optional` **updatedBy**: `string`

#### Defined in

[openapi/api/models/WorkflowDef.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L21)

___

### variables

• `Optional` **variables**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/WorkflowDef.ts:36](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L36)

___

### version

• `Optional` **version**: `number`

#### Defined in

[openapi/api/models/WorkflowDef.ts:25](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L25)

___

### workflowStatusListenerEnabled

• `Optional` **workflowStatusListenerEnabled**: `boolean`

#### Defined in

[openapi/api/models/WorkflowDef.ts:32](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L32)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/WorkflowDef.ts:41](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L41)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/WorkflowDef.ts:39](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L39)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/WorkflowDef.ts:169](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/WorkflowDef.ts#L169)
