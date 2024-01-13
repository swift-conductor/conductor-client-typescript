[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / EventResourceApi

# Class: EventResourceApi

[openapi/api](../modules/openapi_api.md).EventResourceApi

## Table of contents

### Constructors

- [constructor](openapi_api.EventResourceApi.md#constructor)

### Properties

- [api](openapi_api.EventResourceApi.md#api)

### Methods

- [addEventHandler](openapi_api.EventResourceApi.md#addeventhandler)
- [addEventHandlerWithHttpInfo](openapi_api.EventResourceApi.md#addeventhandlerwithhttpinfo)
- [getEventHandlers](openapi_api.EventResourceApi.md#geteventhandlers)
- [getEventHandlersForEvent](openapi_api.EventResourceApi.md#geteventhandlersforevent)
- [getEventHandlersForEventWithHttpInfo](openapi_api.EventResourceApi.md#geteventhandlersforeventwithhttpinfo)
- [getEventHandlersWithHttpInfo](openapi_api.EventResourceApi.md#geteventhandlerswithhttpinfo)
- [removeEventHandlerStatus](openapi_api.EventResourceApi.md#removeeventhandlerstatus)
- [removeEventHandlerStatusWithHttpInfo](openapi_api.EventResourceApi.md#removeeventhandlerstatuswithhttpinfo)
- [updateEventHandler](openapi_api.EventResourceApi.md#updateeventhandler)
- [updateEventHandlerWithHttpInfo](openapi_api.EventResourceApi.md#updateeventhandlerwithhttpinfo)

## Constructors

### constructor

• **new EventResourceApi**(`configuration`, `requestFactory?`, `responseProcessor?`): [`EventResourceApi`](openapi_api.EventResourceApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |
| `requestFactory?` | `EventResourceApiRequestFactory` |
| `responseProcessor?` | `EventResourceApiResponseProcessor` |

#### Returns

[`EventResourceApi`](openapi_api.EventResourceApi.md)

#### Defined in

[openapi/api/types/PromiseAPI.ts:149](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L149)

## Properties

### api

• `Private` **api**: `ObservableEventResourceApi`

#### Defined in

[openapi/api/types/PromiseAPI.ts:147](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L147)

## Methods

### addEventHandler

▸ **addEventHandler**(`eventHandler`, `_options?`): `Promise`\<`void`\>

Add a new event handler.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](src_common.EventHandler.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:170](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L170)

___

### addEventHandlerWithHttpInfo

▸ **addEventHandlerWithHttpInfo**(`eventHandler`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Add a new event handler.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](src_common.EventHandler.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:161](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L161)

___

### getEventHandlers

▸ **getEventHandlers**(`_options?`): `Promise`\<[`EventHandler`](src_common.EventHandler.md)[]\>

Get all the event handlers

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`EventHandler`](src_common.EventHandler.md)[]\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:186](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L186)

___

### getEventHandlersForEvent

▸ **getEventHandlersForEvent**(`event`, `activeOnly?`, `_options?`): `Promise`\<[`EventHandler`](src_common.EventHandler.md)[]\>

Get event handlers for a given event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `activeOnly?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`EventHandler`](src_common.EventHandler.md)[]\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:206](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L206)

___

### getEventHandlersForEventWithHttpInfo

▸ **getEventHandlersForEventWithHttpInfo**(`event`, `activeOnly?`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`EventHandler`](src_common.EventHandler.md)[]\>\>

Get event handlers for a given event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `activeOnly?` | `boolean` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`EventHandler`](src_common.EventHandler.md)[]\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:196](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L196)

___

### getEventHandlersWithHttpInfo

▸ **getEventHandlersWithHttpInfo**(`_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`EventHandler`](src_common.EventHandler.md)[]\>\>

Get all the event handlers

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<[`EventHandler`](src_common.EventHandler.md)[]\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:178](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L178)

___

### removeEventHandlerStatus

▸ **removeEventHandlerStatus**(`name`, `_options?`): `Promise`\<`void`\>

Remove an event handler

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:224](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L224)

___

### removeEventHandlerStatusWithHttpInfo

▸ **removeEventHandlerStatusWithHttpInfo**(`name`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Remove an event handler

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:215](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L215)

___

### updateEventHandler

▸ **updateEventHandler**(`eventHandler`, `_options?`): `Promise`\<`void`\>

Update an existing event handler.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](src_common.EventHandler.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:242](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L242)

___

### updateEventHandlerWithHttpInfo

▸ **updateEventHandlerWithHttpInfo**(`eventHandler`, `_options?`): `Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

Update an existing event handler.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](src_common.EventHandler.md) |
| `_options?` | [`Configuration`](../interfaces/openapi_api.Configuration.md) |

#### Returns

`Promise`\<[`HttpInfo`](openapi_api.HttpInfo.md)\<`void`\>\>

#### Defined in

[openapi/api/types/PromiseAPI.ts:233](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/types/PromiseAPI.ts#L233)
