# .MetadataResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](MetadataResourceApi.md#create) | **POST** /api/metadata/workflowdef | Create a new workflow definition
[**get**](MetadataResourceApi.md#get) | **GET** /api/metadata/workflowdef/{name} | Retrieves workflow definition along with blueprint
[**getAll**](MetadataResourceApi.md#getAll) | **GET** /api/metadata/workflowdef | Retrieves all workflow definition along with blueprint
[**getAllWorkflowsWithLatestVersions**](MetadataResourceApi.md#getAllWorkflowsWithLatestVersions) | **GET** /api/metadata/workflowdef/latest-versions | Returns only the latest version of all workflow definitions
[**getTaskDef**](MetadataResourceApi.md#getTaskDef) | **GET** /api/metadata/taskdef/{tasktype} | Gets the task definition
[**getTaskDefs**](MetadataResourceApi.md#getTaskDefs) | **GET** /api/metadata/taskdef | Gets all task definition
[**getWorkflowNamesAndVersions**](MetadataResourceApi.md#getWorkflowNamesAndVersions) | **GET** /api/metadata/workflowdef/names-and-versions | Returns workflow names and versions only (no definition bodies)
[**registerTaskDef**](MetadataResourceApi.md#registerTaskDef) | **POST** /api/metadata/taskdef | Create new task definition(s)
[**unregisterTaskDef**](MetadataResourceApi.md#unregisterTaskDef) | **DELETE** /api/metadata/taskdef/{tasktype} | Remove a task definition
[**unregisterWorkflowDef**](MetadataResourceApi.md#unregisterWorkflowDef) | **DELETE** /api/metadata/workflowdef/{name}/{version} | Removes workflow definition. It does not remove workflows associated with the definition.
[**update**](MetadataResourceApi.md#update) | **PUT** /api/metadata/workflowdef | Create or update workflow definition
[**updateTaskDef**](MetadataResourceApi.md#updateTaskDef) | **PUT** /api/metadata/taskdef | Update an existing task
[**validate**](MetadataResourceApi.md#validate) | **POST** /api/metadata/workflowdef/validate | Validates a new workflow definition


# **create**
> void create(workflowDef)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:.MetadataResourceApiCreateRequest = {
  // WorkflowDef
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
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowDef** | **WorkflowDef**|  |


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

# **get**
> WorkflowDef get()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:.MetadataResourceApiGetRequest = {
  // string
  name: "name_example",
  // number (optional)
  version: 1,
};

apiInstance.get(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **version** | [**number**] |  | (optional) defaults to undefined


### Return type

**WorkflowDef**

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

# **getAll**
> Array<WorkflowDef> getAll()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:any = {};

apiInstance.getAll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<WorkflowDef>**

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

# **getAllWorkflowsWithLatestVersions**
> Array<WorkflowDef> getAllWorkflowsWithLatestVersions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:any = {};

apiInstance.getAllWorkflowsWithLatestVersions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<WorkflowDef>**

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

# **getTaskDef**
> TaskDef getTaskDef()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:.MetadataResourceApiGetTaskDefRequest = {
  // string
  tasktype: "tasktype_example",
};

apiInstance.getTaskDef(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasktype** | [**string**] |  | defaults to undefined


### Return type

**TaskDef**

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

# **getTaskDefs**
> Array<TaskDef> getTaskDefs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:any = {};

apiInstance.getTaskDefs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<TaskDef>**

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

# **getWorkflowNamesAndVersions**
> { [key: string]: any; } getWorkflowNamesAndVersions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:any = {};

apiInstance.getWorkflowNamesAndVersions(body).then((data:any) => {
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

# **registerTaskDef**
> void registerTaskDef(taskDef)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:.MetadataResourceApiRegisterTaskDefRequest = {
  // Array<TaskDef>
  taskDef: [
    {
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
  ],
};

apiInstance.registerTaskDef(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskDef** | **Array<TaskDef>**|  |


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

# **unregisterTaskDef**
> void unregisterTaskDef()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:.MetadataResourceApiUnregisterTaskDefRequest = {
  // string
  tasktype: "tasktype_example",
};

apiInstance.unregisterTaskDef(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasktype** | [**string**] |  | defaults to undefined


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

# **unregisterWorkflowDef**
> void unregisterWorkflowDef()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:.MetadataResourceApiUnregisterWorkflowDefRequest = {
  // string
  name: "name_example",
  // number
  version: 1,
};

apiInstance.unregisterWorkflowDef(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined
 **version** | [**number**] |  | defaults to undefined


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

# **update**
> BulkResponse update(workflowDef)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:.MetadataResourceApiUpdateRequest = {
  // Array<WorkflowDef>
  workflowDef: [
    {
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
  ],
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowDef** | **Array<WorkflowDef>**|  |


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

# **updateTaskDef**
> void updateTaskDef(taskDef)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:.MetadataResourceApiUpdateTaskDefRequest = {
  // TaskDef
  taskDef: {
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
};

apiInstance.updateTaskDef(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskDef** | **TaskDef**|  |


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

# **validate**
> void validate(workflowDef)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataResourceApi(configuration);

let body:.MetadataResourceApiValidateRequest = {
  // WorkflowDef
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
};

apiInstance.validate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowDef** | **WorkflowDef**|  |


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


