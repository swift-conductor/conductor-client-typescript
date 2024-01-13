[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / Middleware

# Interface: Middleware

[openapi/api](../modules/openapi_api.md).Middleware

Defines the contract for a middleware intercepting requests before
they are sent (but after the RequestContext was created)
and before the ResponseContext is unwrapped.

## Table of contents

### Methods

- [post](openapi_api.Middleware.md#post)
- [pre](openapi_api.Middleware.md#pre)

## Methods

### post

▸ **post**(`context`): `Promise`\<[`ResponseContext`](../classes/openapi_api.ResponseContext.md)\>

Modifies the returned response before it is deserialized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`ResponseContext`](../classes/openapi_api.ResponseContext.md) | ResponseContext of a sent request |

#### Returns

`Promise`\<[`ResponseContext`](../classes/openapi_api.ResponseContext.md)\>

an observable of the modified response context

#### Defined in

[openapi/api/middleware.ts:65](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/middleware.ts#L65)

___

### pre

▸ **pre**(`context`): `Promise`\<[`RequestContext`](../classes/openapi_api.RequestContext.md)\>

Modifies the request before the request is sent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`RequestContext`](../classes/openapi_api.RequestContext.md) | RequestContext of a request which is about to be sent to the server |

#### Returns

`Promise`\<[`RequestContext`](../classes/openapi_api.RequestContext.md)\>

an observable of the updated request context

#### Defined in

[openapi/api/middleware.ts:58](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/middleware.ts#L58)
