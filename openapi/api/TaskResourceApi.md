# .TaskResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**all**](TaskResourceApi.md#all) | **GET** /api/tasks/queue/all | Get the details about each queue
[**allVerbose**](TaskResourceApi.md#allVerbose) | **GET** /api/tasks/queue/all/verbose | Get the details about each queue
[**batchPoll**](TaskResourceApi.md#batchPoll) | **GET** /api/tasks/poll/batch/{tasktype} | Batch poll for a task of a certain type
[**getAllPollData**](TaskResourceApi.md#getAllPollData) | **GET** /api/tasks/queue/polldata/all | Get the last poll data for all task types
[**getExternalStorageLocation2**](TaskResourceApi.md#getExternalStorageLocation2) | **GET** /api/tasks/external-storage-location | Get the external uri where the task payload is to be stored
[**getPollData**](TaskResourceApi.md#getPollData) | **GET** /api/tasks/queue/polldata | Get the last poll data for a given task type
[**getTask**](TaskResourceApi.md#getTask) | **GET** /api/tasks/{taskId} | Get task by Id
[**getTaskLogs**](TaskResourceApi.md#getTaskLogs) | **GET** /api/tasks/{taskId}/log | Get Task Execution Logs
[**log**](TaskResourceApi.md#log) | **POST** /api/tasks/{taskId}/log | Log Task Execution Details
[**poll**](TaskResourceApi.md#poll) | **GET** /api/tasks/poll/{tasktype} | Poll for a task of a certain type
[**requeuePendingTask**](TaskResourceApi.md#requeuePendingTask) | **POST** /api/tasks/queue/requeue/{taskType} | Requeue pending tasks
[**search1**](TaskResourceApi.md#search1) | **GET** /api/tasks/search | Search for tasks based in payload and other parameters
[**searchV21**](TaskResourceApi.md#searchV21) | **GET** /api/tasks/search-v2 | Search for tasks based in payload and other parameters
[**size**](TaskResourceApi.md#size) | **GET** /api/tasks/queue/sizes | Deprecated. Please use /tasks/queue/size endpoint
[**taskDepth**](TaskResourceApi.md#taskDepth) | **GET** /api/tasks/queue/size | Get queue size for a task type.
[**updateTask**](TaskResourceApi.md#updateTask) | **POST** /api/tasks | Update a task


# **all**
> { [key: string]: number; } all()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:any = {};

apiInstance.all(body).then((data:any) => {
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

# **allVerbose**
> { [key: string]: { [key: string]: { [key: string]: number; }; }; } allVerbose()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:any = {};

apiInstance.allVerbose(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**{ [key: string]: { [key: string]: { [key: string]: number; }; }; }**

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

# **batchPoll**
> Array<Task> batchPoll()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiBatchPollRequest = {
  // string
  tasktype: "tasktype_example",
  // string (optional)
  workerid: "workerid_example",
  // string (optional)
  domain: "domain_example",
  // number (optional)
  count: 1,
  // number (optional)
  timeout: 100,
};

apiInstance.batchPoll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasktype** | [**string**] |  | defaults to undefined
 **workerid** | [**string**] |  | (optional) defaults to undefined
 **domain** | [**string**] |  | (optional) defaults to undefined
 **count** | [**number**] |  | (optional) defaults to 1
 **timeout** | [**number**] |  | (optional) defaults to 100


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

# **getAllPollData**
> Array<PollData> getAllPollData()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:any = {};

apiInstance.getAllPollData(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<PollData>**

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

# **getExternalStorageLocation2**
> ExternalStorageLocation getExternalStorageLocation2()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiGetExternalStorageLocation2Request = {
  // string
  path: "path_example",
  // string
  operation: "operation_example",
  // string
  payloadType: "payloadType_example",
};

apiInstance.getExternalStorageLocation2(body).then((data:any) => {
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

# **getPollData**
> Array<PollData> getPollData()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiGetPollDataRequest = {
  // string
  taskType: "taskType_example",
};

apiInstance.getPollData(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskType** | [**string**] |  | defaults to undefined


### Return type

**Array<PollData>**

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

# **getTask**
> Task getTask()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiGetTaskRequest = {
  // string
  taskId: "taskId_example",
};

apiInstance.getTask(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] |  | defaults to undefined


### Return type

**Task**

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

# **getTaskLogs**
> Array<TaskExecLog> getTaskLogs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiGetTaskLogsRequest = {
  // string
  taskId: "taskId_example",
};

apiInstance.getTaskLogs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] |  | defaults to undefined


### Return type

**Array<TaskExecLog>**

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

# **log**
> void log(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiLogRequest = {
  // string
  taskId: "taskId_example",
  // string
  body: "body_example",
};

apiInstance.log(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **taskId** | [**string**] |  | defaults to undefined


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

# **poll**
> Task poll()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiPollRequest = {
  // string
  tasktype: "tasktype_example",
  // string (optional)
  workerid: "workerid_example",
  // string (optional)
  domain: "domain_example",
};

apiInstance.poll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasktype** | [**string**] |  | defaults to undefined
 **workerid** | [**string**] |  | (optional) defaults to undefined
 **domain** | [**string**] |  | (optional) defaults to undefined


### Return type

**Task**

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

# **requeuePendingTask**
> string requeuePendingTask()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiRequeuePendingTaskRequest = {
  // string
  taskType: "taskType_example",
};

apiInstance.requeuePendingTask(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskType** | [**string**] |  | defaults to undefined


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

# **search1**
> SearchResultTaskSummary search1()

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiSearch1Request = {
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

apiInstance.search1(body).then((data:any) => {
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

**SearchResultTaskSummary**

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

# **searchV21**
> SearchResultTask searchV21()

use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiSearchV21Request = {
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

apiInstance.searchV21(body).then((data:any) => {
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

**SearchResultTask**

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

# **size**
> { [key: string]: number; } size()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiSizeRequest = {
  // Array<string> (optional)
  taskType: [
    "taskType_example",
  ],
};

apiInstance.size(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskType** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


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

# **taskDepth**
> number taskDepth()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiTaskDepthRequest = {
  // string
  taskType: "taskType_example",
  // string (optional)
  domain: "domain_example",
  // string (optional)
  isolationGroupId: "isolationGroupId_example",
  // string (optional)
  executionNamespace: "executionNamespace_example",
};

apiInstance.taskDepth(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskType** | [**string**] |  | defaults to undefined
 **domain** | [**string**] |  | (optional) defaults to undefined
 **isolationGroupId** | [**string**] |  | (optional) defaults to undefined
 **executionNamespace** | [**string**] |  | (optional) defaults to undefined


### Return type

**number**

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

# **updateTask**
> string updateTask(taskResult)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskResourceApi(configuration);

let body:.TaskResourceApiUpdateTaskRequest = {
  // TaskResult
  taskResult: {
    workflowInstanceId: "workflowInstanceId_example",
    taskId: "taskId_example",
    reasonForIncompletion: "reasonForIncompletion_example",
    callbackAfterSeconds: 1,
    workerId: "workerId_example",
    status: "IN_PROGRESS",
    outputData: {
      "key": {},
    },
    logs: [
      {
        log: "log_example",
        taskId: "taskId_example",
        createdTime: 1,
      },
    ],
    externalOutputPayloadStoragePath: "externalOutputPayloadStoragePath_example",
    subWorkflowId: "subWorkflowId_example",
    extendLease: true,
  },
};

apiInstance.updateTask(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskResult** | **TaskResult**|  |


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


