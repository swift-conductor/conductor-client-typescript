[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / HealthCheckStatus

# Class: HealthCheckStatus

[openapi/api](../modules/openapi_api.md).HealthCheckStatus

## Table of contents

### Constructors

- [constructor](openapi_api.HealthCheckStatus.md#constructor)

### Properties

- [healthResults](openapi_api.HealthCheckStatus.md#healthresults)
- [healthy](openapi_api.HealthCheckStatus.md#healthy)
- [suppressedHealthResults](openapi_api.HealthCheckStatus.md#suppressedhealthresults)
- [attributeTypeMap](openapi_api.HealthCheckStatus.md#attributetypemap)
- [discriminator](openapi_api.HealthCheckStatus.md#discriminator)

### Methods

- [getAttributeTypeMap](openapi_api.HealthCheckStatus.md#getattributetypemap)

## Constructors

### constructor

• **new HealthCheckStatus**(): [`HealthCheckStatus`](openapi_api.HealthCheckStatus.md)

#### Returns

[`HealthCheckStatus`](openapi_api.HealthCheckStatus.md)

#### Defined in

[openapi/api/models/HealthCheckStatus.ts:47](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/HealthCheckStatus.ts#L47)

## Properties

### healthResults

• `Optional` **healthResults**: [`Health`](openapi_api.Health.md)[]

#### Defined in

[openapi/api/models/HealthCheckStatus.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/HealthCheckStatus.ts#L17)

___

### healthy

• `Optional` **healthy**: `boolean`

#### Defined in

[openapi/api/models/HealthCheckStatus.ts:19](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/HealthCheckStatus.ts#L19)

___

### suppressedHealthResults

• `Optional` **suppressedHealthResults**: [`Health`](openapi_api.Health.md)[]

#### Defined in

[openapi/api/models/HealthCheckStatus.ts:18](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/HealthCheckStatus.ts#L18)

___

### attributeTypeMap

▪ `Static` `Readonly` **attributeTypeMap**: \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/HealthCheckStatus.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/HealthCheckStatus.ts#L23)

___

### discriminator

▪ `Static` `Readonly` **discriminator**: `undefined` \| `string` = `undefined`

#### Defined in

[openapi/api/models/HealthCheckStatus.ts:21](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/HealthCheckStatus.ts#L21)

## Methods

### getAttributeTypeMap

▸ **getAttributeTypeMap**(): \{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `baseName`: `string` ; `format`: `string` ; `name`: `string` ; `type`: `string`  }[]

#### Defined in

[openapi/api/models/HealthCheckStatus.ts:43](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/models/HealthCheckStatus.ts#L43)
