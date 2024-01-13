[@swift-conductor/conductor-client](../README.md) / [Modules](../modules.md) / openapi/api

# Module: openapi/api

## Table of contents

### References

- [Action](openapi_api.md#action)
- [EventHandler](openapi_api.md#eventhandler)
- [ExternalStorageLocation](openapi_api.md#externalstoragelocation)
- [PollData](openapi_api.md#polldata)
- [RerunWorkflowRequest](openapi_api.md#rerunworkflowrequest)
- [SearchResultTask](openapi_api.md#searchresulttask)
- [SearchResultTaskSummary](openapi_api.md#searchresulttasksummary)
- [SearchResultWorkflow](openapi_api.md#searchresultworkflow)
- [SearchResultWorkflowSummary](openapi_api.md#searchresultworkflowsummary)
- [SkipTaskRequest](openapi_api.md#skiptaskrequest)
- [StartWorkflow](openapi_api.md#startworkflow)
- [StartWorkflowRequest](openapi_api.md#startworkflowrequest)
- [SubWorkflowParams](openapi_api.md#subworkflowparams)
- [Task](openapi_api.md#task)
- [TaskDef](openapi_api.md#taskdef)
- [TaskDetails](openapi_api.md#taskdetails)
- [TaskExecLog](openapi_api.md#taskexeclog)
- [TaskResult](openapi_api.md#taskresult)
- [TaskSummary](openapi_api.md#tasksummary)
- [Workflow](openapi_api.md#workflow)
- [WorkflowDef](openapi_api.md#workflowdef)
- [WorkflowSummary](openapi_api.md#workflowsummary)
- [WorkflowTask](openapi_api.md#workflowtask)
- [WorkflowTestRequest](openapi_api.md#workflowtestrequest)

### Enumerations

- [ActionActionEnum](../enums/openapi_api.ActionActionEnum.md)
- [HttpMethod](../enums/openapi_api.HttpMethod.md)
- [TaskDefRetryLogicEnum](../enums/openapi_api.TaskDefRetryLogicEnum.md)
- [TaskDefTimeoutPolicyEnum](../enums/openapi_api.TaskDefTimeoutPolicyEnum.md)
- [TaskMockStatusEnum](../enums/openapi_api.TaskMockStatusEnum.md)
- [TaskResultStatusEnum](../enums/openapi_api.TaskResultStatusEnum.md)
- [TaskStatusEnum](../enums/openapi_api.TaskStatusEnum.md)
- [TaskSummaryStatusEnum](../enums/openapi_api.TaskSummaryStatusEnum.md)
- [WorkflowDefTimeoutPolicyEnum](../enums/openapi_api.WorkflowDefTimeoutPolicyEnum.md)
- [WorkflowStatusEnum](../enums/openapi_api.WorkflowStatusEnum.md)
- [WorkflowSummaryStatusEnum](../enums/openapi_api.WorkflowSummaryStatusEnum.md)
- [WorkflowTaskWorkflowTaskTypeEnum](../enums/openapi_api.WorkflowTaskWorkflowTaskTypeEnum.md)

### Classes

- [AdminResourceApi](../classes/openapi_api.AdminResourceApi.md)
- [ApiException](../classes/openapi_api.ApiException.md)
- [BulkResponse](../classes/openapi_api.BulkResponse.md)
- [EventResourceApi](../classes/openapi_api.EventResourceApi.md)
- [Health](../classes/openapi_api.Health.md)
- [HealthCheckResourceApi](../classes/openapi_api.HealthCheckResourceApi.md)
- [HealthCheckStatus](../classes/openapi_api.HealthCheckStatus.md)
- [HttpException](../classes/openapi_api.HttpException.md)
- [HttpInfo](../classes/openapi_api.HttpInfo.md)
- [IsomorphicFetchHttpLibrary](../classes/openapi_api.IsomorphicFetchHttpLibrary.md)
- [MetadataResourceApi](../classes/openapi_api.MetadataResourceApi.md)
- [QueueAdminResourceApi](../classes/openapi_api.QueueAdminResourceApi.md)
- [RequestContext](../classes/openapi_api.RequestContext.md)
- [RequiredError](../classes/openapi_api.RequiredError.md)
- [ResponseContext](../classes/openapi_api.ResponseContext.md)
- [SelfDecodingBody](../classes/openapi_api.SelfDecodingBody.md)
- [ServerConfiguration](../classes/openapi_api.ServerConfiguration.md)
- [TaskMock](../classes/openapi_api.TaskMock.md)
- [TaskResourceApi](../classes/openapi_api.TaskResourceApi.md)
- [WorkflowBulkResourceApi](../classes/openapi_api.WorkflowBulkResourceApi.md)
- [WorkflowResourceApi](../classes/openapi_api.WorkflowResourceApi.md)

### Interfaces

- [BaseServerConfiguration](../interfaces/openapi_api.BaseServerConfiguration.md)
- [Configuration](../interfaces/openapi_api.Configuration.md)
- [HttpLibrary](../interfaces/openapi_api.HttpLibrary.md)
- [Middleware](../interfaces/openapi_api.Middleware.md)
- [PromiseHttpLibrary](../interfaces/openapi_api.PromiseHttpLibrary.md)
- [ResponseBody](../interfaces/openapi_api.ResponseBody.md)
- [SecurityAuthentication](../interfaces/openapi_api.SecurityAuthentication.md)
- [TokenProvider](../interfaces/openapi_api.TokenProvider.md)

### Type Aliases

- [ApiKeyConfiguration](openapi_api.md#apikeyconfiguration)
- [AuthMethods](openapi_api.md#authmethods)
- [AuthMethodsConfiguration](openapi_api.md#authmethodsconfiguration)
- [HttpBasicConfiguration](openapi_api.md#httpbasicconfiguration)
- [HttpBearerConfiguration](openapi_api.md#httpbearerconfiguration)
- [HttpFile](openapi_api.md#httpfile)
- [OAuth2Configuration](openapi_api.md#oauth2configuration)
- [RequestBody](openapi_api.md#requestbody)

### Variables

- [server1](openapi_api.md#server1)
- [servers](openapi_api.md#servers)

### Functions

- [configureAuthMethods](openapi_api.md#configureauthmethods)
- [createConfiguration](openapi_api.md#createconfiguration)
- [wrapHttpLibrary](openapi_api.md#wraphttplibrary)

## References

### Action

Re-exports [Action](../classes/src_common.Action.md)

___

### EventHandler

Re-exports [EventHandler](../classes/src_common.EventHandler.md)

___

### ExternalStorageLocation

Re-exports [ExternalStorageLocation](../classes/src_common.ExternalStorageLocation.md)

___

### PollData

Re-exports [PollData](../classes/src_common.PollData.md)

___

### RerunWorkflowRequest

Re-exports [RerunWorkflowRequest](../classes/src_common.RerunWorkflowRequest.md)

___

### SearchResultTask

Re-exports [SearchResultTask](../classes/src_common.SearchResultTask.md)

___

### SearchResultTaskSummary

Re-exports [SearchResultTaskSummary](../classes/src_common.SearchResultTaskSummary.md)

___

### SearchResultWorkflow

Re-exports [SearchResultWorkflow](../classes/src_common.SearchResultWorkflow.md)

___

### SearchResultWorkflowSummary

Re-exports [SearchResultWorkflowSummary](../classes/src_common.SearchResultWorkflowSummary.md)

___

### SkipTaskRequest

Re-exports [SkipTaskRequest](../classes/src_common.SkipTaskRequest.md)

___

### StartWorkflow

Re-exports [StartWorkflow](../classes/src_common.StartWorkflow.md)

___

### StartWorkflowRequest

Re-exports [StartWorkflowRequest](../classes/src_common.StartWorkflowRequest.md)

___

### SubWorkflowParams

Re-exports [SubWorkflowParams](../classes/src_common.SubWorkflowParams.md)

___

### Task

Re-exports [Task](../classes/src_common.Task.md)

___

### TaskDef

Re-exports [TaskDef](../classes/src_common.TaskDef.md)

___

### TaskDetails

Re-exports [TaskDetails](../classes/src_common.TaskDetails.md)

___

### TaskExecLog

Re-exports [TaskExecLog](../classes/src_common.TaskExecLog.md)

___

### TaskResult

Re-exports [TaskResult](../classes/src_common.TaskResult.md)

___

### TaskSummary

Re-exports [TaskSummary](../classes/src_common.TaskSummary.md)

___

### Workflow

Re-exports [Workflow](../classes/src_common.Workflow.md)

___

### WorkflowDef

Re-exports [WorkflowDef](../classes/src_common.WorkflowDef.md)

___

### WorkflowSummary

Re-exports [WorkflowSummary](../classes/src_common.WorkflowSummary.md)

___

### WorkflowTask

Re-exports [WorkflowTask](../classes/src_common.WorkflowTask.md)

___

### WorkflowTestRequest

Re-exports [WorkflowTestRequest](../classes/src_common.WorkflowTestRequest.md)

## Type Aliases

### ApiKeyConfiguration

Ƭ **ApiKeyConfiguration**: `string`

#### Defined in

[openapi/api/auth/auth.ts:29](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/auth/auth.ts#L29)

___

### AuthMethods

Ƭ **AuthMethods**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | [`SecurityAuthentication`](../interfaces/openapi_api.SecurityAuthentication.md) |

#### Defined in

[openapi/api/auth/auth.ts:25](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/auth/auth.ts#L25)

___

### AuthMethodsConfiguration

Ƭ **AuthMethodsConfiguration**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | [`SecurityAuthentication`](../interfaces/openapi_api.SecurityAuthentication.md) |

#### Defined in

[openapi/api/auth/auth.ts:34](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/auth/auth.ts#L34)

___

### HttpBasicConfiguration

Ƭ **HttpBasicConfiguration**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `username` | `string` |

#### Defined in

[openapi/api/auth/auth.ts:30](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/auth/auth.ts#L30)

___

### HttpBearerConfiguration

Ƭ **HttpBearerConfiguration**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tokenProvider` | [`TokenProvider`](../interfaces/openapi_api.TokenProvider.md) |

#### Defined in

[openapi/api/auth/auth.ts:31](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/auth/auth.ts#L31)

___

### HttpFile

Ƭ **HttpFile**: `Blob` & \{ `name`: `string`  }

Represents an HTTP file which will be transferred from or to a server.

#### Defined in

[openapi/api/http/http.ts:23](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L23)

___

### OAuth2Configuration

Ƭ **OAuth2Configuration**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessToken` | `string` |

#### Defined in

[openapi/api/auth/auth.ts:32](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/auth/auth.ts#L32)

___

### RequestBody

Ƭ **RequestBody**: `undefined` \| `string` \| `FormData` \| `URLSearchParams`

Represents the body of an outgoing HTTP request.

#### Defined in

[openapi/api/http/http.ts:34](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L34)

## Variables

### server1

• `Const` **server1**: [`ServerConfiguration`](../classes/openapi_api.ServerConfiguration.md)\<{}\>

#### Defined in

[openapi/api/servers.ts:53](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/servers.ts#L53)

___

### servers

• `Const` **servers**: [`ServerConfiguration`](../classes/openapi_api.ServerConfiguration.md)\<{}\>[]

#### Defined in

[openapi/api/servers.ts:55](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/servers.ts#L55)

## Functions

### configureAuthMethods

▸ **configureAuthMethods**(`config`): [`AuthMethods`](openapi_api.md#authmethods)

Creates the authentication methods from a swagger description.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `undefined` \| [`AuthMethodsConfiguration`](openapi_api.md#authmethodsconfiguration) |

#### Returns

[`AuthMethods`](openapi_api.md#authmethods)

#### Defined in

[openapi/api/auth/auth.ts:42](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/auth/auth.ts#L42)

___

### createConfiguration

▸ **createConfiguration**(`conf?`): [`Configuration`](../interfaces/openapi_api.Configuration.md)

Provide your `ConfigurationParameters` to this function to get a `Configuration`
object that can be used to configure your APIs (in the constructor or 
for each request individually).

If a property is not included in conf, a default is used:
   - baseServer: server1
   - httpApi: IsomorphicFetchHttpLibrary
   - middleware: []
   - promiseMiddleware: []
   - authMethods: {}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `ConfigurationParameters` | partial configuration |

#### Returns

[`Configuration`](../interfaces/openapi_api.Configuration.md)

#### Defined in

[openapi/api/configuration.ts:69](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/configuration.ts#L69)

___

### wrapHttpLibrary

▸ **wrapHttpLibrary**(`promiseHttpLibrary`): [`HttpLibrary`](../interfaces/openapi_api.HttpLibrary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `promiseHttpLibrary` | [`PromiseHttpLibrary`](../interfaces/openapi_api.PromiseHttpLibrary.md) |

#### Returns

[`HttpLibrary`](../interfaces/openapi_api.HttpLibrary.md)

#### Defined in

[openapi/api/http/http.ts:233](https://github.com/swift-conductor/conductor-client-typescript/blob/d61717b/openapi/api/http/http.ts#L233)
