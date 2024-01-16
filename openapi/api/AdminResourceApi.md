# .AdminResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllConfig**](AdminResourceApi.md#getAllConfig) | **GET** /api/admin/config | Get all the configuration parameters
[**getEventQueues**](AdminResourceApi.md#getEventQueues) | **GET** /api/admin/queues | Get registered queues
[**requeueSweep**](AdminResourceApi.md#requeueSweep) | **POST** /api/admin/sweep/requeue/{workflowId} | Queue up all the running workflows for sweep
[**verifyAndRepairWorkflowConsistency**](AdminResourceApi.md#verifyAndRepairWorkflowConsistency) | **POST** /api/admin/consistency/verify-and-repair/{workflowId} | Verify and repair workflow consistency
[**view**](AdminResourceApi.md#view) | **GET** /api/admin/task/{tasktype} | Get the list of pending tasks for a given task type


# **getAllConfig**
> { [key: string]: any; } getAllConfig()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AdminResourceApi(configuration);

let body:any = {};

apiInstance.getAllConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**{ [key: string]: any; }**

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

# **getEventQueues**
> { [key: string]: any; } getEventQueues()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AdminResourceApi(configuration);

let body:.AdminResourceApiGetEventQueuesRequest = {
  // boolean (optional)
  verbose: false,
};

apiInstance.getEventQueues(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verbose** | [**boolean**] |  | (optional) defaults to false


### Return type

**{ [key: string]: any; }**

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

# **requeueSweep**
> string requeueSweep()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AdminResourceApi(configuration);

let body:.AdminResourceApiRequeueSweepRequest = {
  // string
  workflowId: "workflowId_example",
};

apiInstance.requeueSweep(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] |  | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyAndRepairWorkflowConsistency**
> string verifyAndRepairWorkflowConsistency()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AdminResourceApi(configuration);

let body:.AdminResourceApiVerifyAndRepairWorkflowConsistencyRequest = {
  // string
  workflowId: "workflowId_example",
};

apiInstance.verifyAndRepairWorkflowConsistency(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] |  | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **view**
> Array<Task> view()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AdminResourceApi(configuration);

let body:.AdminResourceApiViewRequest = {
  // string
  tasktype: "tasktype_example",
  // number (optional)
  start: 0,
  // number (optional)
  count: 100,
};

apiInstance.view(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasktype** | [**string**] |  | defaults to undefined
 **start** | [**number**] |  | (optional) defaults to 0
 **count** | [**number**] |  | (optional) defaults to 100


### Return type

**Array<Task>**

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


