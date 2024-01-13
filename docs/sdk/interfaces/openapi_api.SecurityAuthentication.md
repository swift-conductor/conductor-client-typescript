[@swiftconductor/conductor-client-typescript](../README.md) / [Modules](../modules.md) / [openapi/api](../modules/openapi_api.md) / SecurityAuthentication

# Interface: SecurityAuthentication

[openapi/api](../modules/openapi_api.md).SecurityAuthentication

Interface authentication schemes.

## Table of contents

### Methods

- [applySecurityAuthentication](openapi_api.SecurityAuthentication.md#applysecurityauthentication)
- [getName](openapi_api.SecurityAuthentication.md#getname)

## Methods

### applySecurityAuthentication

▸ **applySecurityAuthentication**(`context`): `void` \| `Promise`\<`void`\>

Applies the authentication scheme to the request context

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestContext`](../classes/openapi_api.RequestContext.md) |

#### Returns

`void` \| `Promise`\<`void`\>

**`Params`**

context the request context which should use this authentication scheme

#### Defined in

[openapi/api/auth/auth.ts:17](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/auth/auth.ts#L17)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

[openapi/api/auth/auth.ts:10](https://github.com/swift-conductor/conductor-client-typescript/blob/9866b7c/openapi/api/auth/auth.ts#L10)
