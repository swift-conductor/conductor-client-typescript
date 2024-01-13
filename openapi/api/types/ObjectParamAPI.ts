import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Action } from '../models/Action';
import { BulkResponse } from '../models/BulkResponse';
import { EventHandler } from '../models/EventHandler';
import { ExternalStorageLocation } from '../models/ExternalStorageLocation';
import { Health } from '../models/Health';
import { HealthCheckStatus } from '../models/HealthCheckStatus';
import { PollData } from '../models/PollData';
import { RerunWorkflowRequest } from '../models/RerunWorkflowRequest';
import { SearchResultTask } from '../models/SearchResultTask';
import { SearchResultTaskSummary } from '../models/SearchResultTaskSummary';
import { SearchResultWorkflow } from '../models/SearchResultWorkflow';
import { SearchResultWorkflowSummary } from '../models/SearchResultWorkflowSummary';
import { SkipTaskRequest } from '../models/SkipTaskRequest';
import { StartWorkflow } from '../models/StartWorkflow';
import { StartWorkflowRequest } from '../models/StartWorkflowRequest';
import { SubWorkflowParams } from '../models/SubWorkflowParams';
import { Task } from '../models/Task';
import { TaskDef } from '../models/TaskDef';
import { TaskDetails } from '../models/TaskDetails';
import { TaskExecLog } from '../models/TaskExecLog';
import { TaskMock } from '../models/TaskMock';
import { TaskResult } from '../models/TaskResult';
import { TaskSummary } from '../models/TaskSummary';
import { Workflow } from '../models/Workflow';
import { WorkflowDef } from '../models/WorkflowDef';
import { WorkflowSummary } from '../models/WorkflowSummary';
import { WorkflowTask } from '../models/WorkflowTask';
import { WorkflowTestRequest } from '../models/WorkflowTestRequest';

import { ObservableAdminResourceApi } from "./ObservableAPI";
import { AdminResourceApiRequestFactory, AdminResourceApiResponseProcessor} from "../apis/AdminResourceApi";

export interface AdminResourceApiGetAllConfigRequest {
}

export interface AdminResourceApiGetEventQueuesRequest {
    /**
     * 
     * @type boolean
     * @memberof AdminResourceApigetEventQueues
     */
    verbose?: boolean
}

export interface AdminResourceApiRequeueSweepRequest {
    /**
     * 
     * @type string
     * @memberof AdminResourceApirequeueSweep
     */
    workflowId: string
}

export interface AdminResourceApiVerifyAndRepairWorkflowConsistencyRequest {
    /**
     * 
     * @type string
     * @memberof AdminResourceApiverifyAndRepairWorkflowConsistency
     */
    workflowId: string
}

export interface AdminResourceApiViewRequest {
    /**
     * 
     * @type string
     * @memberof AdminResourceApiview
     */
    tasktype: string
    /**
     * 
     * @type number
     * @memberof AdminResourceApiview
     */
    start?: number
    /**
     * 
     * @type number
     * @memberof AdminResourceApiview
     */
    count?: number
}

export class ObjectAdminResourceApi {
    private api: ObservableAdminResourceApi

    public constructor(configuration: Configuration, requestFactory?: AdminResourceApiRequestFactory, responseProcessor?: AdminResourceApiResponseProcessor) {
        this.api = new ObservableAdminResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all the configuration parameters
     * @param param the request object
     */
    public getAllConfigWithHttpInfo(param: AdminResourceApiGetAllConfigRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        return this.api.getAllConfigWithHttpInfo( options).toPromise();
    }

    /**
     * Get all the configuration parameters
     * @param param the request object
     */
    public getAllConfig(param: AdminResourceApiGetAllConfigRequest = {}, options?: Configuration): Promise<{ [key: string]: any; }> {
        return this.api.getAllConfig( options).toPromise();
    }

    /**
     * Get registered queues
     * @param param the request object
     */
    public getEventQueuesWithHttpInfo(param: AdminResourceApiGetEventQueuesRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        return this.api.getEventQueuesWithHttpInfo(param.verbose,  options).toPromise();
    }

    /**
     * Get registered queues
     * @param param the request object
     */
    public getEventQueues(param: AdminResourceApiGetEventQueuesRequest = {}, options?: Configuration): Promise<{ [key: string]: any; }> {
        return this.api.getEventQueues(param.verbose,  options).toPromise();
    }

    /**
     * Queue up all the running workflows for sweep
     * @param param the request object
     */
    public requeueSweepWithHttpInfo(param: AdminResourceApiRequeueSweepRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.requeueSweepWithHttpInfo(param.workflowId,  options).toPromise();
    }

    /**
     * Queue up all the running workflows for sweep
     * @param param the request object
     */
    public requeueSweep(param: AdminResourceApiRequeueSweepRequest, options?: Configuration): Promise<string> {
        return this.api.requeueSweep(param.workflowId,  options).toPromise();
    }

    /**
     * Verify and repair workflow consistency
     * @param param the request object
     */
    public verifyAndRepairWorkflowConsistencyWithHttpInfo(param: AdminResourceApiVerifyAndRepairWorkflowConsistencyRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.verifyAndRepairWorkflowConsistencyWithHttpInfo(param.workflowId,  options).toPromise();
    }

    /**
     * Verify and repair workflow consistency
     * @param param the request object
     */
    public verifyAndRepairWorkflowConsistency(param: AdminResourceApiVerifyAndRepairWorkflowConsistencyRequest, options?: Configuration): Promise<string> {
        return this.api.verifyAndRepairWorkflowConsistency(param.workflowId,  options).toPromise();
    }

    /**
     * Get the list of pending tasks for a given task type
     * @param param the request object
     */
    public viewWithHttpInfo(param: AdminResourceApiViewRequest, options?: Configuration): Promise<HttpInfo<Array<Task>>> {
        return this.api.viewWithHttpInfo(param.tasktype, param.start, param.count,  options).toPromise();
    }

    /**
     * Get the list of pending tasks for a given task type
     * @param param the request object
     */
    public view(param: AdminResourceApiViewRequest, options?: Configuration): Promise<Array<Task>> {
        return this.api.view(param.tasktype, param.start, param.count,  options).toPromise();
    }

}

import { ObservableEventResourceApi } from "./ObservableAPI";
import { EventResourceApiRequestFactory, EventResourceApiResponseProcessor} from "../apis/EventResourceApi";

export interface EventResourceApiAddEventHandlerRequest {
    /**
     * 
     * @type EventHandler
     * @memberof EventResourceApiaddEventHandler
     */
    eventHandler: EventHandler
}

export interface EventResourceApiGetEventHandlersRequest {
}

export interface EventResourceApiGetEventHandlersForEventRequest {
    /**
     * 
     * @type string
     * @memberof EventResourceApigetEventHandlersForEvent
     */
    event: string
    /**
     * 
     * @type boolean
     * @memberof EventResourceApigetEventHandlersForEvent
     */
    activeOnly?: boolean
}

export interface EventResourceApiRemoveEventHandlerStatusRequest {
    /**
     * 
     * @type string
     * @memberof EventResourceApiremoveEventHandlerStatus
     */
    name: string
}

export interface EventResourceApiUpdateEventHandlerRequest {
    /**
     * 
     * @type EventHandler
     * @memberof EventResourceApiupdateEventHandler
     */
    eventHandler: EventHandler
}

export class ObjectEventResourceApi {
    private api: ObservableEventResourceApi

    public constructor(configuration: Configuration, requestFactory?: EventResourceApiRequestFactory, responseProcessor?: EventResourceApiResponseProcessor) {
        this.api = new ObservableEventResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new event handler.
     * @param param the request object
     */
    public addEventHandlerWithHttpInfo(param: EventResourceApiAddEventHandlerRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addEventHandlerWithHttpInfo(param.eventHandler,  options).toPromise();
    }

    /**
     * Add a new event handler.
     * @param param the request object
     */
    public addEventHandler(param: EventResourceApiAddEventHandlerRequest, options?: Configuration): Promise<void> {
        return this.api.addEventHandler(param.eventHandler,  options).toPromise();
    }

    /**
     * Get all the event handlers
     * @param param the request object
     */
    public getEventHandlersWithHttpInfo(param: EventResourceApiGetEventHandlersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<EventHandler>>> {
        return this.api.getEventHandlersWithHttpInfo( options).toPromise();
    }

    /**
     * Get all the event handlers
     * @param param the request object
     */
    public getEventHandlers(param: EventResourceApiGetEventHandlersRequest = {}, options?: Configuration): Promise<Array<EventHandler>> {
        return this.api.getEventHandlers( options).toPromise();
    }

    /**
     * Get event handlers for a given event
     * @param param the request object
     */
    public getEventHandlersForEventWithHttpInfo(param: EventResourceApiGetEventHandlersForEventRequest, options?: Configuration): Promise<HttpInfo<Array<EventHandler>>> {
        return this.api.getEventHandlersForEventWithHttpInfo(param.event, param.activeOnly,  options).toPromise();
    }

    /**
     * Get event handlers for a given event
     * @param param the request object
     */
    public getEventHandlersForEvent(param: EventResourceApiGetEventHandlersForEventRequest, options?: Configuration): Promise<Array<EventHandler>> {
        return this.api.getEventHandlersForEvent(param.event, param.activeOnly,  options).toPromise();
    }

    /**
     * Remove an event handler
     * @param param the request object
     */
    public removeEventHandlerStatusWithHttpInfo(param: EventResourceApiRemoveEventHandlerStatusRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeEventHandlerStatusWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Remove an event handler
     * @param param the request object
     */
    public removeEventHandlerStatus(param: EventResourceApiRemoveEventHandlerStatusRequest, options?: Configuration): Promise<void> {
        return this.api.removeEventHandlerStatus(param.name,  options).toPromise();
    }

    /**
     * Update an existing event handler.
     * @param param the request object
     */
    public updateEventHandlerWithHttpInfo(param: EventResourceApiUpdateEventHandlerRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateEventHandlerWithHttpInfo(param.eventHandler,  options).toPromise();
    }

    /**
     * Update an existing event handler.
     * @param param the request object
     */
    public updateEventHandler(param: EventResourceApiUpdateEventHandlerRequest, options?: Configuration): Promise<void> {
        return this.api.updateEventHandler(param.eventHandler,  options).toPromise();
    }

}

import { ObservableHealthCheckResourceApi } from "./ObservableAPI";
import { HealthCheckResourceApiRequestFactory, HealthCheckResourceApiResponseProcessor} from "../apis/HealthCheckResourceApi";

export interface HealthCheckResourceApiDoCheckRequest {
}

export class ObjectHealthCheckResourceApi {
    private api: ObservableHealthCheckResourceApi

    public constructor(configuration: Configuration, requestFactory?: HealthCheckResourceApiRequestFactory, responseProcessor?: HealthCheckResourceApiResponseProcessor) {
        this.api = new ObservableHealthCheckResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public doCheckWithHttpInfo(param: HealthCheckResourceApiDoCheckRequest = {}, options?: Configuration): Promise<HttpInfo<HealthCheckStatus>> {
        return this.api.doCheckWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public doCheck(param: HealthCheckResourceApiDoCheckRequest = {}, options?: Configuration): Promise<HealthCheckStatus> {
        return this.api.doCheck( options).toPromise();
    }

}

import { ObservableMetadataResourceApi } from "./ObservableAPI";
import { MetadataResourceApiRequestFactory, MetadataResourceApiResponseProcessor} from "../apis/MetadataResourceApi";

export interface MetadataResourceApiCreateRequest {
    /**
     * 
     * @type WorkflowDef
     * @memberof MetadataResourceApicreate
     */
    workflowDef: WorkflowDef
}

export interface MetadataResourceApiGetRequest {
    /**
     * 
     * @type string
     * @memberof MetadataResourceApiget
     */
    name: string
    /**
     * 
     * @type number
     * @memberof MetadataResourceApiget
     */
    version?: number
}

export interface MetadataResourceApiGetAllRequest {
}

export interface MetadataResourceApiGetAllWorkflowsWithLatestVersionsRequest {
}

export interface MetadataResourceApiGetTaskDefRequest {
    /**
     * 
     * @type string
     * @memberof MetadataResourceApigetTaskDef
     */
    tasktype: string
}

export interface MetadataResourceApiGetTaskDefsRequest {
}

export interface MetadataResourceApiGetWorkflowNamesAndVersionsRequest {
}

export interface MetadataResourceApiRegisterTaskDefRequest {
    /**
     * 
     * @type TaskDef
     * @memberof MetadataResourceApiregisterTaskDef
     */
    taskDef: TaskDef
}

export interface MetadataResourceApiRegisterTaskDef1Request {
    /**
     * 
     * @type Array&lt;TaskDef&gt;
     * @memberof MetadataResourceApiregisterTaskDef1
     */
    taskDef: Array<TaskDef>
}

export interface MetadataResourceApiUnregisterTaskDefRequest {
    /**
     * 
     * @type string
     * @memberof MetadataResourceApiunregisterTaskDef
     */
    tasktype: string
}

export interface MetadataResourceApiUnregisterWorkflowDefRequest {
    /**
     * 
     * @type string
     * @memberof MetadataResourceApiunregisterWorkflowDef
     */
    name: string
    /**
     * 
     * @type number
     * @memberof MetadataResourceApiunregisterWorkflowDef
     */
    version: number
}

export interface MetadataResourceApiUpdateRequest {
    /**
     * 
     * @type Array&lt;WorkflowDef&gt;
     * @memberof MetadataResourceApiupdate
     */
    workflowDef: Array<WorkflowDef>
}

export interface MetadataResourceApiValidateRequest {
    /**
     * 
     * @type WorkflowDef
     * @memberof MetadataResourceApivalidate
     */
    workflowDef: WorkflowDef
}

export class ObjectMetadataResourceApi {
    private api: ObservableMetadataResourceApi

    public constructor(configuration: Configuration, requestFactory?: MetadataResourceApiRequestFactory, responseProcessor?: MetadataResourceApiResponseProcessor) {
        this.api = new ObservableMetadataResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new workflow definition
     * @param param the request object
     */
    public createWithHttpInfo(param: MetadataResourceApiCreateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createWithHttpInfo(param.workflowDef,  options).toPromise();
    }

    /**
     * Create a new workflow definition
     * @param param the request object
     */
    public create(param: MetadataResourceApiCreateRequest, options?: Configuration): Promise<void> {
        return this.api.create(param.workflowDef,  options).toPromise();
    }

    /**
     * Retrieves workflow definition along with blueprint
     * @param param the request object
     */
    public getWithHttpInfo(param: MetadataResourceApiGetRequest, options?: Configuration): Promise<HttpInfo<WorkflowDef>> {
        return this.api.getWithHttpInfo(param.name, param.version,  options).toPromise();
    }

    /**
     * Retrieves workflow definition along with blueprint
     * @param param the request object
     */
    public get(param: MetadataResourceApiGetRequest, options?: Configuration): Promise<WorkflowDef> {
        return this.api.get(param.name, param.version,  options).toPromise();
    }

    /**
     * Retrieves all workflow definition along with blueprint
     * @param param the request object
     */
    public getAllWithHttpInfo(param: MetadataResourceApiGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<WorkflowDef>>> {
        return this.api.getAllWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves all workflow definition along with blueprint
     * @param param the request object
     */
    public getAll(param: MetadataResourceApiGetAllRequest = {}, options?: Configuration): Promise<Array<WorkflowDef>> {
        return this.api.getAll( options).toPromise();
    }

    /**
     * Returns only the latest version of all workflow definitions
     * @param param the request object
     */
    public getAllWorkflowsWithLatestVersionsWithHttpInfo(param: MetadataResourceApiGetAllWorkflowsWithLatestVersionsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<WorkflowDef>>> {
        return this.api.getAllWorkflowsWithLatestVersionsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns only the latest version of all workflow definitions
     * @param param the request object
     */
    public getAllWorkflowsWithLatestVersions(param: MetadataResourceApiGetAllWorkflowsWithLatestVersionsRequest = {}, options?: Configuration): Promise<Array<WorkflowDef>> {
        return this.api.getAllWorkflowsWithLatestVersions( options).toPromise();
    }

    /**
     * Gets the task definition
     * @param param the request object
     */
    public getTaskDefWithHttpInfo(param: MetadataResourceApiGetTaskDefRequest, options?: Configuration): Promise<HttpInfo<TaskDef>> {
        return this.api.getTaskDefWithHttpInfo(param.tasktype,  options).toPromise();
    }

    /**
     * Gets the task definition
     * @param param the request object
     */
    public getTaskDef(param: MetadataResourceApiGetTaskDefRequest, options?: Configuration): Promise<TaskDef> {
        return this.api.getTaskDef(param.tasktype,  options).toPromise();
    }

    /**
     * Gets all task definition
     * @param param the request object
     */
    public getTaskDefsWithHttpInfo(param: MetadataResourceApiGetTaskDefsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TaskDef>>> {
        return this.api.getTaskDefsWithHttpInfo( options).toPromise();
    }

    /**
     * Gets all task definition
     * @param param the request object
     */
    public getTaskDefs(param: MetadataResourceApiGetTaskDefsRequest = {}, options?: Configuration): Promise<Array<TaskDef>> {
        return this.api.getTaskDefs( options).toPromise();
    }

    /**
     * Returns workflow names and versions only (no definition bodies)
     * @param param the request object
     */
    public getWorkflowNamesAndVersionsWithHttpInfo(param: MetadataResourceApiGetWorkflowNamesAndVersionsRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        return this.api.getWorkflowNamesAndVersionsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns workflow names and versions only (no definition bodies)
     * @param param the request object
     */
    public getWorkflowNamesAndVersions(param: MetadataResourceApiGetWorkflowNamesAndVersionsRequest = {}, options?: Configuration): Promise<{ [key: string]: any; }> {
        return this.api.getWorkflowNamesAndVersions( options).toPromise();
    }

    /**
     * Update an existing task
     * @param param the request object
     */
    public registerTaskDefWithHttpInfo(param: MetadataResourceApiRegisterTaskDefRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.registerTaskDefWithHttpInfo(param.taskDef,  options).toPromise();
    }

    /**
     * Update an existing task
     * @param param the request object
     */
    public registerTaskDef(param: MetadataResourceApiRegisterTaskDefRequest, options?: Configuration): Promise<void> {
        return this.api.registerTaskDef(param.taskDef,  options).toPromise();
    }

    /**
     * Create new task definition(s)
     * @param param the request object
     */
    public registerTaskDef1WithHttpInfo(param: MetadataResourceApiRegisterTaskDef1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.registerTaskDef1WithHttpInfo(param.taskDef,  options).toPromise();
    }

    /**
     * Create new task definition(s)
     * @param param the request object
     */
    public registerTaskDef1(param: MetadataResourceApiRegisterTaskDef1Request, options?: Configuration): Promise<void> {
        return this.api.registerTaskDef1(param.taskDef,  options).toPromise();
    }

    /**
     * Remove a task definition
     * @param param the request object
     */
    public unregisterTaskDefWithHttpInfo(param: MetadataResourceApiUnregisterTaskDefRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.unregisterTaskDefWithHttpInfo(param.tasktype,  options).toPromise();
    }

    /**
     * Remove a task definition
     * @param param the request object
     */
    public unregisterTaskDef(param: MetadataResourceApiUnregisterTaskDefRequest, options?: Configuration): Promise<void> {
        return this.api.unregisterTaskDef(param.tasktype,  options).toPromise();
    }

    /**
     * Removes workflow definition. It does not remove workflows associated with the definition.
     * @param param the request object
     */
    public unregisterWorkflowDefWithHttpInfo(param: MetadataResourceApiUnregisterWorkflowDefRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.unregisterWorkflowDefWithHttpInfo(param.name, param.version,  options).toPromise();
    }

    /**
     * Removes workflow definition. It does not remove workflows associated with the definition.
     * @param param the request object
     */
    public unregisterWorkflowDef(param: MetadataResourceApiUnregisterWorkflowDefRequest, options?: Configuration): Promise<void> {
        return this.api.unregisterWorkflowDef(param.name, param.version,  options).toPromise();
    }

    /**
     * Create or update workflow definition
     * @param param the request object
     */
    public updateWithHttpInfo(param: MetadataResourceApiUpdateRequest, options?: Configuration): Promise<HttpInfo<BulkResponse>> {
        return this.api.updateWithHttpInfo(param.workflowDef,  options).toPromise();
    }

    /**
     * Create or update workflow definition
     * @param param the request object
     */
    public update(param: MetadataResourceApiUpdateRequest, options?: Configuration): Promise<BulkResponse> {
        return this.api.update(param.workflowDef,  options).toPromise();
    }

    /**
     * Validates a new workflow definition
     * @param param the request object
     */
    public validateWithHttpInfo(param: MetadataResourceApiValidateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.validateWithHttpInfo(param.workflowDef,  options).toPromise();
    }

    /**
     * Validates a new workflow definition
     * @param param the request object
     */
    public validate(param: MetadataResourceApiValidateRequest, options?: Configuration): Promise<void> {
        return this.api.validate(param.workflowDef,  options).toPromise();
    }

}

import { ObservableQueueAdminResourceApi } from "./ObservableAPI";
import { QueueAdminResourceApiRequestFactory, QueueAdminResourceApiResponseProcessor} from "../apis/QueueAdminResourceApi";

export interface QueueAdminResourceApiNamesRequest {
}

export interface QueueAdminResourceApiSize1Request {
}

export interface QueueAdminResourceApiUpdate1Request {
    /**
     * 
     * @type string
     * @memberof QueueAdminResourceApiupdate1
     */
    workflowId: string
    /**
     * 
     * @type string
     * @memberof QueueAdminResourceApiupdate1
     */
    taskRefName: string
    /**
     * 
     * @type &#39;IN_PROGRESS&#39; | &#39;CANCELED&#39; | &#39;FAILED&#39; | &#39;FAILED_WITH_TERMINAL_ERROR&#39; | &#39;COMPLETED&#39; | &#39;COMPLETED_WITH_ERRORS&#39; | &#39;SCHEDULED&#39; | &#39;TIMED_OUT&#39; | &#39;SKIPPED&#39;
     * @memberof QueueAdminResourceApiupdate1
     */
    status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED'
    /**
     * 
     * @type { [key: string]: any; }
     * @memberof QueueAdminResourceApiupdate1
     */
    requestBody: { [key: string]: any; }
}

export interface QueueAdminResourceApiUpdateByTaskIdRequest {
    /**
     * 
     * @type string
     * @memberof QueueAdminResourceApiupdateByTaskId
     */
    workflowId: string
    /**
     * 
     * @type string
     * @memberof QueueAdminResourceApiupdateByTaskId
     */
    taskId: string
    /**
     * 
     * @type &#39;IN_PROGRESS&#39; | &#39;CANCELED&#39; | &#39;FAILED&#39; | &#39;FAILED_WITH_TERMINAL_ERROR&#39; | &#39;COMPLETED&#39; | &#39;COMPLETED_WITH_ERRORS&#39; | &#39;SCHEDULED&#39; | &#39;TIMED_OUT&#39; | &#39;SKIPPED&#39;
     * @memberof QueueAdminResourceApiupdateByTaskId
     */
    status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED'
    /**
     * 
     * @type { [key: string]: any; }
     * @memberof QueueAdminResourceApiupdateByTaskId
     */
    requestBody: { [key: string]: any; }
}

export class ObjectQueueAdminResourceApi {
    private api: ObservableQueueAdminResourceApi

    public constructor(configuration: Configuration, requestFactory?: QueueAdminResourceApiRequestFactory, responseProcessor?: QueueAdminResourceApiResponseProcessor) {
        this.api = new ObservableQueueAdminResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Queue Names
     * @param param the request object
     */
    public namesWithHttpInfo(param: QueueAdminResourceApiNamesRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: string; }>> {
        return this.api.namesWithHttpInfo( options).toPromise();
    }

    /**
     * Get Queue Names
     * @param param the request object
     */
    public names(param: QueueAdminResourceApiNamesRequest = {}, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.names( options).toPromise();
    }

    /**
     * Get the queue length
     * @param param the request object
     */
    public size1WithHttpInfo(param: QueueAdminResourceApiSize1Request = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        return this.api.size1WithHttpInfo( options).toPromise();
    }

    /**
     * Get the queue length
     * @param param the request object
     */
    public size1(param: QueueAdminResourceApiSize1Request = {}, options?: Configuration): Promise<{ [key: string]: number; }> {
        return this.api.size1( options).toPromise();
    }

    /**
     * Publish a message in queue to mark a wait task as completed.
     * @param param the request object
     */
    public update1WithHttpInfo(param: QueueAdminResourceApiUpdate1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.update1WithHttpInfo(param.workflowId, param.taskRefName, param.status, param.requestBody,  options).toPromise();
    }

    /**
     * Publish a message in queue to mark a wait task as completed.
     * @param param the request object
     */
    public update1(param: QueueAdminResourceApiUpdate1Request, options?: Configuration): Promise<void> {
        return this.api.update1(param.workflowId, param.taskRefName, param.status, param.requestBody,  options).toPromise();
    }

    /**
     * Publish a message in queue to mark a wait task (by taskId) as completed.
     * @param param the request object
     */
    public updateByTaskIdWithHttpInfo(param: QueueAdminResourceApiUpdateByTaskIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateByTaskIdWithHttpInfo(param.workflowId, param.taskId, param.status, param.requestBody,  options).toPromise();
    }

    /**
     * Publish a message in queue to mark a wait task (by taskId) as completed.
     * @param param the request object
     */
    public updateByTaskId(param: QueueAdminResourceApiUpdateByTaskIdRequest, options?: Configuration): Promise<void> {
        return this.api.updateByTaskId(param.workflowId, param.taskId, param.status, param.requestBody,  options).toPromise();
    }

}

import { ObservableTaskResourceApi } from "./ObservableAPI";
import { TaskResourceApiRequestFactory, TaskResourceApiResponseProcessor} from "../apis/TaskResourceApi";

export interface TaskResourceApiAllRequest {
}

export interface TaskResourceApiAllVerboseRequest {
}

export interface TaskResourceApiBatchPollRequest {
    /**
     * 
     * @type string
     * @memberof TaskResourceApibatchPoll
     */
    tasktype: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApibatchPoll
     */
    workerid?: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApibatchPoll
     */
    domain?: string
    /**
     * 
     * @type number
     * @memberof TaskResourceApibatchPoll
     */
    count?: number
    /**
     * 
     * @type number
     * @memberof TaskResourceApibatchPoll
     */
    timeout?: number
}

export interface TaskResourceApiGetAllPollDataRequest {
}

export interface TaskResourceApiGetExternalStorageLocation2Request {
    /**
     * 
     * @type string
     * @memberof TaskResourceApigetExternalStorageLocation2
     */
    path: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApigetExternalStorageLocation2
     */
    operation: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApigetExternalStorageLocation2
     */
    payloadType: string
}

export interface TaskResourceApiGetPollDataRequest {
    /**
     * 
     * @type string
     * @memberof TaskResourceApigetPollData
     */
    taskType: string
}

export interface TaskResourceApiGetTaskRequest {
    /**
     * 
     * @type string
     * @memberof TaskResourceApigetTask
     */
    taskId: string
}

export interface TaskResourceApiGetTaskLogsRequest {
    /**
     * 
     * @type string
     * @memberof TaskResourceApigetTaskLogs
     */
    taskId: string
}

export interface TaskResourceApiLogRequest {
    /**
     * 
     * @type string
     * @memberof TaskResourceApilog
     */
    taskId: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApilog
     */
    body: string
}

export interface TaskResourceApiPollRequest {
    /**
     * 
     * @type string
     * @memberof TaskResourceApipoll
     */
    tasktype: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApipoll
     */
    workerid?: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApipoll
     */
    domain?: string
}

export interface TaskResourceApiRequeuePendingTaskRequest {
    /**
     * 
     * @type string
     * @memberof TaskResourceApirequeuePendingTask
     */
    taskType: string
}

export interface TaskResourceApiSearch1Request {
    /**
     * 
     * @type number
     * @memberof TaskResourceApisearch1
     */
    start?: number
    /**
     * 
     * @type number
     * @memberof TaskResourceApisearch1
     */
    size?: number
    /**
     * 
     * @type string
     * @memberof TaskResourceApisearch1
     */
    sort?: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApisearch1
     */
    freeText?: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApisearch1
     */
    query?: string
}

export interface TaskResourceApiSearchV21Request {
    /**
     * 
     * @type number
     * @memberof TaskResourceApisearchV21
     */
    start?: number
    /**
     * 
     * @type number
     * @memberof TaskResourceApisearchV21
     */
    size?: number
    /**
     * 
     * @type string
     * @memberof TaskResourceApisearchV21
     */
    sort?: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApisearchV21
     */
    freeText?: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApisearchV21
     */
    query?: string
}

export interface TaskResourceApiSizeRequest {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof TaskResourceApisize
     */
    taskType?: Array<string>
}

export interface TaskResourceApiTaskDepthRequest {
    /**
     * 
     * @type string
     * @memberof TaskResourceApitaskDepth
     */
    taskType: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApitaskDepth
     */
    domain?: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApitaskDepth
     */
    isolationGroupId?: string
    /**
     * 
     * @type string
     * @memberof TaskResourceApitaskDepth
     */
    executionNamespace?: string
}

export interface TaskResourceApiUpdateTaskRequest {
    /**
     * 
     * @type TaskResult
     * @memberof TaskResourceApiupdateTask
     */
    taskResult: TaskResult
}

export class ObjectTaskResourceApi {
    private api: ObservableTaskResourceApi

    public constructor(configuration: Configuration, requestFactory?: TaskResourceApiRequestFactory, responseProcessor?: TaskResourceApiResponseProcessor) {
        this.api = new ObservableTaskResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the details about each queue
     * @param param the request object
     */
    public allWithHttpInfo(param: TaskResourceApiAllRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        return this.api.allWithHttpInfo( options).toPromise();
    }

    /**
     * Get the details about each queue
     * @param param the request object
     */
    public all(param: TaskResourceApiAllRequest = {}, options?: Configuration): Promise<{ [key: string]: number; }> {
        return this.api.all( options).toPromise();
    }

    /**
     * Get the details about each queue
     * @param param the request object
     */
    public allVerboseWithHttpInfo(param: TaskResourceApiAllVerboseRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: { [key: string]: { [key: string]: number; }; }; }>> {
        return this.api.allVerboseWithHttpInfo( options).toPromise();
    }

    /**
     * Get the details about each queue
     * @param param the request object
     */
    public allVerbose(param: TaskResourceApiAllVerboseRequest = {}, options?: Configuration): Promise<{ [key: string]: { [key: string]: { [key: string]: number; }; }; }> {
        return this.api.allVerbose( options).toPromise();
    }

    /**
     * Batch poll for a task of a certain type
     * @param param the request object
     */
    public batchPollWithHttpInfo(param: TaskResourceApiBatchPollRequest, options?: Configuration): Promise<HttpInfo<Array<Task>>> {
        return this.api.batchPollWithHttpInfo(param.tasktype, param.workerid, param.domain, param.count, param.timeout,  options).toPromise();
    }

    /**
     * Batch poll for a task of a certain type
     * @param param the request object
     */
    public batchPoll(param: TaskResourceApiBatchPollRequest, options?: Configuration): Promise<Array<Task>> {
        return this.api.batchPoll(param.tasktype, param.workerid, param.domain, param.count, param.timeout,  options).toPromise();
    }

    /**
     * Get the last poll data for all task types
     * @param param the request object
     */
    public getAllPollDataWithHttpInfo(param: TaskResourceApiGetAllPollDataRequest = {}, options?: Configuration): Promise<HttpInfo<Array<PollData>>> {
        return this.api.getAllPollDataWithHttpInfo( options).toPromise();
    }

    /**
     * Get the last poll data for all task types
     * @param param the request object
     */
    public getAllPollData(param: TaskResourceApiGetAllPollDataRequest = {}, options?: Configuration): Promise<Array<PollData>> {
        return this.api.getAllPollData( options).toPromise();
    }

    /**
     * Get the external uri where the task payload is to be stored
     * @param param the request object
     */
    public getExternalStorageLocation2WithHttpInfo(param: TaskResourceApiGetExternalStorageLocation2Request, options?: Configuration): Promise<HttpInfo<ExternalStorageLocation>> {
        return this.api.getExternalStorageLocation2WithHttpInfo(param.path, param.operation, param.payloadType,  options).toPromise();
    }

    /**
     * Get the external uri where the task payload is to be stored
     * @param param the request object
     */
    public getExternalStorageLocation2(param: TaskResourceApiGetExternalStorageLocation2Request, options?: Configuration): Promise<ExternalStorageLocation> {
        return this.api.getExternalStorageLocation2(param.path, param.operation, param.payloadType,  options).toPromise();
    }

    /**
     * Get the last poll data for a given task type
     * @param param the request object
     */
    public getPollDataWithHttpInfo(param: TaskResourceApiGetPollDataRequest, options?: Configuration): Promise<HttpInfo<Array<PollData>>> {
        return this.api.getPollDataWithHttpInfo(param.taskType,  options).toPromise();
    }

    /**
     * Get the last poll data for a given task type
     * @param param the request object
     */
    public getPollData(param: TaskResourceApiGetPollDataRequest, options?: Configuration): Promise<Array<PollData>> {
        return this.api.getPollData(param.taskType,  options).toPromise();
    }

    /**
     * Get task by Id
     * @param param the request object
     */
    public getTaskWithHttpInfo(param: TaskResourceApiGetTaskRequest, options?: Configuration): Promise<HttpInfo<Task>> {
        return this.api.getTaskWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Get task by Id
     * @param param the request object
     */
    public getTask(param: TaskResourceApiGetTaskRequest, options?: Configuration): Promise<Task> {
        return this.api.getTask(param.taskId,  options).toPromise();
    }

    /**
     * Get Task Execution Logs
     * @param param the request object
     */
    public getTaskLogsWithHttpInfo(param: TaskResourceApiGetTaskLogsRequest, options?: Configuration): Promise<HttpInfo<Array<TaskExecLog>>> {
        return this.api.getTaskLogsWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Get Task Execution Logs
     * @param param the request object
     */
    public getTaskLogs(param: TaskResourceApiGetTaskLogsRequest, options?: Configuration): Promise<Array<TaskExecLog>> {
        return this.api.getTaskLogs(param.taskId,  options).toPromise();
    }

    /**
     * Log Task Execution Details
     * @param param the request object
     */
    public logWithHttpInfo(param: TaskResourceApiLogRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.logWithHttpInfo(param.taskId, param.body,  options).toPromise();
    }

    /**
     * Log Task Execution Details
     * @param param the request object
     */
    public log(param: TaskResourceApiLogRequest, options?: Configuration): Promise<void> {
        return this.api.log(param.taskId, param.body,  options).toPromise();
    }

    /**
     * Poll for a task of a certain type
     * @param param the request object
     */
    public pollWithHttpInfo(param: TaskResourceApiPollRequest, options?: Configuration): Promise<HttpInfo<Task>> {
        return this.api.pollWithHttpInfo(param.tasktype, param.workerid, param.domain,  options).toPromise();
    }

    /**
     * Poll for a task of a certain type
     * @param param the request object
     */
    public poll(param: TaskResourceApiPollRequest, options?: Configuration): Promise<Task> {
        return this.api.poll(param.tasktype, param.workerid, param.domain,  options).toPromise();
    }

    /**
     * Requeue pending tasks
     * @param param the request object
     */
    public requeuePendingTaskWithHttpInfo(param: TaskResourceApiRequeuePendingTaskRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.requeuePendingTaskWithHttpInfo(param.taskType,  options).toPromise();
    }

    /**
     * Requeue pending tasks
     * @param param the request object
     */
    public requeuePendingTask(param: TaskResourceApiRequeuePendingTaskRequest, options?: Configuration): Promise<string> {
        return this.api.requeuePendingTask(param.taskType,  options).toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for tasks based in payload and other parameters
     * @param param the request object
     */
    public search1WithHttpInfo(param: TaskResourceApiSearch1Request = {}, options?: Configuration): Promise<HttpInfo<SearchResultTaskSummary>> {
        return this.api.search1WithHttpInfo(param.start, param.size, param.sort, param.freeText, param.query,  options).toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for tasks based in payload and other parameters
     * @param param the request object
     */
    public search1(param: TaskResourceApiSearch1Request = {}, options?: Configuration): Promise<SearchResultTaskSummary> {
        return this.api.search1(param.start, param.size, param.sort, param.freeText, param.query,  options).toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for tasks based in payload and other parameters
     * @param param the request object
     */
    public searchV21WithHttpInfo(param: TaskResourceApiSearchV21Request = {}, options?: Configuration): Promise<HttpInfo<SearchResultTask>> {
        return this.api.searchV21WithHttpInfo(param.start, param.size, param.sort, param.freeText, param.query,  options).toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for tasks based in payload and other parameters
     * @param param the request object
     */
    public searchV21(param: TaskResourceApiSearchV21Request = {}, options?: Configuration): Promise<SearchResultTask> {
        return this.api.searchV21(param.start, param.size, param.sort, param.freeText, param.query,  options).toPromise();
    }

    /**
     * Deprecated. Please use /tasks/queue/size endpoint
     * @param param the request object
     */
    public sizeWithHttpInfo(param: TaskResourceApiSizeRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        return this.api.sizeWithHttpInfo(param.taskType,  options).toPromise();
    }

    /**
     * Deprecated. Please use /tasks/queue/size endpoint
     * @param param the request object
     */
    public size(param: TaskResourceApiSizeRequest = {}, options?: Configuration): Promise<{ [key: string]: number; }> {
        return this.api.size(param.taskType,  options).toPromise();
    }

    /**
     * Get queue size for a task type.
     * @param param the request object
     */
    public taskDepthWithHttpInfo(param: TaskResourceApiTaskDepthRequest, options?: Configuration): Promise<HttpInfo<number>> {
        return this.api.taskDepthWithHttpInfo(param.taskType, param.domain, param.isolationGroupId, param.executionNamespace,  options).toPromise();
    }

    /**
     * Get queue size for a task type.
     * @param param the request object
     */
    public taskDepth(param: TaskResourceApiTaskDepthRequest, options?: Configuration): Promise<number> {
        return this.api.taskDepth(param.taskType, param.domain, param.isolationGroupId, param.executionNamespace,  options).toPromise();
    }

    /**
     * Update a task
     * @param param the request object
     */
    public updateTaskWithHttpInfo(param: TaskResourceApiUpdateTaskRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.updateTaskWithHttpInfo(param.taskResult,  options).toPromise();
    }

    /**
     * Update a task
     * @param param the request object
     */
    public updateTask(param: TaskResourceApiUpdateTaskRequest, options?: Configuration): Promise<string> {
        return this.api.updateTask(param.taskResult,  options).toPromise();
    }

}

import { ObservableWorkflowBulkResourceApi } from "./ObservableAPI";
import { WorkflowBulkResourceApiRequestFactory, WorkflowBulkResourceApiResponseProcessor} from "../apis/WorkflowBulkResourceApi";

export interface WorkflowBulkResourceApiPauseWorkflow1Request {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof WorkflowBulkResourceApipauseWorkflow1
     */
    requestBody: Array<string>
}

export interface WorkflowBulkResourceApiRestart1Request {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof WorkflowBulkResourceApirestart1
     */
    requestBody: Array<string>
    /**
     * 
     * @type boolean
     * @memberof WorkflowBulkResourceApirestart1
     */
    useLatestDefinitions?: boolean
}

export interface WorkflowBulkResourceApiResumeWorkflow1Request {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof WorkflowBulkResourceApiresumeWorkflow1
     */
    requestBody: Array<string>
}

export interface WorkflowBulkResourceApiRetry1Request {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof WorkflowBulkResourceApiretry1
     */
    requestBody: Array<string>
}

export interface WorkflowBulkResourceApiTerminateRequest {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof WorkflowBulkResourceApiterminate
     */
    requestBody: Array<string>
    /**
     * 
     * @type string
     * @memberof WorkflowBulkResourceApiterminate
     */
    reason?: string
}

export class ObjectWorkflowBulkResourceApi {
    private api: ObservableWorkflowBulkResourceApi

    public constructor(configuration: Configuration, requestFactory?: WorkflowBulkResourceApiRequestFactory, responseProcessor?: WorkflowBulkResourceApiResponseProcessor) {
        this.api = new ObservableWorkflowBulkResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Pause the list of workflows
     * @param param the request object
     */
    public pauseWorkflow1WithHttpInfo(param: WorkflowBulkResourceApiPauseWorkflow1Request, options?: Configuration): Promise<HttpInfo<BulkResponse>> {
        return this.api.pauseWorkflow1WithHttpInfo(param.requestBody,  options).toPromise();
    }

    /**
     * Pause the list of workflows
     * @param param the request object
     */
    public pauseWorkflow1(param: WorkflowBulkResourceApiPauseWorkflow1Request, options?: Configuration): Promise<BulkResponse> {
        return this.api.pauseWorkflow1(param.requestBody,  options).toPromise();
    }

    /**
     * Restart the list of completed workflow
     * @param param the request object
     */
    public restart1WithHttpInfo(param: WorkflowBulkResourceApiRestart1Request, options?: Configuration): Promise<HttpInfo<BulkResponse>> {
        return this.api.restart1WithHttpInfo(param.requestBody, param.useLatestDefinitions,  options).toPromise();
    }

    /**
     * Restart the list of completed workflow
     * @param param the request object
     */
    public restart1(param: WorkflowBulkResourceApiRestart1Request, options?: Configuration): Promise<BulkResponse> {
        return this.api.restart1(param.requestBody, param.useLatestDefinitions,  options).toPromise();
    }

    /**
     * Resume the list of workflows
     * @param param the request object
     */
    public resumeWorkflow1WithHttpInfo(param: WorkflowBulkResourceApiResumeWorkflow1Request, options?: Configuration): Promise<HttpInfo<BulkResponse>> {
        return this.api.resumeWorkflow1WithHttpInfo(param.requestBody,  options).toPromise();
    }

    /**
     * Resume the list of workflows
     * @param param the request object
     */
    public resumeWorkflow1(param: WorkflowBulkResourceApiResumeWorkflow1Request, options?: Configuration): Promise<BulkResponse> {
        return this.api.resumeWorkflow1(param.requestBody,  options).toPromise();
    }

    /**
     * Retry the last failed task for each workflow from the list
     * @param param the request object
     */
    public retry1WithHttpInfo(param: WorkflowBulkResourceApiRetry1Request, options?: Configuration): Promise<HttpInfo<BulkResponse>> {
        return this.api.retry1WithHttpInfo(param.requestBody,  options).toPromise();
    }

    /**
     * Retry the last failed task for each workflow from the list
     * @param param the request object
     */
    public retry1(param: WorkflowBulkResourceApiRetry1Request, options?: Configuration): Promise<BulkResponse> {
        return this.api.retry1(param.requestBody,  options).toPromise();
    }

    /**
     * Terminate workflows execution
     * @param param the request object
     */
    public terminateWithHttpInfo(param: WorkflowBulkResourceApiTerminateRequest, options?: Configuration): Promise<HttpInfo<BulkResponse>> {
        return this.api.terminateWithHttpInfo(param.requestBody, param.reason,  options).toPromise();
    }

    /**
     * Terminate workflows execution
     * @param param the request object
     */
    public terminate(param: WorkflowBulkResourceApiTerminateRequest, options?: Configuration): Promise<BulkResponse> {
        return this.api.terminate(param.requestBody, param.reason,  options).toPromise();
    }

}

import { ObservableWorkflowResourceApi } from "./ObservableAPI";
import { WorkflowResourceApiRequestFactory, WorkflowResourceApiResponseProcessor} from "../apis/WorkflowResourceApi";

export interface WorkflowResourceApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApi_delete
     */
    workflowId: string
    /**
     * 
     * @type boolean
     * @memberof WorkflowResourceApi_delete
     */
    archiveWorkflow?: boolean
}

export interface WorkflowResourceApiDecideRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApidecide
     */
    workflowId: string
}

export interface WorkflowResourceApiGetExecutionStatusRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApigetExecutionStatus
     */
    workflowId: string
    /**
     * 
     * @type boolean
     * @memberof WorkflowResourceApigetExecutionStatus
     */
    includeTasks?: boolean
}

export interface WorkflowResourceApiGetExternalStorageLocationRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApigetExternalStorageLocation
     */
    path: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApigetExternalStorageLocation
     */
    operation: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApigetExternalStorageLocation
     */
    payloadType: string
}

export interface WorkflowResourceApiGetExternalStorageLocation1Request {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApigetExternalStorageLocation1
     */
    path: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApigetExternalStorageLocation1
     */
    operation: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApigetExternalStorageLocation1
     */
    payloadType: string
}

export interface WorkflowResourceApiGetRunningWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApigetRunningWorkflow
     */
    name: string
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApigetRunningWorkflow
     */
    version?: number
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApigetRunningWorkflow
     */
    startTime?: number
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApigetRunningWorkflow
     */
    endTime?: number
}

export interface WorkflowResourceApiGetWorkflowsRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApigetWorkflows
     */
    name: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof WorkflowResourceApigetWorkflows
     */
    requestBody: Array<string>
    /**
     * 
     * @type boolean
     * @memberof WorkflowResourceApigetWorkflows
     */
    includeClosed?: boolean
    /**
     * 
     * @type boolean
     * @memberof WorkflowResourceApigetWorkflows
     */
    includeTasks?: boolean
}

export interface WorkflowResourceApiGetWorkflows1Request {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApigetWorkflows1
     */
    name: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApigetWorkflows1
     */
    correlationId: string
    /**
     * 
     * @type boolean
     * @memberof WorkflowResourceApigetWorkflows1
     */
    includeClosed?: boolean
    /**
     * 
     * @type boolean
     * @memberof WorkflowResourceApigetWorkflows1
     */
    includeTasks?: boolean
}

export interface WorkflowResourceApiPauseWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApipauseWorkflow
     */
    workflowId: string
}

export interface WorkflowResourceApiRerunRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApirerun
     */
    workflowId: string
    /**
     * 
     * @type RerunWorkflowRequest
     * @memberof WorkflowResourceApirerun
     */
    rerunWorkflowRequest: RerunWorkflowRequest
}

export interface WorkflowResourceApiResetWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApiresetWorkflow
     */
    workflowId: string
}

export interface WorkflowResourceApiRestartRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApirestart
     */
    workflowId: string
    /**
     * 
     * @type boolean
     * @memberof WorkflowResourceApirestart
     */
    useLatestDefinitions?: boolean
}

export interface WorkflowResourceApiResumeWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApiresumeWorkflow
     */
    workflowId: string
}

export interface WorkflowResourceApiRetryRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApiretry
     */
    workflowId: string
    /**
     * 
     * @type boolean
     * @memberof WorkflowResourceApiretry
     */
    resumeSubworkflowTasks?: boolean
}

export interface WorkflowResourceApiSearchRequest {
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApisearch
     */
    start?: number
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApisearch
     */
    size?: number
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApisearch
     */
    sort?: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApisearch
     */
    freeText?: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApisearch
     */
    query?: string
}

export interface WorkflowResourceApiSearchV2Request {
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApisearchV2
     */
    start?: number
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApisearchV2
     */
    size?: number
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApisearchV2
     */
    sort?: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApisearchV2
     */
    freeText?: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApisearchV2
     */
    query?: string
}

export interface WorkflowResourceApiSearchWorkflowsByTasksRequest {
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApisearchWorkflowsByTasks
     */
    start?: number
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApisearchWorkflowsByTasks
     */
    size?: number
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApisearchWorkflowsByTasks
     */
    sort?: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApisearchWorkflowsByTasks
     */
    freeText?: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApisearchWorkflowsByTasks
     */
    query?: string
}

export interface WorkflowResourceApiSearchWorkflowsByTasksV2Request {
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApisearchWorkflowsByTasksV2
     */
    start?: number
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApisearchWorkflowsByTasksV2
     */
    size?: number
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApisearchWorkflowsByTasksV2
     */
    sort?: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApisearchWorkflowsByTasksV2
     */
    freeText?: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApisearchWorkflowsByTasksV2
     */
    query?: string
}

export interface WorkflowResourceApiSkipTaskFromWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApiskipTaskFromWorkflow
     */
    workflowId: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApiskipTaskFromWorkflow
     */
    taskReferenceName: string
    /**
     * 
     * @type SkipTaskRequest
     * @memberof WorkflowResourceApiskipTaskFromWorkflow
     */
    skipTaskRequest: SkipTaskRequest
}

export interface WorkflowResourceApiStartWorkflowRequest {
    /**
     * 
     * @type StartWorkflowRequest
     * @memberof WorkflowResourceApistartWorkflow
     */
    startWorkflowRequest: StartWorkflowRequest
}

export interface WorkflowResourceApiStartWorkflow1Request {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApistartWorkflow1
     */
    name: string
    /**
     * 
     * @type { [key: string]: any; }
     * @memberof WorkflowResourceApistartWorkflow1
     */
    requestBody: { [key: string]: any; }
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApistartWorkflow1
     */
    version?: number
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApistartWorkflow1
     */
    correlationId?: string
    /**
     * 
     * @type number
     * @memberof WorkflowResourceApistartWorkflow1
     */
    priority?: number
}

export interface WorkflowResourceApiTerminate1Request {
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApiterminate1
     */
    workflowId: string
    /**
     * 
     * @type string
     * @memberof WorkflowResourceApiterminate1
     */
    reason?: string
    /**
     * 
     * @type boolean
     * @memberof WorkflowResourceApiterminate1
     */
    triggerFailureWorkflow?: boolean
}

export interface WorkflowResourceApiTestWorkflowRequest {
    /**
     * 
     * @type WorkflowTestRequest
     * @memberof WorkflowResourceApitestWorkflow
     */
    workflowTestRequest: WorkflowTestRequest
}

export class ObjectWorkflowResourceApi {
    private api: ObservableWorkflowResourceApi

    public constructor(configuration: Configuration, requestFactory?: WorkflowResourceApiRequestFactory, responseProcessor?: WorkflowResourceApiResponseProcessor) {
        this.api = new ObservableWorkflowResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes the workflow from the system
     * @param param the request object
     */
    public _deleteWithHttpInfo(param: WorkflowResourceApiDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api._deleteWithHttpInfo(param.workflowId, param.archiveWorkflow,  options).toPromise();
    }

    /**
     * Removes the workflow from the system
     * @param param the request object
     */
    public _delete(param: WorkflowResourceApiDeleteRequest, options?: Configuration): Promise<void> {
        return this.api._delete(param.workflowId, param.archiveWorkflow,  options).toPromise();
    }

    /**
     * Starts the decision task for a workflow
     * @param param the request object
     */
    public decideWithHttpInfo(param: WorkflowResourceApiDecideRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.decideWithHttpInfo(param.workflowId,  options).toPromise();
    }

    /**
     * Starts the decision task for a workflow
     * @param param the request object
     */
    public decide(param: WorkflowResourceApiDecideRequest, options?: Configuration): Promise<void> {
        return this.api.decide(param.workflowId,  options).toPromise();
    }

    /**
     * Gets the workflow by workflow id
     * @param param the request object
     */
    public getExecutionStatusWithHttpInfo(param: WorkflowResourceApiGetExecutionStatusRequest, options?: Configuration): Promise<HttpInfo<Workflow>> {
        return this.api.getExecutionStatusWithHttpInfo(param.workflowId, param.includeTasks,  options).toPromise();
    }

    /**
     * Gets the workflow by workflow id
     * @param param the request object
     */
    public getExecutionStatus(param: WorkflowResourceApiGetExecutionStatusRequest, options?: Configuration): Promise<Workflow> {
        return this.api.getExecutionStatus(param.workflowId, param.includeTasks,  options).toPromise();
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param param the request object
     */
    public getExternalStorageLocationWithHttpInfo(param: WorkflowResourceApiGetExternalStorageLocationRequest, options?: Configuration): Promise<HttpInfo<ExternalStorageLocation>> {
        return this.api.getExternalStorageLocationWithHttpInfo(param.path, param.operation, param.payloadType,  options).toPromise();
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param param the request object
     */
    public getExternalStorageLocation(param: WorkflowResourceApiGetExternalStorageLocationRequest, options?: Configuration): Promise<ExternalStorageLocation> {
        return this.api.getExternalStorageLocation(param.path, param.operation, param.payloadType,  options).toPromise();
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param param the request object
     */
    public getExternalStorageLocation1WithHttpInfo(param: WorkflowResourceApiGetExternalStorageLocation1Request, options?: Configuration): Promise<HttpInfo<ExternalStorageLocation>> {
        return this.api.getExternalStorageLocation1WithHttpInfo(param.path, param.operation, param.payloadType,  options).toPromise();
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param param the request object
     */
    public getExternalStorageLocation1(param: WorkflowResourceApiGetExternalStorageLocation1Request, options?: Configuration): Promise<ExternalStorageLocation> {
        return this.api.getExternalStorageLocation1(param.path, param.operation, param.payloadType,  options).toPromise();
    }

    /**
     * Retrieve all the running workflows
     * @param param the request object
     */
    public getRunningWorkflowWithHttpInfo(param: WorkflowResourceApiGetRunningWorkflowRequest, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.getRunningWorkflowWithHttpInfo(param.name, param.version, param.startTime, param.endTime,  options).toPromise();
    }

    /**
     * Retrieve all the running workflows
     * @param param the request object
     */
    public getRunningWorkflow(param: WorkflowResourceApiGetRunningWorkflowRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.getRunningWorkflow(param.name, param.version, param.startTime, param.endTime,  options).toPromise();
    }

    /**
     * Lists workflows for the given correlation id list
     * @param param the request object
     */
    public getWorkflowsWithHttpInfo(param: WorkflowResourceApiGetWorkflowsRequest, options?: Configuration): Promise<HttpInfo<{ [key: string]: Array<Workflow>; }>> {
        return this.api.getWorkflowsWithHttpInfo(param.name, param.requestBody, param.includeClosed, param.includeTasks,  options).toPromise();
    }

    /**
     * Lists workflows for the given correlation id list
     * @param param the request object
     */
    public getWorkflows(param: WorkflowResourceApiGetWorkflowsRequest, options?: Configuration): Promise<{ [key: string]: Array<Workflow>; }> {
        return this.api.getWorkflows(param.name, param.requestBody, param.includeClosed, param.includeTasks,  options).toPromise();
    }

    /**
     * Lists workflows for the given correlation id
     * @param param the request object
     */
    public getWorkflows1WithHttpInfo(param: WorkflowResourceApiGetWorkflows1Request, options?: Configuration): Promise<HttpInfo<Array<Workflow>>> {
        return this.api.getWorkflows1WithHttpInfo(param.name, param.correlationId, param.includeClosed, param.includeTasks,  options).toPromise();
    }

    /**
     * Lists workflows for the given correlation id
     * @param param the request object
     */
    public getWorkflows1(param: WorkflowResourceApiGetWorkflows1Request, options?: Configuration): Promise<Array<Workflow>> {
        return this.api.getWorkflows1(param.name, param.correlationId, param.includeClosed, param.includeTasks,  options).toPromise();
    }

    /**
     * Pauses the workflow
     * @param param the request object
     */
    public pauseWorkflowWithHttpInfo(param: WorkflowResourceApiPauseWorkflowRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pauseWorkflowWithHttpInfo(param.workflowId,  options).toPromise();
    }

    /**
     * Pauses the workflow
     * @param param the request object
     */
    public pauseWorkflow(param: WorkflowResourceApiPauseWorkflowRequest, options?: Configuration): Promise<void> {
        return this.api.pauseWorkflow(param.workflowId,  options).toPromise();
    }

    /**
     * Reruns the workflow from a specific task
     * @param param the request object
     */
    public rerunWithHttpInfo(param: WorkflowResourceApiRerunRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.rerunWithHttpInfo(param.workflowId, param.rerunWorkflowRequest,  options).toPromise();
    }

    /**
     * Reruns the workflow from a specific task
     * @param param the request object
     */
    public rerun(param: WorkflowResourceApiRerunRequest, options?: Configuration): Promise<string> {
        return this.api.rerun(param.workflowId, param.rerunWorkflowRequest,  options).toPromise();
    }

    /**
     * Resets callback times of all non-terminal CUSTOM tasks to 0
     * @param param the request object
     */
    public resetWorkflowWithHttpInfo(param: WorkflowResourceApiResetWorkflowRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.resetWorkflowWithHttpInfo(param.workflowId,  options).toPromise();
    }

    /**
     * Resets callback times of all non-terminal CUSTOM tasks to 0
     * @param param the request object
     */
    public resetWorkflow(param: WorkflowResourceApiResetWorkflowRequest, options?: Configuration): Promise<void> {
        return this.api.resetWorkflow(param.workflowId,  options).toPromise();
    }

    /**
     * Restarts a completed workflow
     * @param param the request object
     */
    public restartWithHttpInfo(param: WorkflowResourceApiRestartRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.restartWithHttpInfo(param.workflowId, param.useLatestDefinitions,  options).toPromise();
    }

    /**
     * Restarts a completed workflow
     * @param param the request object
     */
    public restart(param: WorkflowResourceApiRestartRequest, options?: Configuration): Promise<void> {
        return this.api.restart(param.workflowId, param.useLatestDefinitions,  options).toPromise();
    }

    /**
     * Resumes the workflow
     * @param param the request object
     */
    public resumeWorkflowWithHttpInfo(param: WorkflowResourceApiResumeWorkflowRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.resumeWorkflowWithHttpInfo(param.workflowId,  options).toPromise();
    }

    /**
     * Resumes the workflow
     * @param param the request object
     */
    public resumeWorkflow(param: WorkflowResourceApiResumeWorkflowRequest, options?: Configuration): Promise<void> {
        return this.api.resumeWorkflow(param.workflowId,  options).toPromise();
    }

    /**
     * Retries the last failed task
     * @param param the request object
     */
    public retryWithHttpInfo(param: WorkflowResourceApiRetryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.retryWithHttpInfo(param.workflowId, param.resumeSubworkflowTasks,  options).toPromise();
    }

    /**
     * Retries the last failed task
     * @param param the request object
     */
    public retry(param: WorkflowResourceApiRetryRequest, options?: Configuration): Promise<void> {
        return this.api.retry(param.workflowId, param.resumeSubworkflowTasks,  options).toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
     * Search for workflows based on payload and other parameters
     * @param param the request object
     */
    public searchWithHttpInfo(param: WorkflowResourceApiSearchRequest = {}, options?: Configuration): Promise<HttpInfo<SearchResultWorkflowSummary>> {
        return this.api.searchWithHttpInfo(param.start, param.size, param.sort, param.freeText, param.query,  options).toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
     * Search for workflows based on payload and other parameters
     * @param param the request object
     */
    public search(param: WorkflowResourceApiSearchRequest = {}, options?: Configuration): Promise<SearchResultWorkflowSummary> {
        return this.api.search(param.start, param.size, param.sort, param.freeText, param.query,  options).toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
     * Search for workflows based on payload and other parameters
     * @param param the request object
     */
    public searchV2WithHttpInfo(param: WorkflowResourceApiSearchV2Request = {}, options?: Configuration): Promise<HttpInfo<SearchResultWorkflow>> {
        return this.api.searchV2WithHttpInfo(param.start, param.size, param.sort, param.freeText, param.query,  options).toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
     * Search for workflows based on payload and other parameters
     * @param param the request object
     */
    public searchV2(param: WorkflowResourceApiSearchV2Request = {}, options?: Configuration): Promise<SearchResultWorkflow> {
        return this.api.searchV2(param.start, param.size, param.sort, param.freeText, param.query,  options).toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for workflows based on task parameters
     * @param param the request object
     */
    public searchWorkflowsByTasksWithHttpInfo(param: WorkflowResourceApiSearchWorkflowsByTasksRequest = {}, options?: Configuration): Promise<HttpInfo<SearchResultWorkflowSummary>> {
        return this.api.searchWorkflowsByTasksWithHttpInfo(param.start, param.size, param.sort, param.freeText, param.query,  options).toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for workflows based on task parameters
     * @param param the request object
     */
    public searchWorkflowsByTasks(param: WorkflowResourceApiSearchWorkflowsByTasksRequest = {}, options?: Configuration): Promise<SearchResultWorkflowSummary> {
        return this.api.searchWorkflowsByTasks(param.start, param.size, param.sort, param.freeText, param.query,  options).toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for workflows based on task parameters
     * @param param the request object
     */
    public searchWorkflowsByTasksV2WithHttpInfo(param: WorkflowResourceApiSearchWorkflowsByTasksV2Request = {}, options?: Configuration): Promise<HttpInfo<SearchResultWorkflow>> {
        return this.api.searchWorkflowsByTasksV2WithHttpInfo(param.start, param.size, param.sort, param.freeText, param.query,  options).toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for workflows based on task parameters
     * @param param the request object
     */
    public searchWorkflowsByTasksV2(param: WorkflowResourceApiSearchWorkflowsByTasksV2Request = {}, options?: Configuration): Promise<SearchResultWorkflow> {
        return this.api.searchWorkflowsByTasksV2(param.start, param.size, param.sort, param.freeText, param.query,  options).toPromise();
    }

    /**
     * Skips a given task from a current running workflow
     * @param param the request object
     */
    public skipTaskFromWorkflowWithHttpInfo(param: WorkflowResourceApiSkipTaskFromWorkflowRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.skipTaskFromWorkflowWithHttpInfo(param.workflowId, param.taskReferenceName, param.skipTaskRequest,  options).toPromise();
    }

    /**
     * Skips a given task from a current running workflow
     * @param param the request object
     */
    public skipTaskFromWorkflow(param: WorkflowResourceApiSkipTaskFromWorkflowRequest, options?: Configuration): Promise<void> {
        return this.api.skipTaskFromWorkflow(param.workflowId, param.taskReferenceName, param.skipTaskRequest,  options).toPromise();
    }

    /**
     * Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain
     * @param param the request object
     */
    public startWorkflowWithHttpInfo(param: WorkflowResourceApiStartWorkflowRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.startWorkflowWithHttpInfo(param.startWorkflowRequest,  options).toPromise();
    }

    /**
     * Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain
     * @param param the request object
     */
    public startWorkflow(param: WorkflowResourceApiStartWorkflowRequest, options?: Configuration): Promise<string> {
        return this.api.startWorkflow(param.startWorkflowRequest,  options).toPromise();
    }

    /**
     * Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking
     * @param param the request object
     */
    public startWorkflow1WithHttpInfo(param: WorkflowResourceApiStartWorkflow1Request, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.startWorkflow1WithHttpInfo(param.name, param.requestBody, param.version, param.correlationId, param.priority,  options).toPromise();
    }

    /**
     * Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking
     * @param param the request object
     */
    public startWorkflow1(param: WorkflowResourceApiStartWorkflow1Request, options?: Configuration): Promise<string> {
        return this.api.startWorkflow1(param.name, param.requestBody, param.version, param.correlationId, param.priority,  options).toPromise();
    }

    /**
     * Terminate workflow execution
     * @param param the request object
     */
    public terminate1WithHttpInfo(param: WorkflowResourceApiTerminate1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.terminate1WithHttpInfo(param.workflowId, param.reason, param.triggerFailureWorkflow,  options).toPromise();
    }

    /**
     * Terminate workflow execution
     * @param param the request object
     */
    public terminate1(param: WorkflowResourceApiTerminate1Request, options?: Configuration): Promise<void> {
        return this.api.terminate1(param.workflowId, param.reason, param.triggerFailureWorkflow,  options).toPromise();
    }

    /**
     * Test workflow execution using mock data
     * @param param the request object
     */
    public testWorkflowWithHttpInfo(param: WorkflowResourceApiTestWorkflowRequest, options?: Configuration): Promise<HttpInfo<Workflow>> {
        return this.api.testWorkflowWithHttpInfo(param.workflowTestRequest,  options).toPromise();
    }

    /**
     * Test workflow execution using mock data
     * @param param the request object
     */
    public testWorkflow(param: WorkflowResourceApiTestWorkflowRequest, options?: Configuration): Promise<Workflow> {
        return this.api.testWorkflow(param.workflowTestRequest,  options).toPromise();
    }

}
