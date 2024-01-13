# .EventResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEventHandler**](EventResourceApi.md#addEventHandler) | **POST** /api/event | Add a new event handler.
[**getEventHandlers**](EventResourceApi.md#getEventHandlers) | **GET** /api/event | Get all the event handlers
[**getEventHandlersForEvent**](EventResourceApi.md#getEventHandlersForEvent) | **GET** /api/event/{event} | Get event handlers for a given event
[**removeEventHandlerStatus**](EventResourceApi.md#removeEventHandlerStatus) | **DELETE** /api/event/{name} | Remove an event handler
[**updateEventHandler**](EventResourceApi.md#updateEventHandler) | **PUT** /api/event | Update an existing event handler.


# **addEventHandler**
> void addEventHandler(eventHandler)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventResourceApi(configuration);

let body:.EventResourceApiAddEventHandlerRequest = {
  // EventHandler
  eventHandler: {
    name: "name_example",
    event: "event_example",
    condition: "condition_example",
    actions: [
      {
        action: "start_workflow",
        startWorkflow: {
          name: "name_example",
          version: 1,
          correlationId: "correlationId_example",
          input: {
            "key": {},
          },
          taskToDomain: {
            "key": "key_example",
          },
        },
        completeTask: {
          workflowId: "workflowId_example",
          taskRefName: "taskRefName_example",
          output: {
            "key": {},
          },
          taskId: "taskId_example",
        },
        failTask: {
          workflowId: "workflowId_example",
          taskRefName: "taskRefName_example",
          output: {
            "key": {},
          },
          taskId: "taskId_example",
        },
        expandInlineJSON: true,
      },
    ],
    active: true,
    evaluatorType: "evaluatorType_example",
  },
};

apiInstance.addEventHandler(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventHandler** | **EventHandler**|  |


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

# **getEventHandlers**
> Array<EventHandler> getEventHandlers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventResourceApi(configuration);

let body:any = {};

apiInstance.getEventHandlers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<EventHandler>**

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

# **getEventHandlersForEvent**
> Array<EventHandler> getEventHandlersForEvent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventResourceApi(configuration);

let body:.EventResourceApiGetEventHandlersForEventRequest = {
  // string
  event: "event_example",
  // boolean (optional)
  activeOnly: true,
};

apiInstance.getEventHandlersForEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event** | [**string**] |  | defaults to undefined
 **activeOnly** | [**boolean**] |  | (optional) defaults to true


### Return type

**Array<EventHandler>**

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

# **removeEventHandlerStatus**
> void removeEventHandlerStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventResourceApi(configuration);

let body:.EventResourceApiRemoveEventHandlerStatusRequest = {
  // string
  name: "name_example",
};

apiInstance.removeEventHandlerStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | defaults to undefined


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

# **updateEventHandler**
> void updateEventHandler(eventHandler)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventResourceApi(configuration);

let body:.EventResourceApiUpdateEventHandlerRequest = {
  // EventHandler
  eventHandler: {
    name: "name_example",
    event: "event_example",
    condition: "condition_example",
    actions: [
      {
        action: "start_workflow",
        startWorkflow: {
          name: "name_example",
          version: 1,
          correlationId: "correlationId_example",
          input: {
            "key": {},
          },
          taskToDomain: {
            "key": "key_example",
          },
        },
        completeTask: {
          workflowId: "workflowId_example",
          taskRefName: "taskRefName_example",
          output: {
            "key": {},
          },
          taskId: "taskId_example",
        },
        failTask: {
          workflowId: "workflowId_example",
          taskRefName: "taskRefName_example",
          output: {
            "key": {},
          },
          taskId: "taskId_example",
        },
        expandInlineJSON: true,
      },
    ],
    active: true,
    evaluatorType: "evaluatorType_example",
  },
};

apiInstance.updateEventHandler(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventHandler** | **EventHandler**|  |


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


