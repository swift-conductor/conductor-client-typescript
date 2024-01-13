[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / TaskMock

# Class: TaskMock

[openapi/api](../modules/openapi_api.md).TaskMock

## Table of contents

### Constructors

- [constructor](openapi_api.TaskMock.md#constructor)

### Properties

- [executionTime](openapi_api.TaskMock.md#executiontime)
- [output](openapi_api.TaskMock.md#output)
- [queueWaitTime](openapi_api.TaskMock.md#queuewaittime)
- [status](openapi_api.TaskMock.md#status)
- [attributeTypeMap](openapi_api.TaskMock.md#attributetypemap)
- [discriminator](openapi_api.TaskMock.md#discriminator)

### Methods

- [getAttributeTypeMap](openapi_api.TaskMock.md#getattributetypemap)

## Constructors

### constructor

• **new TaskMock**(): [`TaskMock`](openapi_api.TaskMock.md)

#### Returns

[`TaskMock`](openapi_api.TaskMock.md)

#### Defined in

[openapi/api/models/TaskMock.ts:53](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskMock.ts#L53)

## Properties

### executionTime

• `Optional` **executionTime**: `number`

#### Defined in

[openapi/api/models/TaskMock.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskMock.ts#L18)

___

### output

• `Optional` **output**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[openapi/api/models/TaskMock.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskMock.ts#L17)

___

### queueWaitTime

• `Optional` **queueWaitTime**: `number`

#### Defined in

[openapi/api/models/TaskMock.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskMock.ts#L19)

___

### status

• `Optional` **status**: [`TaskMockStatusEnum`](../enums/openapi_api.TaskMockStatusEnum.md)

#### Defined in

[openapi/api/models/TaskMock.ts:16](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskMock.ts#L16)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/TaskMock.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskMock.ts#L23)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/TaskMock.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskMock.ts#L21)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/TaskMock.ts:49](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/models/TaskMock.ts#L49)
