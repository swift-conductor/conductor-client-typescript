# .WorkflowResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](WorkflowResourceApi.md#_delete) | **DELETE** /api/workflow/{workflowId}/remove | Removes the workflow from the system
[**decide**](WorkflowResourceApi.md#decide) | **PUT** /api/workflow/decide/{workflowId} | Starts the decision task for a workflow
[**getExecutionStatus**](WorkflowResourceApi.md#getExecutionStatus) | **GET** /api/workflow/{workflowId} | Gets the workflow by workflow id
[**getExternalStorageLocation**](WorkflowResourceApi.md#getExternalStorageLocation) | **GET** /api/workflow/external-storage-location | Get the uri and path of the external storage where the workflow payload is to be stored
[**getExternalStorageLocation1**](WorkflowResourceApi.md#getExternalStorageLocation1) | **GET** /api/workflow/externalstoragelocation | Get the uri and path of the external storage where the workflow payload is to be stored
[**getRunningWorkflow**](WorkflowResourceApi.md#getRunningWorkflow) | **GET** /api/workflow/running/{name} | Retrieve all the running workflows
[**getWorkflows**](WorkflowResourceApi.md#getWorkflows) | **POST** /api/workflow/{name}/correlated | Lists workflows for the given correlation id list
[**getWorkflows1**](WorkflowResourceApi.md#getWorkflows1) | **GET** /api/workflow/{name}/correlated/{correlationId} | Lists workflows for the given correlation id
[**pauseWorkflow**](WorkflowResourceApi.md#pauseWorkflow) | **PUT** /api/workflow/{workflowId}/pause | Pauses the workflow
[**rerun**](WorkflowResourceApi.md#rerun) | **POST** /api/workflow/{workflowId}/rerun | Reruns the workflow from a specific task
[**resetWorkflow**](WorkflowResourceApi.md#resetWorkflow) | **POST** /api/workflow/{workflowId}/resetcallbacks | Resets callback times of all non-terminal CUSTOM tasks to 0
[**restart**](WorkflowResourceApi.md#restart) | **POST** /api/workflow/{workflowId}/restart | Restarts a completed workflow
[**resumeWorkflow**](WorkflowResourceApi.md#resumeWorkflow) | **PUT** /api/workflow/{workflowId}/resume | Resumes the workflow
[**retry**](WorkflowResourceApi.md#retry) | **POST** /api/workflow/{workflowId}/retry | Retries the last failed task
[**search**](WorkflowResourceApi.md#search) | **GET** /api/workflow/search | Search for workflows based on payload and other parameters
[**searchV2**](WorkflowResourceApi.md#searchV2) | **GET** /api/workflow/search-v2 | Search for workflows based on payload and other parameters
[**searchWorkflowsByTasks**](WorkflowResourceApi.md#searchWorkflowsByTasks) | **GET** /api/workflow/search-by-tasks | Search for workflows based on task parameters
[**searchWorkflowsByTasksV2**](WorkflowResourceApi.md#searchWorkflowsByTasksV2) | **GET** /api/workflow/search-by-tasks-v2 | Search for workflows based on task parameters
[**skipTaskFromWorkflow**](WorkflowResourceApi.md#skipTaskFromWorkflow) | **PUT** /api/workflow/{workflowId}/skiptask/{taskReferenceName} | Skips a given task from a current running workflow
[**startWorkflow**](WorkflowResourceApi.md#startWorkflow) | **POST** /api/workflow | Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain
[**startWorkflow1**](WorkflowResourceApi.md#startWorkflow1) | **POST** /api/workflow/{name} | Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking
[**terminate1**](WorkflowResourceApi.md#terminate1) | **DELETE** /api/workflow/{workflowId} | Terminate workflow execution
[**testWorkflow**](WorkflowResourceApi.md#testWorkflow) | **POST** /api/workflow/test | Test workflow execution using mock data


# **_delete**
> void _delete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiDeleteRequest = {
  // string
  workflowId: "workflowId_example",
  // boolean (optional)
  archiveWorkflow: true,
};

apiInstance._delete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] |  | defaults to undefined
 **archiveWorkflow** | [**boolean**] |  | (optional) defaults to true


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **decide**
> void decide()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiDecideRequest = {
  // string
  workflowId: "workflowId_example",
};

apiInstance.decide(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getExecutionStatus**
> Workflow getExecutionStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiGetExecutionStatusRequest = {
  // string
  workflowId: "workflowId_example",
  // boolean (optional)
  includeTasks: true,
};

apiInstance.getExecutionStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] |  | defaults to undefined
 **includeTasks** | [**boolean**] |  | (optional) defaults to true


### Return type

**Workflow**

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

# **getExternalStorageLocation**
> ExternalStorageLocation getExternalStorageLocation()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiGetExternalStorageLocationRequest = {
  // string
  path: "path_example",
  // string
  operation: "operation_example",
  // string
  payloadType: "payloadType_example",
};

apiInstance.getExternalStorageLocation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | [**string**] |  | defaults to undefined
 **operation** | [**string**] |  | defaults to undefined
 **payloadType** | [**string**] |  | defaults to undefined


### Return type

**ExternalStorageLocation**

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

# **getExternalStorageLocation1**
> ExternalStorageLocation getExternalStorageLocation1()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiGetExternalStorageLocation1Request = {
  // string
  path: "path_example",
  // string
  operation: "operation_example",
  // string
  payloadType: "payloadType_example",
};

apiInstance.getExternalStorageLocation1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | [**string**] |  | defaults to undefined
 **operation** | [**string**] |  | defaults to undefined
 **payloadType** | [**string**] |  | defaults to undefined


### Return type

**ExternalStorageLocation**

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

# **getRunningWorkflow**
> Array<string> getRunningWorkflow()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiGetRunningWorkflowRequest = {
  // string
  name: "name_example",
  // number (optional)
  version: 1,
  // number (optional)
  startTime: 1,
  // number (optional)
  endTime: 1,
};

apiInstance.getRunningWorkflow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **version** | [**number**] |  | (optional) defaults to 1
 **startTime** | [**number**] |  | (optional) defaults to undefined
 **endTime** | [**number**] |  | (optional) defaults to undefined


### Return type

**Array<string>**

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

# **getWorkflows**
> { [key: string]: Array<Workflow>; } getWorkflows(requestBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiGetWorkflowsRequest = {
  // string
  name: "name_example",
  // Array<string>
  requestBody: [
    "requestBody_example",
  ],
  // boolean (optional)
  includeClosed: false,
  // boolean (optional)
  includeTasks: false,
};

apiInstance.getWorkflows(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<string>**|  |
 **name** | [**string**] |  | defaults to undefined
 **includeClosed** | [**boolean**] |  | (optional) defaults to false
 **includeTasks** | [**boolean**] |  | (optional) defaults to false


### Return type

**{ [key: string]: Array<Workflow>; }**

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

# **getWorkflows1**
> Array<Workflow> getWorkflows1()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiGetWorkflows1Request = {
  // string
  name: "name_example",
  // string
  correlationId: "correlationId_example",
  // boolean (optional)
  includeClosed: false,
  // boolean (optional)
  includeTasks: false,
};

apiInstance.getWorkflows1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **correlationId** | [**string**] |  | defaults to undefined
 **includeClosed** | [**boolean**] |  | (optional) defaults to false
 **includeTasks** | [**boolean**] |  | (optional) defaults to false


### Return type

**Array<Workflow>**

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

# **pauseWorkflow**
> void pauseWorkflow()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiPauseWorkflowRequest = {
  // string
  workflowId: "workflowId_example",
};

apiInstance.pauseWorkflow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rerun**
> string rerun(rerunWorkflowRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiRerunRequest = {
  // string
  workflowId: "workflowId_example",
  // RerunWorkflowRequest
  rerunWorkflowRequest: {
    reRunFromWorkflowId: "reRunFromWorkflowId_example",
    workflowInput: {
      "key": {},
    },
    reRunFromTaskId: "reRunFromTaskId_example",
    taskInput: {
      "key": {},
    },
    correlationId: "correlationId_example",
  },
};

apiInstance.rerun(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rerunWorkflowRequest** | **RerunWorkflowRequest**|  |
 **workflowId** | [**string**] |  | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resetWorkflow**
> void resetWorkflow()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiResetWorkflowRequest = {
  // string
  workflowId: "workflowId_example",
};

apiInstance.resetWorkflow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restart**
> void restart()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiRestartRequest = {
  // string
  workflowId: "workflowId_example",
  // boolean (optional)
  useLatestDefinitions: false,
};

apiInstance.restart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] |  | defaults to undefined
 **useLatestDefinitions** | [**boolean**] |  | (optional) defaults to false


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resumeWorkflow**
> void resumeWorkflow()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiResumeWorkflowRequest = {
  // string
  workflowId: "workflowId_example",
};

apiInstance.resumeWorkflow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retry**
> void retry()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiRetryRequest = {
  // string
  workflowId: "workflowId_example",
  // boolean (optional)
  resumeSubworkflowTasks: false,
};

apiInstance.retry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] |  | defaults to undefined
 **resumeSubworkflowTasks** | [**boolean**] |  | (optional) defaults to false


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **search**
> SearchResultWorkflowSummary search()

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiSearchRequest = {
  // number (optional)
  start: 0,
  // number (optional)
  size: 100,
  // string (optional)
  sort: "sort_example",
  // string (optional)
  freeText: "*",
  // string (optional)
  query: "query_example",
};

apiInstance.search(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] |  | (optional) defaults to 0
 **size** | [**number**] |  | (optional) defaults to 100
 **sort** | [**string**] |  | (optional) defaults to undefined
 **freeText** | [**string**] |  | (optional) defaults to '*'
 **query** | [**string**] |  | (optional) defaults to undefined


### Return type

**SearchResultWorkflowSummary**

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

# **searchV2**
> SearchResultWorkflow searchV2()

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiSearchV2Request = {
  // number (optional)
  start: 0,
  // number (optional)
  size: 100,
  // string (optional)
  sort: "sort_example",
  // string (optional)
  freeText: "*",
  // string (optional)
  query: "query_example",
};

apiInstance.searchV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] |  | (optional) defaults to 0
 **size** | [**number**] |  | (optional) defaults to 100
 **sort** | [**string**] |  | (optional) defaults to undefined
 **freeText** | [**string**] |  | (optional) defaults to '*'
 **query** | [**string**] |  | (optional) defaults to undefined


### Return type

**SearchResultWorkflow**

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

# **searchWorkflowsByTasks**
> SearchResultWorkflowSummary searchWorkflowsByTasks()

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiSearchWorkflowsByTasksRequest = {
  // number (optional)
  start: 0,
  // number (optional)
  size: 100,
  // string (optional)
  sort: "sort_example",
  // string (optional)
  freeText: "*",
  // string (optional)
  query: "query_example",
};

apiInstance.searchWorkflowsByTasks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] |  | (optional) defaults to 0
 **size** | [**number**] |  | (optional) defaults to 100
 **sort** | [**string**] |  | (optional) defaults to undefined
 **freeText** | [**string**] |  | (optional) defaults to '*'
 **query** | [**string**] |  | (optional) defaults to undefined


### Return type

**SearchResultWorkflowSummary**

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

# **searchWorkflowsByTasksV2**
> SearchResultWorkflow searchWorkflowsByTasksV2()

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiSearchWorkflowsByTasksV2Request = {
  // number (optional)
  start: 0,
  // number (optional)
  size: 100,
  // string (optional)
  sort: "sort_example",
  // string (optional)
  freeText: "*",
  // string (optional)
  query: "query_example",
};

apiInstance.searchWorkflowsByTasksV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] |  | (optional) defaults to 0
 **size** | [**number**] |  | (optional) defaults to 100
 **sort** | [**string**] |  | (optional) defaults to undefined
 **freeText** | [**string**] |  | (optional) defaults to '*'
 **query** | [**string**] |  | (optional) defaults to undefined


### Return type

**SearchResultWorkflow**

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

# **skipTaskFromWorkflow**
> void skipTaskFromWorkflow()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiSkipTaskFromWorkflowRequest = {
  // string
  workflowId: "workflowId_example",
  // string
  taskReferenceName: "taskReferenceName_example",
  // SkipTaskRequest
  skipTaskRequest: {
    taskInput: {
      "key": {},
    },
    taskOutput: {
      "key": {},
    },
  },
};

apiInstance.skipTaskFromWorkflow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] |  | defaults to undefined
 **taskReferenceName** | [**string**] |  | defaults to undefined
 **skipTaskRequest** | **SkipTaskRequest** |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **startWorkflow**
> string startWorkflow(startWorkflowRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiStartWorkflowRequest = {
  // StartWorkflowRequest
  startWorkflowRequest: {
    name: "name_example",
    version: 1,
    correlationId: "correlationId_example",
    input: {
      "key": {},
    },
    taskToDomain: {
      "key": "key_example",
    },
    workflowDef: {
      ownerApp: "ownerApp_example",
      createTime: 1,
      updateTime: 1,
      createdBy: "createdBy_example",
      updatedBy: "updatedBy_example",
      accessPolicy: {
        "key": "key_example",
      },
      name: "name_example",
      description: "description_example",
      version: 1,
      tasks: [
        {
          name: "name_example",
          taskReferenceName: "taskReferenceName_example",
          description: "description_example",
          inputParameters: {
            "key": {},
          },
          type: "type_example",
          dynamicTaskNameParam: "dynamicTaskNameParam_example",
          caseValueParam: "caseValueParam_example",
          caseExpression: "caseExpression_example",
          scriptExpression: "scriptExpression_example",
          decisionCases: {
            "key": ,
          },
          dynamicForkJoinTasksParam: "dynamicForkJoinTasksParam_example",
          dynamicForkTasksParam: "dynamicForkTasksParam_example",
          dynamicForkTasksInputParamName: "dynamicForkTasksInputParamName_example",
          defaultCase: [],
          forkTasks: [
            [],
          ],
          startDelay: 1,
          subWorkflowParam: {
            name: "name_example",
            version: 1,
            taskToDomain: {
              "key": "key_example",
            },
            workflowDefinition: ,
          },
          joinOn: [
            "joinOn_example",
          ],
          sink: "sink_example",
          optional: true,
          taskDefinition: {
            ownerApp: "ownerApp_example",
            createTime: 1,
            updateTime: 1,
            createdBy: "createdBy_example",
            updatedBy: "updatedBy_example",
            accessPolicy: {
              "key": "key_example",
            },
            name: "name_example",
            description: "description_example",
            retryCount: 0,
            timeoutSeconds: 1,
            inputKeys: [
              "inputKeys_example",
            ],
            outputKeys: [
              "outputKeys_example",
            ],
            timeoutPolicy: "RETRY",
            retryLogic: "FIXED",
            retryDelaySeconds: 1,
            responseTimeoutSeconds: 1,
            concurrentExecLimit: 1,
            inputTemplate: {
              "key": {},
            },
            rateLimitPerFrequency: 1,
            rateLimitFrequencyInSeconds: 1,
            isolationGroupId: "isolationGroupId_example",
            executionNameSpace: "executionNameSpace_example",
            ownerEmail: "ownerEmail_example",
            pollTimeoutSeconds: 0,
            backoffScaleFactor: 1,
          },
          rateLimited: true,
          defaultExclusiveJoinTask: [
            "defaultExclusiveJoinTask_example",
          ],
          asyncComplete: true,
          loopCondition: "loopCondition_example",
          loopOver: [],
          retryCount: 1,
          evaluatorType: "evaluatorType_example",
          expression: "expression_example",
          workflowTaskType: "CUSTOM",
        },
      ],
      inputParameters: [
        "inputParameters_example",
      ],
      outputParameters: {
        "key": {},
      },
      failureWorkflow: "failureWorkflow_example",
      schemaVersion: 2,
      restartable: true,
      workflowStatusListenerEnabled: true,
      ownerEmail: "ownerEmail_example",
      timeoutPolicy: "TIME_OUT_WF",
      timeoutSeconds: 1,
      variables: {
        "key": {},
      },
      inputTemplate: {
        "key": {},
      },
    },
    externalInputPayloadStoragePath: "externalInputPayloadStoragePath_example",
    priority: 0,
  },
};

apiInstance.startWorkflow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startWorkflowRequest** | **StartWorkflowRequest**|  |


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **startWorkflow1**
> string startWorkflow1(requestBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiStartWorkflow1Request = {
  // string
  name: "name_example",
  // { [key: string]: any; }
  requestBody: {
    "key": {},
  },
  // number (optional)
  version: 1,
  // string (optional)
  correlationId: "correlationId_example",
  // number (optional)
  priority: 0,
};

apiInstance.startWorkflow1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **{ [key: string]: any; }**|  |
 **name** | [**string**] |  | defaults to undefined
 **version** | [**number**] |  | (optional) defaults to undefined
 **correlationId** | [**string**] |  | (optional) defaults to undefined
 **priority** | [**number**] |  | (optional) defaults to 0


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **terminate1**
> void terminate1()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiTerminate1Request = {
  // string
  workflowId: "workflowId_example",
  // string (optional)
  reason: "reason_example",
  // boolean (optional)
  triggerFailureWorkflow: true,
};

apiInstance.terminate1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] |  | defaults to undefined
 **reason** | [**string**] |  | (optional) defaults to undefined
 **triggerFailureWorkflow** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testWorkflow**
> Workflow testWorkflow(workflowTestRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowResourceApi(configuration);

let body:.WorkflowResourceApiTestWorkflowRequest = {
  // WorkflowTestRequest
  workflowTestRequest: {
    name: "name_example",
    version: 1,
    correlationId: "correlationId_example",
    input: {
      "key": {},
    },
    taskToDomain: {
      "key": "key_example",
    },
    workflowDef: {
      ownerApp: "ownerApp_example",
      createTime: 1,
      updateTime: 1,
      createdBy: "createdBy_example",
      updatedBy: "updatedBy_example",
      accessPolicy: {
        "key": "key_example",
      },
      name: "name_example",
      description: "description_example",
      version: 1,
      tasks: [
        {
          name: "name_example",
          taskReferenceName: "taskReferenceName_example",
          description: "description_example",
          inputParameters: {
            "key": {},
          },
          type: "type_example",
          dynamicTaskNameParam: "dynamicTaskNameParam_example",
          caseValueParam: "caseValueParam_example",
          caseExpression: "caseExpression_example",
          scriptExpression: "scriptExpression_example",
          decisionCases: {
            "key": ,
          },
          dynamicForkJoinTasksParam: "dynamicForkJoinTasksParam_example",
          dynamicForkTasksParam: "dynamicForkTasksParam_example",
          dynamicForkTasksInputParamName: "dynamicForkTasksInputParamName_example",
          defaultCase: [],
          forkTasks: [
            [],
          ],
          startDelay: 1,
          subWorkflowParam: {
            name: "name_example",
            version: 1,
            taskToDomain: {
              "key": "key_example",
            },
            workflowDefinition: ,
          },
          joinOn: [
            "joinOn_example",
          ],
          sink: "sink_example",
          optional: true,
          taskDefinition: {
            ownerApp: "ownerApp_example",
            createTime: 1,
            updateTime: 1,
            createdBy: "createdBy_example",
            updatedBy: "updatedBy_example",
            accessPolicy: {
              "key": "key_example",
            },
            name: "name_example",
            description: "description_example",
            retryCount: 0,
            timeoutSeconds: 1,
            inputKeys: [
              "inputKeys_example",
            ],
            outputKeys: [
              "outputKeys_example",
            ],
            timeoutPolicy: "RETRY",
            retryLogic: "FIXED",
            retryDelaySeconds: 1,
            responseTimeoutSeconds: 1,
            concurrentExecLimit: 1,
            inputTemplate: {
              "key": {},
            },
            rateLimitPerFrequency: 1,
            rateLimitFrequencyInSeconds: 1,
            isolationGroupId: "isolationGroupId_example",
            executionNameSpace: "executionNameSpace_example",
            ownerEmail: "ownerEmail_example",
            pollTimeoutSeconds: 0,
            backoffScaleFactor: 1,
          },
          rateLimited: true,
          defaultExclusiveJoinTask: [
            "defaultExclusiveJoinTask_example",
          ],
          asyncComplete: true,
          loopCondition: "loopCondition_example",
          loopOver: [],
          retryCount: 1,
          evaluatorType: "evaluatorType_example",
          expression: "expression_example",
          workflowTaskType: "CUSTOM",
        },
      ],
      inputParameters: [
        "inputParameters_example",
      ],
      outputParameters: {
        "key": {},
      },
      failureWorkflow: "failureWorkflow_example",
      schemaVersion: 2,
      restartable: true,
      workflowStatusListenerEnabled: true,
      ownerEmail: "ownerEmail_example",
      timeoutPolicy: "TIME_OUT_WF",
      timeoutSeconds: 1,
      variables: {
        "key": {},
      },
      inputTemplate: {
        "key": {},
      },
    },
    externalInputPayloadStoragePath: "externalInputPayloadStoragePath_example",
    priority: 0,
    taskRefToMockOutput: {
      "key": [
        {
          status: "IN_PROGRESS",
          output: {
            "key": {},
          },
          executionTime: 1,
          queueWaitTime: 1,
        },
      ],
    },
    subWorkflowTestRequest: {
      "key": ,
    },
  },
};

apiInstance.testWorkflow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowTestRequest** | **WorkflowTestRequest**|  |


### Return type

**Workflow**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


