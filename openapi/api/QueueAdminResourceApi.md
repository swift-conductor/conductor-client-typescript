# .QueueAdminResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**names**](QueueAdminResourceApi.md#names) | **GET** /api/queue/ | Get Queue Names
[**size1**](QueueAdminResourceApi.md#size1) | **GET** /api/queue/size | Get the queue length
[**update1**](QueueAdminResourceApi.md#update1) | **POST** /api/queue/update/{workflowId}/{taskRefName}/{status} | Publish a message in queue to mark a wait task as completed.
[**updateByTaskId**](QueueAdminResourceApi.md#updateByTaskId) | **POST** /api/queue/update/{workflowId}/task/{taskId}/{status} | Publish a message in queue to mark a wait task (by taskId) as completed.


# **names**
> { [key: string]: string; } names()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QueueAdminResourceApi(configuration);

let body:any = {};

apiInstance.names(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **size1**
> { [key: string]: number; } size1()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QueueAdminResourceApi(configuration);

let body:any = {};

apiInstance.size1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**{ [key: string]: number; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update1**
> void update1(requestBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QueueAdminResourceApi(configuration);

let body:.QueueAdminResourceApiUpdate1Request = {
  // string
  workflowId: "workflowId_example",
  // string
  taskRefName: "taskRefName_example",
  // 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED'
  status: "IN_PROGRESS",
  // { [key: string]: any; }
  requestBody: {
    "key": {},
  },
};

apiInstance.update1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **{ [key: string]: any; }**|  |
 **workflowId** | [**string**] |  | defaults to undefined
 **taskRefName** | [**string**] |  | defaults to undefined
 **status** | [**&#39;IN_PROGRESS&#39; | &#39;CANCELED&#39; | &#39;FAILED&#39; | &#39;FAILED_WITH_TERMINAL_ERROR&#39; | &#39;COMPLETED&#39; | &#39;COMPLETED_WITH_ERRORS&#39; | &#39;SCHEDULED&#39; | &#39;TIMED_OUT&#39; | &#39;SKIPPED&#39;**]**Array<&#39;IN_PROGRESS&#39; &#124; &#39;CANCELED&#39; &#124; &#39;FAILED&#39; &#124; &#39;FAILED_WITH_TERMINAL_ERROR&#39; &#124; &#39;COMPLETED&#39; &#124; &#39;COMPLETED_WITH_ERRORS&#39; &#124; &#39;SCHEDULED&#39; &#124; &#39;TIMED_OUT&#39; &#124; &#39;SKIPPED&#39;>** |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateByTaskId**
> void updateByTaskId(requestBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QueueAdminResourceApi(configuration);

let body:.QueueAdminResourceApiUpdateByTaskIdRequest = {
  // string
  workflowId: "workflowId_example",
  // string
  taskId: "taskId_example",
  // 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED'
  status: "IN_PROGRESS",
  // { [key: string]: any; }
  requestBody: {
    "key": {},
  },
};

apiInstance.updateByTaskId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **{ [key: string]: any; }**|  |
 **workflowId** | [**string**] |  | defaults to undefined
 **taskId** | [**string**] |  | defaults to undefined
 **status** | [**&#39;IN_PROGRESS&#39; | &#39;CANCELED&#39; | &#39;FAILED&#39; | &#39;FAILED_WITH_TERMINAL_ERROR&#39; | &#39;COMPLETED&#39; | &#39;COMPLETED_WITH_ERRORS&#39; | &#39;SCHEDULED&#39; | &#39;TIMED_OUT&#39; | &#39;SKIPPED&#39;**]**Array<&#39;IN_PROGRESS&#39; &#124; &#39;CANCELED&#39; &#124; &#39;FAILED&#39; &#124; &#39;FAILED_WITH_TERMINAL_ERROR&#39; &#124; &#39;COMPLETED&#39; &#124; &#39;COMPLETED_WITH_ERRORS&#39; &#124; &#39;SCHEDULED&#39; &#124; &#39;TIMED_OUT&#39; &#124; &#39;SKIPPED&#39;>** |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


