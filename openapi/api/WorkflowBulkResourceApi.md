# .WorkflowBulkResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pauseWorkflow1**](WorkflowBulkResourceApi.md#pauseWorkflow1) | **PUT** /api/workflow/bulk/pause | Pause the list of workflows
[**restart1**](WorkflowBulkResourceApi.md#restart1) | **POST** /api/workflow/bulk/restart | Restart the list of completed workflow
[**resumeWorkflow1**](WorkflowBulkResourceApi.md#resumeWorkflow1) | **PUT** /api/workflow/bulk/resume | Resume the list of workflows
[**retry1**](WorkflowBulkResourceApi.md#retry1) | **POST** /api/workflow/bulk/retry | Retry the last failed task for each workflow from the list
[**terminate**](WorkflowBulkResourceApi.md#terminate) | **POST** /api/workflow/bulk/terminate | Terminate workflows execution


# **pauseWorkflow1**
> BulkResponse pauseWorkflow1(requestBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowBulkResourceApi(configuration);

let body:.WorkflowBulkResourceApiPauseWorkflow1Request = {
  // Array<string>
  requestBody: [
    "requestBody_example",
  ],
};

apiInstance.pauseWorkflow1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<string>**|  |


### Return type

**BulkResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restart1**
> BulkResponse restart1(requestBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowBulkResourceApi(configuration);

let body:.WorkflowBulkResourceApiRestart1Request = {
  // Array<string>
  requestBody: [
    "requestBody_example",
  ],
  // boolean (optional)
  useLatestDefinitions: false,
};

apiInstance.restart1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<string>**|  |
 **useLatestDefinitions** | [**boolean**] |  | (optional) defaults to false


### Return type

**BulkResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resumeWorkflow1**
> BulkResponse resumeWorkflow1(requestBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowBulkResourceApi(configuration);

let body:.WorkflowBulkResourceApiResumeWorkflow1Request = {
  // Array<string>
  requestBody: [
    "requestBody_example",
  ],
};

apiInstance.resumeWorkflow1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<string>**|  |


### Return type

**BulkResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retry1**
> BulkResponse retry1(requestBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowBulkResourceApi(configuration);

let body:.WorkflowBulkResourceApiRetry1Request = {
  // Array<string>
  requestBody: [
    "requestBody_example",
  ],
};

apiInstance.retry1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<string>**|  |


### Return type

**BulkResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **terminate**
> BulkResponse terminate(requestBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowBulkResourceApi(configuration);

let body:.WorkflowBulkResourceApiTerminateRequest = {
  // Array<string>
  requestBody: [
    "requestBody_example",
  ],
  // string (optional)
  reason: "reason_example",
};

apiInstance.terminate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<string>**|  |
 **reason** | [**string**] |  | (optional) defaults to undefined


### Return type

**BulkResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


