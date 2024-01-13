[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / HealthCheckResourceApi

# Class: HealthCheckResourceApi

[openapi/api](../modules/openapi_api.md).HealthCheckResourceApi

## Table of contents

### Constructors

- [constructor](openapi_api.HealthCheckResourceApi.md#constructor)

### Properties

- [api](openapi_api.HealthCheckResourceApi.md#api)

### Methods

- [doCheck](openapi_api.HealthCheckResourceApi.md#docheck)
- [doCheckWithHttpInfo](openapi_api.HealthCheckResourceApi.md#docheckwithhttpinfo)

## Constructors

### constructor

• **new HealthCheckResourceApi**(`configuration`, `requestFactory?`, `responseProcessor?`): [`HealthCheckResourceApi`](openapi_api.HealthCheckResourceApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |
| `requestFactory?` | `HealthCheckResourceApiRequestFactory` |
| `responseProcessor?` | `HealthCheckResourceApiResponseProcessor` |

#### Returns

[`HealthCheckResourceApi`](openapi_api.HealthCheckResourceApi.md)

#### Defined in

[openapi/api/types/PromiseAPI.ts:258](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L258)

## Properties

### api

• `Private` **api**: `ObservableHealthCheckResourceApi`

#### Defined in

[openapi/api/types/PromiseAPI.ts:256](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L256)

## Methods

### doCheck

▸ **doCheck**(`_options?`): `Promise`\<[`HealthCheckStatus`](openapi_api.HealthCheckStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HealthCheckStatus`](openapi_api.HealthCheckStatus.md)\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:275](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L275)

___

### doCheckWithHttpInfo

▸ **doCheckWithHttpInfo**(`_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`HealthCheckStatus`](openapi_api.HealthCheckStatus.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`HealthCheckStatus`](openapi_api.HealthCheckStatus.md)\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:268](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/types/PromiseAPI.ts#L268)
