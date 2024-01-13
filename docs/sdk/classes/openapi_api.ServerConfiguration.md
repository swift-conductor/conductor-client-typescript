[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / ServerConfiguration

# Class: ServerConfiguration\<T\>

[openapi/api](../modules/openapi_api.md).ServerConfiguration

Represents the configuration of a server including its
url template and variable configuration based on the url.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

## Implements

- [`BaseServerConfiguration`](../interfaces/openapi_api.BaseServerConfiguration.md)

## Table of contents

### Constructors

- [constructor](openapi_api.ServerConfiguration.md#constructor)

### Properties

- [url](openapi_api.ServerConfiguration.md#url)
- [variableConfiguration](openapi_api.ServerConfiguration.md#variableconfiguration)

### Methods

- [getConfiguration](openapi_api.ServerConfiguration.md#getconfiguration)
- [getUrl](openapi_api.ServerConfiguration.md#geturl)
- [makeRequestContext](openapi_api.ServerConfiguration.md#makerequestcontext)
- [setVariables](openapi_api.ServerConfiguration.md#setvariables)

## Constructors

### constructor

• **new ServerConfiguration**\<`T`\>(`url`, `variableConfiguration`): [`ServerConfiguration`](openapi_api.ServerConfiguration.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `variableConfiguration` | `T` |

#### Returns

[`ServerConfiguration`](openapi_api.ServerConfiguration.md)\<`T`\>

#### Defined in

[openapi/api/servers.ts:14](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/servers.ts#L14)

## Properties

### url

• `Private` **url**: `string`

#### Defined in

[openapi/api/servers.ts:14](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/servers.ts#L14)

___

### variableConfiguration

• `Private` **variableConfiguration**: `T`

#### Defined in

[openapi/api/servers.ts:14](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/servers.ts#L14)

## Methods

### getConfiguration

▸ **getConfiguration**(): `T`

#### Returns

`T`

#### Defined in

[openapi/api/servers.ts:27](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/servers.ts#L27)

___

### getUrl

▸ **getUrl**(): `string`

#### Returns

`string`

#### Defined in

[openapi/api/servers.ts:31](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/servers.ts#L31)

___

### makeRequestContext

▸ **makeRequestContext**(`endpoint`, `httpMethod`): [`RequestContext`](openapi_api.RequestContext.md)

Creates a new request context for this server using the url with variables
replaced with their respective values and the endpoint of the request appended.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` | the endpoint to be queried on the server |
| `httpMethod` | [`HttpMethod`](../enums/openapi_api.HttpMethod.md) | httpMethod to be used |

#### Returns

[`RequestContext`](openapi_api.RequestContext.md)

#### Implementation of

[BaseServerConfiguration](../interfaces/openapi_api.BaseServerConfiguration.md).[makeRequestContext](../interfaces/openapi_api.BaseServerConfiguration.md#makerequestcontext)

#### Defined in

[openapi/api/servers.ts:48](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/servers.ts#L48)

___

### setVariables

▸ **setVariables**(`variableConfiguration`): `void`

Sets the value of the variables of this server. Variables are included in 
the `url` of this ServerConfiguration in the form `{variableName}`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variableConfiguration` | `Partial`\<`T`\> | a partial variable configuration for the variables contained in the url |

#### Returns

`void`

#### Defined in

[openapi/api/servers.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/servers.ts#L23)
