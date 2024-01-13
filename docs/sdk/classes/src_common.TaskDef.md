[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [src/common](../modules/src_common.md) / TaskDef

# Class: TaskDef

[src/common](../modules/src_common.md).TaskDef

## Table of contents

### Constructors

- [constructor](src_common.TaskDef.md#constructor)

### Properties

- [accessPolicy](src_common.TaskDef.md#accesspolicy)
- [backoffScaleFactor](src_common.TaskDef.md#backoffscalefactor)
- [concurrentExecLimit](src_common.TaskDef.md#concurrentexeclimit)
- [createTime](src_common.TaskDef.md#createtime)
- [createdBy](src_common.TaskDef.md#createdby)
- [description](src_common.TaskDef.md#description)
- [executionNameSpace](src_common.TaskDef.md#executionnamespace)
- [inputKeys](src_common.TaskDef.md#inputkeys)
- [inputTemplate](src_common.TaskDef.md#inputtemplate)
- [isolationGroupId](src_common.TaskDef.md#isolationgroupid)
- [name](src_common.TaskDef.md#name)
- [outputKeys](src_common.TaskDef.md#outputkeys)
- [ownerApp](src_common.TaskDef.md#ownerapp)
- [ownerEmail](src_common.TaskDef.md#owneremail)
- [pollTimeoutSeconds](src_common.TaskDef.md#polltimeoutseconds)
- [rateLimitFrequencyInSeconds](src_common.TaskDef.md#ratelimitfrequencyinseconds)
- [rateLimitPerFrequency](src_common.TaskDef.md#ratelimitperfrequency)
- [responseTimeoutSeconds](src_common.TaskDef.md#responsetimeoutseconds)
- [retryCount](src_common.TaskDef.md#retrycount)
- [retryDelaySeconds](src_common.TaskDef.md#retrydelayseconds)
- [retryLogic](src_common.TaskDef.md#retrylogic)
- [timeoutPolicy](src_common.TaskDef.md#timeoutpolicy)
- [timeoutSeconds](src_common.TaskDef.md#timeoutseconds)
- [updateTime](src_common.TaskDef.md#updatetime)
- [updatedBy](src_common.TaskDef.md#updatedby)
- [attributeTypeMap](src_common.TaskDef.md#attributetypemap)
- [discriminator](src_common.TaskDef.md#discriminator)

### Methods

- [getAttributeTypeMap](src_common.TaskDef.md#getattributetypemap)

## Constructors

### constructor

• **new TaskDef**(): [`TaskDef`](src_common.TaskDef.md)

#### Returns

[`TaskDef`](src_common.TaskDef.md)

#### Defined in

[openapi/api/models/TaskDef.ts:200](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L200)

## Properties

### accessPolicy

• `Optional` **accessPolicy**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[openapi/api/models/TaskDef.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L21)

___

### backoffScaleFactor

• `Optional` **backoffScaleFactor**: `number`

#### Defined in

[openapi/api/models/TaskDef.ts:40](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L40)

___

### concurrentExecLimit

• `Optional` **concurrentExecLimit**: `number`

#### Defined in

[openapi/api/models/TaskDef.ts:32](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L32)

___

### createTime

• `Optional` **createTime**: `number`

#### Defined in

[openapi/api/models/TaskDef.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L17)

___

### createdBy

• `Optional` **createdBy**: `string`

#### Defined in

[openapi/api/models/TaskDef.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L19)

___

### description

• `Optional` **description**: `string`

#### Defined in

[openapi/api/models/TaskDef.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L23)

___

### executionNameSpace

• `Optional` **executionNameSpace**: `string`

#### Defined in

[openapi/api/models/TaskDef.ts:37](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L37)

___

### inputKeys

• `Optional` **inputKeys**: `string`[]

#### Defined in

[openapi/api/models/TaskDef.ts:26](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L26)

___

### inputTemplate

• `Optional` **inputTemplate**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/TaskDef.ts:33](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L33)

___

### isolationGroupId

• `Optional` **isolationGroupId**: `string`

#### Defined in

[openapi/api/models/TaskDef.ts:36](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L36)

___

### name

• **name**: `string`

#### Defined in

[openapi/api/models/TaskDef.ts:22](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L22)

___

### outputKeys

• `Optional` **outputKeys**: `string`[]

#### Defined in

[openapi/api/models/TaskDef.ts:27](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L27)

___

### ownerApp

• `Optional` **ownerApp**: `string`

#### Defined in

[openapi/api/models/TaskDef.ts:16](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L16)

___

### ownerEmail

• `Optional` **ownerEmail**: `string`

#### Defined in

[openapi/api/models/TaskDef.ts:38](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L38)

___

### pollTimeoutSeconds

• `Optional` **pollTimeoutSeconds**: `number`

#### Defined in

[openapi/api/models/TaskDef.ts:39](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L39)

___

### rateLimitFrequencyInSeconds

• `Optional` **rateLimitFrequencyInSeconds**: `number`

#### Defined in

[openapi/api/models/TaskDef.ts:35](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L35)

___

### rateLimitPerFrequency

• `Optional` **rateLimitPerFrequency**: `number`

#### Defined in

[openapi/api/models/TaskDef.ts:34](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L34)

___

### responseTimeoutSeconds

• `Optional` **responseTimeoutSeconds**: `number`

#### Defined in

[openapi/api/models/TaskDef.ts:31](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L31)

___

### retryCount

• `Optional` **retryCount**: `number`

#### Defined in

[openapi/api/models/TaskDef.ts:24](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L24)

___

### retryDelaySeconds

• `Optional` **retryDelaySeconds**: `number`

#### Defined in

[openapi/api/models/TaskDef.ts:30](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L30)

___

### retryLogic

• `Optional` **retryLogic**: [`TaskDefRetryLogicEnum`](../enums/openapi_api.TaskDefRetryLogicEnum.md)

#### Defined in

[openapi/api/models/TaskDef.ts:29](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L29)

___

### timeoutPolicy

• `Optional` **timeoutPolicy**: [`TaskDefTimeoutPolicyEnum`](../enums/openapi_api.TaskDefTimeoutPolicyEnum.md)

#### Defined in

[openapi/api/models/TaskDef.ts:28](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L28)

___

### timeoutSeconds

• **timeoutSeconds**: `number`

#### Defined in

[openapi/api/models/TaskDef.ts:25](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L25)

___

### updateTime

• `Optional` **updateTime**: `number`

#### Defined in

[openapi/api/models/TaskDef.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L18)

___

### updatedBy

• `Optional` **updatedBy**: `string`

#### Defined in

[openapi/api/models/TaskDef.ts:20](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L20)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/TaskDef.ts:44](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L44)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/TaskDef.ts:42](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L42)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/TaskDef.ts:196](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskDef.ts#L196)
