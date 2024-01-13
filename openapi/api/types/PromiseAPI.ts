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
import { ObservableAdminResourceApi } from './ObservableAPI';

import { AdminResourceApiRequestFactory, AdminResourceApiResponseProcessor} from "../apis/AdminResourceApi";
export class PromiseAdminResourceApi {
    private api: ObservableAdminResourceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdminResourceApiRequestFactory,
        responseProcessor?: AdminResourceApiResponseProcessor
    ) {
        this.api = new ObservableAdminResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all the configuration parameters
     */
    public getAllConfigWithHttpInfo(_options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        const result = this.api.getAllConfigWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get all the configuration parameters
     */
    public getAllConfig(_options?: Configuration): Promise<{ [key: string]: any; }> {
        const result = this.api.getAllConfig(_options);
        return result.toPromise();
    }

    /**
     * Get registered queues
     * @param verbose 
     */
    public getEventQueuesWithHttpInfo(verbose?: boolean, _options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        const result = this.api.getEventQueuesWithHttpInfo(verbose, _options);
        return result.toPromise();
    }

    /**
     * Get registered queues
     * @param verbose 
     */
    public getEventQueues(verbose?: boolean, _options?: Configuration): Promise<{ [key: string]: any; }> {
        const result = this.api.getEventQueues(verbose, _options);
        return result.toPromise();
    }

    /**
     * Queue up all the running workflows for sweep
     * @param workflowId 
     */
    public requeueSweepWithHttpInfo(workflowId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.requeueSweepWithHttpInfo(workflowId, _options);
        return result.toPromise();
    }

    /**
     * Queue up all the running workflows for sweep
     * @param workflowId 
     */
    public requeueSweep(workflowId: string, _options?: Configuration): Promise<string> {
        const result = this.api.requeueSweep(workflowId, _options);
        return result.toPromise();
    }

    /**
     * Verify and repair workflow consistency
     * @param workflowId 
     */
    public verifyAndRepairWorkflowConsistencyWithHttpInfo(workflowId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.verifyAndRepairWorkflowConsistencyWithHttpInfo(workflowId, _options);
        return result.toPromise();
    }

    /**
     * Verify and repair workflow consistency
     * @param workflowId 
     */
    public verifyAndRepairWorkflowConsistency(workflowId: string, _options?: Configuration): Promise<string> {
        const result = this.api.verifyAndRepairWorkflowConsistency(workflowId, _options);
        return result.toPromise();
    }

    /**
     * Get the list of pending tasks for a given task type
     * @param tasktype 
     * @param start 
     * @param count 
     */
    public viewWithHttpInfo(tasktype: string, start?: number, count?: number, _options?: Configuration): Promise<HttpInfo<Array<Task>>> {
        const result = this.api.viewWithHttpInfo(tasktype, start, count, _options);
        return result.toPromise();
    }

    /**
     * Get the list of pending tasks for a given task type
     * @param tasktype 
     * @param start 
     * @param count 
     */
    public view(tasktype: string, start?: number, count?: number, _options?: Configuration): Promise<Array<Task>> {
        const result = this.api.view(tasktype, start, count, _options);
        return result.toPromise();
    }


}



import { ObservableEventResourceApi } from './ObservableAPI';

import { EventResourceApiRequestFactory, EventResourceApiResponseProcessor} from "../apis/EventResourceApi";
export class PromiseEventResourceApi {
    private api: ObservableEventResourceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventResourceApiRequestFactory,
        responseProcessor?: EventResourceApiResponseProcessor
    ) {
        this.api = new ObservableEventResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new event handler.
     * @param eventHandler 
     */
    public addEventHandlerWithHttpInfo(eventHandler: EventHandler, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addEventHandlerWithHttpInfo(eventHandler, _options);
        return result.toPromise();
    }

    /**
     * Add a new event handler.
     * @param eventHandler 
     */
    public addEventHandler(eventHandler: EventHandler, _options?: Configuration): Promise<void> {
        const result = this.api.addEventHandler(eventHandler, _options);
        return result.toPromise();
    }

    /**
     * Get all the event handlers
     */
    public getEventHandlersWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<EventHandler>>> {
        const result = this.api.getEventHandlersWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get all the event handlers
     */
    public getEventHandlers(_options?: Configuration): Promise<Array<EventHandler>> {
        const result = this.api.getEventHandlers(_options);
        return result.toPromise();
    }

    /**
     * Get event handlers for a given event
     * @param event 
     * @param activeOnly 
     */
    public getEventHandlersForEventWithHttpInfo(event: string, activeOnly?: boolean, _options?: Configuration): Promise<HttpInfo<Array<EventHandler>>> {
        const result = this.api.getEventHandlersForEventWithHttpInfo(event, activeOnly, _options);
        return result.toPromise();
    }

    /**
     * Get event handlers for a given event
     * @param event 
     * @param activeOnly 
     */
    public getEventHandlersForEvent(event: string, activeOnly?: boolean, _options?: Configuration): Promise<Array<EventHandler>> {
        const result = this.api.getEventHandlersForEvent(event, activeOnly, _options);
        return result.toPromise();
    }

    /**
     * Remove an event handler
     * @param name 
     */
    public removeEventHandlerStatusWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeEventHandlerStatusWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Remove an event handler
     * @param name 
     */
    public removeEventHandlerStatus(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeEventHandlerStatus(name, _options);
        return result.toPromise();
    }

    /**
     * Update an existing event handler.
     * @param eventHandler 
     */
    public updateEventHandlerWithHttpInfo(eventHandler: EventHandler, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateEventHandlerWithHttpInfo(eventHandler, _options);
        return result.toPromise();
    }

    /**
     * Update an existing event handler.
     * @param eventHandler 
     */
    public updateEventHandler(eventHandler: EventHandler, _options?: Configuration): Promise<void> {
        const result = this.api.updateEventHandler(eventHandler, _options);
        return result.toPromise();
    }


}



import { ObservableHealthCheckResourceApi } from './ObservableAPI';

import { HealthCheckResourceApiRequestFactory, HealthCheckResourceApiResponseProcessor} from "../apis/HealthCheckResourceApi";
export class PromiseHealthCheckResourceApi {
    private api: ObservableHealthCheckResourceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthCheckResourceApiRequestFactory,
        responseProcessor?: HealthCheckResourceApiResponseProcessor
    ) {
        this.api = new ObservableHealthCheckResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public doCheckWithHttpInfo(_options?: Configuration): Promise<HttpInfo<HealthCheckStatus>> {
        const result = this.api.doCheckWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public doCheck(_options?: Configuration): Promise<HealthCheckStatus> {
        const result = this.api.doCheck(_options);
        return result.toPromise();
    }


}



import { ObservableMetadataResourceApi } from './ObservableAPI';

import { MetadataResourceApiRequestFactory, MetadataResourceApiResponseProcessor} from "../apis/MetadataResourceApi";
export class PromiseMetadataResourceApi {
    private api: ObservableMetadataResourceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataResourceApiRequestFactory,
        responseProcessor?: MetadataResourceApiResponseProcessor
    ) {
        this.api = new ObservableMetadataResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new workflow definition
     * @param workflowDef 
     */
    public createWithHttpInfo(workflowDef: WorkflowDef, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createWithHttpInfo(workflowDef, _options);
        return result.toPromise();
    }

    /**
     * Create a new workflow definition
     * @param workflowDef 
     */
    public create(workflowDef: WorkflowDef, _options?: Configuration): Promise<void> {
        const result = this.api.create(workflowDef, _options);
        return result.toPromise();
    }

    /**
     * Retrieves workflow definition along with blueprint
     * @param name 
     * @param version 
     */
    public getWithHttpInfo(name: string, version?: number, _options?: Configuration): Promise<HttpInfo<WorkflowDef>> {
        const result = this.api.getWithHttpInfo(name, version, _options);
        return result.toPromise();
    }

    /**
     * Retrieves workflow definition along with blueprint
     * @param name 
     * @param version 
     */
    public get(name: string, version?: number, _options?: Configuration): Promise<WorkflowDef> {
        const result = this.api.get(name, version, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all workflow definition along with blueprint
     */
    public getAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<WorkflowDef>>> {
        const result = this.api.getAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Retrieves all workflow definition along with blueprint
     */
    public getAll(_options?: Configuration): Promise<Array<WorkflowDef>> {
        const result = this.api.getAll(_options);
        return result.toPromise();
    }

    /**
     * Returns only the latest version of all workflow definitions
     */
    public getAllWorkflowsWithLatestVersionsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<WorkflowDef>>> {
        const result = this.api.getAllWorkflowsWithLatestVersionsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns only the latest version of all workflow definitions
     */
    public getAllWorkflowsWithLatestVersions(_options?: Configuration): Promise<Array<WorkflowDef>> {
        const result = this.api.getAllWorkflowsWithLatestVersions(_options);
        return result.toPromise();
    }

    /**
     * Gets the task definition
     * @param tasktype 
     */
    public getTaskDefWithHttpInfo(tasktype: string, _options?: Configuration): Promise<HttpInfo<TaskDef>> {
        const result = this.api.getTaskDefWithHttpInfo(tasktype, _options);
        return result.toPromise();
    }

    /**
     * Gets the task definition
     * @param tasktype 
     */
    public getTaskDef(tasktype: string, _options?: Configuration): Promise<TaskDef> {
        const result = this.api.getTaskDef(tasktype, _options);
        return result.toPromise();
    }

    /**
     * Gets all task definition
     */
    public getTaskDefsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<TaskDef>>> {
        const result = this.api.getTaskDefsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets all task definition
     */
    public getTaskDefs(_options?: Configuration): Promise<Array<TaskDef>> {
        const result = this.api.getTaskDefs(_options);
        return result.toPromise();
    }

    /**
     * Returns workflow names and versions only (no definition bodies)
     */
    public getWorkflowNamesAndVersionsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        const result = this.api.getWorkflowNamesAndVersionsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns workflow names and versions only (no definition bodies)
     */
    public getWorkflowNamesAndVersions(_options?: Configuration): Promise<{ [key: string]: any; }> {
        const result = this.api.getWorkflowNamesAndVersions(_options);
        return result.toPromise();
    }

    /**
     * Update an existing task
     * @param taskDef 
     */
    public registerTaskDefWithHttpInfo(taskDef: TaskDef, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.registerTaskDefWithHttpInfo(taskDef, _options);
        return result.toPromise();
    }

    /**
     * Update an existing task
     * @param taskDef 
     */
    public registerTaskDef(taskDef: TaskDef, _options?: Configuration): Promise<void> {
        const result = this.api.registerTaskDef(taskDef, _options);
        return result.toPromise();
    }

    /**
     * Create new task definition(s)
     * @param taskDef 
     */
    public registerTaskDef1WithHttpInfo(taskDef: Array<TaskDef>, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.registerTaskDef1WithHttpInfo(taskDef, _options);
        return result.toPromise();
    }

    /**
     * Create new task definition(s)
     * @param taskDef 
     */
    public registerTaskDef1(taskDef: Array<TaskDef>, _options?: Configuration): Promise<void> {
        const result = this.api.registerTaskDef1(taskDef, _options);
        return result.toPromise();
    }

    /**
     * Remove a task definition
     * @param tasktype 
     */
    public unregisterTaskDefWithHttpInfo(tasktype: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.unregisterTaskDefWithHttpInfo(tasktype, _options);
        return result.toPromise();
    }

    /**
     * Remove a task definition
     * @param tasktype 
     */
    public unregisterTaskDef(tasktype: string, _options?: Configuration): Promise<void> {
        const result = this.api.unregisterTaskDef(tasktype, _options);
        return result.toPromise();
    }

    /**
     * Removes workflow definition. It does not remove workflows associated with the definition.
     * @param name 
     * @param version 
     */
    public unregisterWorkflowDefWithHttpInfo(name: string, version: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.unregisterWorkflowDefWithHttpInfo(name, version, _options);
        return result.toPromise();
    }

    /**
     * Removes workflow definition. It does not remove workflows associated with the definition.
     * @param name 
     * @param version 
     */
    public unregisterWorkflowDef(name: string, version: number, _options?: Configuration): Promise<void> {
        const result = this.api.unregisterWorkflowDef(name, version, _options);
        return result.toPromise();
    }

    /**
     * Create or update workflow definition
     * @param workflowDef 
     */
    public updateWithHttpInfo(workflowDef: Array<WorkflowDef>, _options?: Configuration): Promise<HttpInfo<BulkResponse>> {
        const result = this.api.updateWithHttpInfo(workflowDef, _options);
        return result.toPromise();
    }

    /**
     * Create or update workflow definition
     * @param workflowDef 
     */
    public update(workflowDef: Array<WorkflowDef>, _options?: Configuration): Promise<BulkResponse> {
        const result = this.api.update(workflowDef, _options);
        return result.toPromise();
    }

    /**
     * Validates a new workflow definition
     * @param workflowDef 
     */
    public validateWithHttpInfo(workflowDef: WorkflowDef, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.validateWithHttpInfo(workflowDef, _options);
        return result.toPromise();
    }

    /**
     * Validates a new workflow definition
     * @param workflowDef 
     */
    public validate(workflowDef: WorkflowDef, _options?: Configuration): Promise<void> {
        const result = this.api.validate(workflowDef, _options);
        return result.toPromise();
    }


}



import { ObservableQueueAdminResourceApi } from './ObservableAPI';

import { QueueAdminResourceApiRequestFactory, QueueAdminResourceApiResponseProcessor} from "../apis/QueueAdminResourceApi";
export class PromiseQueueAdminResourceApi {
    private api: ObservableQueueAdminResourceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: QueueAdminResourceApiRequestFactory,
        responseProcessor?: QueueAdminResourceApiResponseProcessor
    ) {
        this.api = new ObservableQueueAdminResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Queue Names
     */
    public namesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<{ [key: string]: string; }>> {
        const result = this.api.namesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get Queue Names
     */
    public names(_options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.names(_options);
        return result.toPromise();
    }

    /**
     * Get the queue length
     */
    public size1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        const result = this.api.size1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the queue length
     */
    public size1(_options?: Configuration): Promise<{ [key: string]: number; }> {
        const result = this.api.size1(_options);
        return result.toPromise();
    }

    /**
     * Publish a message in queue to mark a wait task as completed.
     * @param workflowId 
     * @param taskRefName 
     * @param status 
     * @param requestBody 
     */
    public update1WithHttpInfo(workflowId: string, taskRefName: string, status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED', requestBody: { [key: string]: any; }, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.update1WithHttpInfo(workflowId, taskRefName, status, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Publish a message in queue to mark a wait task as completed.
     * @param workflowId 
     * @param taskRefName 
     * @param status 
     * @param requestBody 
     */
    public update1(workflowId: string, taskRefName: string, status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED', requestBody: { [key: string]: any; }, _options?: Configuration): Promise<void> {
        const result = this.api.update1(workflowId, taskRefName, status, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Publish a message in queue to mark a wait task (by taskId) as completed.
     * @param workflowId 
     * @param taskId 
     * @param status 
     * @param requestBody 
     */
    public updateByTaskIdWithHttpInfo(workflowId: string, taskId: string, status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED', requestBody: { [key: string]: any; }, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateByTaskIdWithHttpInfo(workflowId, taskId, status, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Publish a message in queue to mark a wait task (by taskId) as completed.
     * @param workflowId 
     * @param taskId 
     * @param status 
     * @param requestBody 
     */
    public updateByTaskId(workflowId: string, taskId: string, status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED', requestBody: { [key: string]: any; }, _options?: Configuration): Promise<void> {
        const result = this.api.updateByTaskId(workflowId, taskId, status, requestBody, _options);
        return result.toPromise();
    }


}



import { ObservableTaskResourceApi } from './ObservableAPI';

import { TaskResourceApiRequestFactory, TaskResourceApiResponseProcessor} from "../apis/TaskResourceApi";
export class PromiseTaskResourceApi {
    private api: ObservableTaskResourceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskResourceApiRequestFactory,
        responseProcessor?: TaskResourceApiResponseProcessor
    ) {
        this.api = new ObservableTaskResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the details about each queue
     */
    public allWithHttpInfo(_options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        const result = this.api.allWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the details about each queue
     */
    public all(_options?: Configuration): Promise<{ [key: string]: number; }> {
        const result = this.api.all(_options);
        return result.toPromise();
    }

    /**
     * Get the details about each queue
     */
    public allVerboseWithHttpInfo(_options?: Configuration): Promise<HttpInfo<{ [key: string]: { [key: string]: { [key: string]: number; }; }; }>> {
        const result = this.api.allVerboseWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the details about each queue
     */
    public allVerbose(_options?: Configuration): Promise<{ [key: string]: { [key: string]: { [key: string]: number; }; }; }> {
        const result = this.api.allVerbose(_options);
        return result.toPromise();
    }

    /**
     * Batch poll for a task of a certain type
     * @param tasktype 
     * @param workerid 
     * @param domain 
     * @param count 
     * @param timeout 
     */
    public batchPollWithHttpInfo(tasktype: string, workerid?: string, domain?: string, count?: number, timeout?: number, _options?: Configuration): Promise<HttpInfo<Array<Task>>> {
        const result = this.api.batchPollWithHttpInfo(tasktype, workerid, domain, count, timeout, _options);
        return result.toPromise();
    }

    /**
     * Batch poll for a task of a certain type
     * @param tasktype 
     * @param workerid 
     * @param domain 
     * @param count 
     * @param timeout 
     */
    public batchPoll(tasktype: string, workerid?: string, domain?: string, count?: number, timeout?: number, _options?: Configuration): Promise<Array<Task>> {
        const result = this.api.batchPoll(tasktype, workerid, domain, count, timeout, _options);
        return result.toPromise();
    }

    /**
     * Get the last poll data for all task types
     */
    public getAllPollDataWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<PollData>>> {
        const result = this.api.getAllPollDataWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the last poll data for all task types
     */
    public getAllPollData(_options?: Configuration): Promise<Array<PollData>> {
        const result = this.api.getAllPollData(_options);
        return result.toPromise();
    }

    /**
     * Get the external uri where the task payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public getExternalStorageLocation2WithHttpInfo(path: string, operation: string, payloadType: string, _options?: Configuration): Promise<HttpInfo<ExternalStorageLocation>> {
        const result = this.api.getExternalStorageLocation2WithHttpInfo(path, operation, payloadType, _options);
        return result.toPromise();
    }

    /**
     * Get the external uri where the task payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public getExternalStorageLocation2(path: string, operation: string, payloadType: string, _options?: Configuration): Promise<ExternalStorageLocation> {
        const result = this.api.getExternalStorageLocation2(path, operation, payloadType, _options);
        return result.toPromise();
    }

    /**
     * Get the last poll data for a given task type
     * @param taskType 
     */
    public getPollDataWithHttpInfo(taskType: string, _options?: Configuration): Promise<HttpInfo<Array<PollData>>> {
        const result = this.api.getPollDataWithHttpInfo(taskType, _options);
        return result.toPromise();
    }

    /**
     * Get the last poll data for a given task type
     * @param taskType 
     */
    public getPollData(taskType: string, _options?: Configuration): Promise<Array<PollData>> {
        const result = this.api.getPollData(taskType, _options);
        return result.toPromise();
    }

    /**
     * Get task by Id
     * @param taskId 
     */
    public getTaskWithHttpInfo(taskId: string, _options?: Configuration): Promise<HttpInfo<Task>> {
        const result = this.api.getTaskWithHttpInfo(taskId, _options);
        return result.toPromise();
    }

    /**
     * Get task by Id
     * @param taskId 
     */
    public getTask(taskId: string, _options?: Configuration): Promise<Task> {
        const result = this.api.getTask(taskId, _options);
        return result.toPromise();
    }

    /**
     * Get Task Execution Logs
     * @param taskId 
     */
    public getTaskLogsWithHttpInfo(taskId: string, _options?: Configuration): Promise<HttpInfo<Array<TaskExecLog>>> {
        const result = this.api.getTaskLogsWithHttpInfo(taskId, _options);
        return result.toPromise();
    }

    /**
     * Get Task Execution Logs
     * @param taskId 
     */
    public getTaskLogs(taskId: string, _options?: Configuration): Promise<Array<TaskExecLog>> {
        const result = this.api.getTaskLogs(taskId, _options);
        return result.toPromise();
    }

    /**
     * Log Task Execution Details
     * @param taskId 
     * @param body 
     */
    public logWithHttpInfo(taskId: string, body: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.logWithHttpInfo(taskId, body, _options);
        return result.toPromise();
    }

    /**
     * Log Task Execution Details
     * @param taskId 
     * @param body 
     */
    public log(taskId: string, body: string, _options?: Configuration): Promise<void> {
        const result = this.api.log(taskId, body, _options);
        return result.toPromise();
    }

    /**
     * Poll for a task of a certain type
     * @param tasktype 
     * @param workerid 
     * @param domain 
     */
    public pollWithHttpInfo(tasktype: string, workerid?: string, domain?: string, _options?: Configuration): Promise<HttpInfo<Task>> {
        const result = this.api.pollWithHttpInfo(tasktype, workerid, domain, _options);
        return result.toPromise();
    }

    /**
     * Poll for a task of a certain type
     * @param tasktype 
     * @param workerid 
     * @param domain 
     */
    public poll(tasktype: string, workerid?: string, domain?: string, _options?: Configuration): Promise<Task> {
        const result = this.api.poll(tasktype, workerid, domain, _options);
        return result.toPromise();
    }

    /**
     * Requeue pending tasks
     * @param taskType 
     */
    public requeuePendingTaskWithHttpInfo(taskType: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.requeuePendingTaskWithHttpInfo(taskType, _options);
        return result.toPromise();
    }

    /**
     * Requeue pending tasks
     * @param taskType 
     */
    public requeuePendingTask(taskType: string, _options?: Configuration): Promise<string> {
        const result = this.api.requeuePendingTask(taskType, _options);
        return result.toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for tasks based in payload and other parameters
     * @param start 
     * @param size 
     * @param sort 
     * @param freeText 
     * @param query 
     */
    public search1WithHttpInfo(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<HttpInfo<SearchResultTaskSummary>> {
        const result = this.api.search1WithHttpInfo(start, size, sort, freeText, query, _options);
        return result.toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for tasks based in payload and other parameters
     * @param start 
     * @param size 
     * @param sort 
     * @param freeText 
     * @param query 
     */
    public search1(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<SearchResultTaskSummary> {
        const result = this.api.search1(start, size, sort, freeText, query, _options);
        return result.toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for tasks based in payload and other parameters
     * @param start 
     * @param size 
     * @param sort 
     * @param freeText 
     * @param query 
     */
    public searchV21WithHttpInfo(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<HttpInfo<SearchResultTask>> {
        const result = this.api.searchV21WithHttpInfo(start, size, sort, freeText, query, _options);
        return result.toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for tasks based in payload and other parameters
     * @param start 
     * @param size 
     * @param sort 
     * @param freeText 
     * @param query 
     */
    public searchV21(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<SearchResultTask> {
        const result = this.api.searchV21(start, size, sort, freeText, query, _options);
        return result.toPromise();
    }

    /**
     * Deprecated. Please use /tasks/queue/size endpoint
     * @param taskType 
     */
    public sizeWithHttpInfo(taskType?: Array<string>, _options?: Configuration): Promise<HttpInfo<{ [key: string]: number; }>> {
        const result = this.api.sizeWithHttpInfo(taskType, _options);
        return result.toPromise();
    }

    /**
     * Deprecated. Please use /tasks/queue/size endpoint
     * @param taskType 
     */
    public size(taskType?: Array<string>, _options?: Configuration): Promise<{ [key: string]: number; }> {
        const result = this.api.size(taskType, _options);
        return result.toPromise();
    }

    /**
     * Get queue size for a task type.
     * @param taskType 
     * @param domain 
     * @param isolationGroupId 
     * @param executionNamespace 
     */
    public taskDepthWithHttpInfo(taskType: string, domain?: string, isolationGroupId?: string, executionNamespace?: string, _options?: Configuration): Promise<HttpInfo<number>> {
        const result = this.api.taskDepthWithHttpInfo(taskType, domain, isolationGroupId, executionNamespace, _options);
        return result.toPromise();
    }

    /**
     * Get queue size for a task type.
     * @param taskType 
     * @param domain 
     * @param isolationGroupId 
     * @param executionNamespace 
     */
    public taskDepth(taskType: string, domain?: string, isolationGroupId?: string, executionNamespace?: string, _options?: Configuration): Promise<number> {
        const result = this.api.taskDepth(taskType, domain, isolationGroupId, executionNamespace, _options);
        return result.toPromise();
    }

    /**
     * Update a task
     * @param taskResult 
     */
    public updateTaskWithHttpInfo(taskResult: TaskResult, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.updateTaskWithHttpInfo(taskResult, _options);
        return result.toPromise();
    }

    /**
     * Update a task
     * @param taskResult 
     */
    public updateTask(taskResult: TaskResult, _options?: Configuration): Promise<string> {
        const result = this.api.updateTask(taskResult, _options);
        return result.toPromise();
    }


}



import { ObservableWorkflowBulkResourceApi } from './ObservableAPI';

import { WorkflowBulkResourceApiRequestFactory, WorkflowBulkResourceApiResponseProcessor} from "../apis/WorkflowBulkResourceApi";
export class PromiseWorkflowBulkResourceApi {
    private api: ObservableWorkflowBulkResourceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkflowBulkResourceApiRequestFactory,
        responseProcessor?: WorkflowBulkResourceApiResponseProcessor
    ) {
        this.api = new ObservableWorkflowBulkResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Pause the list of workflows
     * @param requestBody 
     */
    public pauseWorkflow1WithHttpInfo(requestBody: Array<string>, _options?: Configuration): Promise<HttpInfo<BulkResponse>> {
        const result = this.api.pauseWorkflow1WithHttpInfo(requestBody, _options);
        return result.toPromise();
    }

    /**
     * Pause the list of workflows
     * @param requestBody 
     */
    public pauseWorkflow1(requestBody: Array<string>, _options?: Configuration): Promise<BulkResponse> {
        const result = this.api.pauseWorkflow1(requestBody, _options);
        return result.toPromise();
    }

    /**
     * Restart the list of completed workflow
     * @param requestBody 
     * @param useLatestDefinitions 
     */
    public restart1WithHttpInfo(requestBody: Array<string>, useLatestDefinitions?: boolean, _options?: Configuration): Promise<HttpInfo<BulkResponse>> {
        const result = this.api.restart1WithHttpInfo(requestBody, useLatestDefinitions, _options);
        return result.toPromise();
    }

    /**
     * Restart the list of completed workflow
     * @param requestBody 
     * @param useLatestDefinitions 
     */
    public restart1(requestBody: Array<string>, useLatestDefinitions?: boolean, _options?: Configuration): Promise<BulkResponse> {
        const result = this.api.restart1(requestBody, useLatestDefinitions, _options);
        return result.toPromise();
    }

    /**
     * Resume the list of workflows
     * @param requestBody 
     */
    public resumeWorkflow1WithHttpInfo(requestBody: Array<string>, _options?: Configuration): Promise<HttpInfo<BulkResponse>> {
        const result = this.api.resumeWorkflow1WithHttpInfo(requestBody, _options);
        return result.toPromise();
    }

    /**
     * Resume the list of workflows
     * @param requestBody 
     */
    public resumeWorkflow1(requestBody: Array<string>, _options?: Configuration): Promise<BulkResponse> {
        const result = this.api.resumeWorkflow1(requestBody, _options);
        return result.toPromise();
    }

    /**
     * Retry the last failed task for each workflow from the list
     * @param requestBody 
     */
    public retry1WithHttpInfo(requestBody: Array<string>, _options?: Configuration): Promise<HttpInfo<BulkResponse>> {
        const result = this.api.retry1WithHttpInfo(requestBody, _options);
        return result.toPromise();
    }

    /**
     * Retry the last failed task for each workflow from the list
     * @param requestBody 
     */
    public retry1(requestBody: Array<string>, _options?: Configuration): Promise<BulkResponse> {
        const result = this.api.retry1(requestBody, _options);
        return result.toPromise();
    }

    /**
     * Terminate workflows execution
     * @param requestBody 
     * @param reason 
     */
    public terminateWithHttpInfo(requestBody: Array<string>, reason?: string, _options?: Configuration): Promise<HttpInfo<BulkResponse>> {
        const result = this.api.terminateWithHttpInfo(requestBody, reason, _options);
        return result.toPromise();
    }

    /**
     * Terminate workflows execution
     * @param requestBody 
     * @param reason 
     */
    public terminate(requestBody: Array<string>, reason?: string, _options?: Configuration): Promise<BulkResponse> {
        const result = this.api.terminate(requestBody, reason, _options);
        return result.toPromise();
    }


}



import { ObservableWorkflowResourceApi } from './ObservableAPI';

import { WorkflowResourceApiRequestFactory, WorkflowResourceApiResponseProcessor} from "../apis/WorkflowResourceApi";
export class PromiseWorkflowResourceApi {
    private api: ObservableWorkflowResourceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkflowResourceApiRequestFactory,
        responseProcessor?: WorkflowResourceApiResponseProcessor
    ) {
        this.api = new ObservableWorkflowResourceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes the workflow from the system
     * @param workflowId 
     * @param archiveWorkflow 
     */
    public _deleteWithHttpInfo(workflowId: string, archiveWorkflow?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api._deleteWithHttpInfo(workflowId, archiveWorkflow, _options);
        return result.toPromise();
    }

    /**
     * Removes the workflow from the system
     * @param workflowId 
     * @param archiveWorkflow 
     */
    public _delete(workflowId: string, archiveWorkflow?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api._delete(workflowId, archiveWorkflow, _options);
        return result.toPromise();
    }

    /**
     * Starts the decision task for a workflow
     * @param workflowId 
     */
    public decideWithHttpInfo(workflowId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.decideWithHttpInfo(workflowId, _options);
        return result.toPromise();
    }

    /**
     * Starts the decision task for a workflow
     * @param workflowId 
     */
    public decide(workflowId: string, _options?: Configuration): Promise<void> {
        const result = this.api.decide(workflowId, _options);
        return result.toPromise();
    }

    /**
     * Gets the workflow by workflow id
     * @param workflowId 
     * @param includeTasks 
     */
    public getExecutionStatusWithHttpInfo(workflowId: string, includeTasks?: boolean, _options?: Configuration): Promise<HttpInfo<Workflow>> {
        const result = this.api.getExecutionStatusWithHttpInfo(workflowId, includeTasks, _options);
        return result.toPromise();
    }

    /**
     * Gets the workflow by workflow id
     * @param workflowId 
     * @param includeTasks 
     */
    public getExecutionStatus(workflowId: string, includeTasks?: boolean, _options?: Configuration): Promise<Workflow> {
        const result = this.api.getExecutionStatus(workflowId, includeTasks, _options);
        return result.toPromise();
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public getExternalStorageLocationWithHttpInfo(path: string, operation: string, payloadType: string, _options?: Configuration): Promise<HttpInfo<ExternalStorageLocation>> {
        const result = this.api.getExternalStorageLocationWithHttpInfo(path, operation, payloadType, _options);
        return result.toPromise();
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public getExternalStorageLocation(path: string, operation: string, payloadType: string, _options?: Configuration): Promise<ExternalStorageLocation> {
        const result = this.api.getExternalStorageLocation(path, operation, payloadType, _options);
        return result.toPromise();
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public getExternalStorageLocation1WithHttpInfo(path: string, operation: string, payloadType: string, _options?: Configuration): Promise<HttpInfo<ExternalStorageLocation>> {
        const result = this.api.getExternalStorageLocation1WithHttpInfo(path, operation, payloadType, _options);
        return result.toPromise();
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public getExternalStorageLocation1(path: string, operation: string, payloadType: string, _options?: Configuration): Promise<ExternalStorageLocation> {
        const result = this.api.getExternalStorageLocation1(path, operation, payloadType, _options);
        return result.toPromise();
    }

    /**
     * Retrieve all the running workflows
     * @param name 
     * @param version 
     * @param startTime 
     * @param endTime 
     */
    public getRunningWorkflowWithHttpInfo(name: string, version?: number, startTime?: number, endTime?: number, _options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.getRunningWorkflowWithHttpInfo(name, version, startTime, endTime, _options);
        return result.toPromise();
    }

    /**
     * Retrieve all the running workflows
     * @param name 
     * @param version 
     * @param startTime 
     * @param endTime 
     */
    public getRunningWorkflow(name: string, version?: number, startTime?: number, endTime?: number, _options?: Configuration): Promise<Array<string>> {
        const result = this.api.getRunningWorkflow(name, version, startTime, endTime, _options);
        return result.toPromise();
    }

    /**
     * Lists workflows for the given correlation id list
     * @param name 
     * @param requestBody 
     * @param includeClosed 
     * @param includeTasks 
     */
    public getWorkflowsWithHttpInfo(name: string, requestBody: Array<string>, includeClosed?: boolean, includeTasks?: boolean, _options?: Configuration): Promise<HttpInfo<{ [key: string]: Array<Workflow>; }>> {
        const result = this.api.getWorkflowsWithHttpInfo(name, requestBody, includeClosed, includeTasks, _options);
        return result.toPromise();
    }

    /**
     * Lists workflows for the given correlation id list
     * @param name 
     * @param requestBody 
     * @param includeClosed 
     * @param includeTasks 
     */
    public getWorkflows(name: string, requestBody: Array<string>, includeClosed?: boolean, includeTasks?: boolean, _options?: Configuration): Promise<{ [key: string]: Array<Workflow>; }> {
        const result = this.api.getWorkflows(name, requestBody, includeClosed, includeTasks, _options);
        return result.toPromise();
    }

    /**
     * Lists workflows for the given correlation id
     * @param name 
     * @param correlationId 
     * @param includeClosed 
     * @param includeTasks 
     */
    public getWorkflows1WithHttpInfo(name: string, correlationId: string, includeClosed?: boolean, includeTasks?: boolean, _options?: Configuration): Promise<HttpInfo<Array<Workflow>>> {
        const result = this.api.getWorkflows1WithHttpInfo(name, correlationId, includeClosed, includeTasks, _options);
        return result.toPromise();
    }

    /**
     * Lists workflows for the given correlation id
     * @param name 
     * @param correlationId 
     * @param includeClosed 
     * @param includeTasks 
     */
    public getWorkflows1(name: string, correlationId: string, includeClosed?: boolean, includeTasks?: boolean, _options?: Configuration): Promise<Array<Workflow>> {
        const result = this.api.getWorkflows1(name, correlationId, includeClosed, includeTasks, _options);
        return result.toPromise();
    }

    /**
     * Pauses the workflow
     * @param workflowId 
     */
    public pauseWorkflowWithHttpInfo(workflowId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.pauseWorkflowWithHttpInfo(workflowId, _options);
        return result.toPromise();
    }

    /**
     * Pauses the workflow
     * @param workflowId 
     */
    public pauseWorkflow(workflowId: string, _options?: Configuration): Promise<void> {
        const result = this.api.pauseWorkflow(workflowId, _options);
        return result.toPromise();
    }

    /**
     * Reruns the workflow from a specific task
     * @param workflowId 
     * @param rerunWorkflowRequest 
     */
    public rerunWithHttpInfo(workflowId: string, rerunWorkflowRequest: RerunWorkflowRequest, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.rerunWithHttpInfo(workflowId, rerunWorkflowRequest, _options);
        return result.toPromise();
    }

    /**
     * Reruns the workflow from a specific task
     * @param workflowId 
     * @param rerunWorkflowRequest 
     */
    public rerun(workflowId: string, rerunWorkflowRequest: RerunWorkflowRequest, _options?: Configuration): Promise<string> {
        const result = this.api.rerun(workflowId, rerunWorkflowRequest, _options);
        return result.toPromise();
    }

    /**
     * Resets callback times of all non-terminal CUSTOM tasks to 0
     * @param workflowId 
     */
    public resetWorkflowWithHttpInfo(workflowId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.resetWorkflowWithHttpInfo(workflowId, _options);
        return result.toPromise();
    }

    /**
     * Resets callback times of all non-terminal CUSTOM tasks to 0
     * @param workflowId 
     */
    public resetWorkflow(workflowId: string, _options?: Configuration): Promise<void> {
        const result = this.api.resetWorkflow(workflowId, _options);
        return result.toPromise();
    }

    /**
     * Restarts a completed workflow
     * @param workflowId 
     * @param useLatestDefinitions 
     */
    public restartWithHttpInfo(workflowId: string, useLatestDefinitions?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.restartWithHttpInfo(workflowId, useLatestDefinitions, _options);
        return result.toPromise();
    }

    /**
     * Restarts a completed workflow
     * @param workflowId 
     * @param useLatestDefinitions 
     */
    public restart(workflowId: string, useLatestDefinitions?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.restart(workflowId, useLatestDefinitions, _options);
        return result.toPromise();
    }

    /**
     * Resumes the workflow
     * @param workflowId 
     */
    public resumeWorkflowWithHttpInfo(workflowId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.resumeWorkflowWithHttpInfo(workflowId, _options);
        return result.toPromise();
    }

    /**
     * Resumes the workflow
     * @param workflowId 
     */
    public resumeWorkflow(workflowId: string, _options?: Configuration): Promise<void> {
        const result = this.api.resumeWorkflow(workflowId, _options);
        return result.toPromise();
    }

    /**
     * Retries the last failed task
     * @param workflowId 
     * @param resumeSubworkflowTasks 
     */
    public retryWithHttpInfo(workflowId: string, resumeSubworkflowTasks?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.retryWithHttpInfo(workflowId, resumeSubworkflowTasks, _options);
        return result.toPromise();
    }

    /**
     * Retries the last failed task
     * @param workflowId 
     * @param resumeSubworkflowTasks 
     */
    public retry(workflowId: string, resumeSubworkflowTasks?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.retry(workflowId, resumeSubworkflowTasks, _options);
        return result.toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
     * Search for workflows based on payload and other parameters
     * @param start 
     * @param size 
     * @param sort 
     * @param freeText 
     * @param query 
     */
    public searchWithHttpInfo(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<HttpInfo<SearchResultWorkflowSummary>> {
        const result = this.api.searchWithHttpInfo(start, size, sort, freeText, query, _options);
        return result.toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
     * Search for workflows based on payload and other parameters
     * @param start 
     * @param size 
     * @param sort 
     * @param freeText 
     * @param query 
     */
    public search(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<SearchResultWorkflowSummary> {
        const result = this.api.search(start, size, sort, freeText, query, _options);
        return result.toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
     * Search for workflows based on payload and other parameters
     * @param start 
     * @param size 
     * @param sort 
     * @param freeText 
     * @param query 
     */
    public searchV2WithHttpInfo(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<HttpInfo<SearchResultWorkflow>> {
        const result = this.api.searchV2WithHttpInfo(start, size, sort, freeText, query, _options);
        return result.toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
     * Search for workflows based on payload and other parameters
     * @param start 
     * @param size 
     * @param sort 
     * @param freeText 
     * @param query 
     */
    public searchV2(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<SearchResultWorkflow> {
        const result = this.api.searchV2(start, size, sort, freeText, query, _options);
        return result.toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for workflows based on task parameters
     * @param start 
     * @param size 
     * @param sort 
     * @param freeText 
     * @param query 
     */
    public searchWorkflowsByTasksWithHttpInfo(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<HttpInfo<SearchResultWorkflowSummary>> {
        const result = this.api.searchWorkflowsByTasksWithHttpInfo(start, size, sort, freeText, query, _options);
        return result.toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for workflows based on task parameters
     * @param start 
     * @param size 
     * @param sort 
     * @param freeText 
     * @param query 
     */
    public searchWorkflowsByTasks(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<SearchResultWorkflowSummary> {
        const result = this.api.searchWorkflowsByTasks(start, size, sort, freeText, query, _options);
        return result.toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for workflows based on task parameters
     * @param start 
     * @param size 
     * @param sort 
     * @param freeText 
     * @param query 
     */
    public searchWorkflowsByTasksV2WithHttpInfo(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<HttpInfo<SearchResultWorkflow>> {
        const result = this.api.searchWorkflowsByTasksV2WithHttpInfo(start, size, sort, freeText, query, _options);
        return result.toPromise();
    }

    /**
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * Search for workflows based on task parameters
     * @param start 
     * @param size 
     * @param sort 
     * @param freeText 
     * @param query 
     */
    public searchWorkflowsByTasksV2(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<SearchResultWorkflow> {
        const result = this.api.searchWorkflowsByTasksV2(start, size, sort, freeText, query, _options);
        return result.toPromise();
    }

    /**
     * Skips a given task from a current running workflow
     * @param workflowId 
     * @param taskReferenceName 
     * @param skipTaskRequest 
     */
    public skipTaskFromWorkflowWithHttpInfo(workflowId: string, taskReferenceName: string, skipTaskRequest: SkipTaskRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.skipTaskFromWorkflowWithHttpInfo(workflowId, taskReferenceName, skipTaskRequest, _options);
        return result.toPromise();
    }

    /**
     * Skips a given task from a current running workflow
     * @param workflowId 
     * @param taskReferenceName 
     * @param skipTaskRequest 
     */
    public skipTaskFromWorkflow(workflowId: string, taskReferenceName: string, skipTaskRequest: SkipTaskRequest, _options?: Configuration): Promise<void> {
        const result = this.api.skipTaskFromWorkflow(workflowId, taskReferenceName, skipTaskRequest, _options);
        return result.toPromise();
    }

    /**
     * Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain
     * @param startWorkflowRequest 
     */
    public startWorkflowWithHttpInfo(startWorkflowRequest: StartWorkflowRequest, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.startWorkflowWithHttpInfo(startWorkflowRequest, _options);
        return result.toPromise();
    }

    /**
     * Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain
     * @param startWorkflowRequest 
     */
    public startWorkflow(startWorkflowRequest: StartWorkflowRequest, _options?: Configuration): Promise<string> {
        const result = this.api.startWorkflow(startWorkflowRequest, _options);
        return result.toPromise();
    }

    /**
     * Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking
     * @param name 
     * @param requestBody 
     * @param version 
     * @param correlationId 
     * @param priority 
     */
    public startWorkflow1WithHttpInfo(name: string, requestBody: { [key: string]: any; }, version?: number, correlationId?: string, priority?: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.startWorkflow1WithHttpInfo(name, requestBody, version, correlationId, priority, _options);
        return result.toPromise();
    }

    /**
     * Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking
     * @param name 
     * @param requestBody 
     * @param version 
     * @param correlationId 
     * @param priority 
     */
    public startWorkflow1(name: string, requestBody: { [key: string]: any; }, version?: number, correlationId?: string, priority?: number, _options?: Configuration): Promise<string> {
        const result = this.api.startWorkflow1(name, requestBody, version, correlationId, priority, _options);
        return result.toPromise();
    }

    /**
     * Terminate workflow execution
     * @param workflowId 
     * @param reason 
     * @param triggerFailureWorkflow 
     */
    public terminate1WithHttpInfo(workflowId: string, reason?: string, triggerFailureWorkflow?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.terminate1WithHttpInfo(workflowId, reason, triggerFailureWorkflow, _options);
        return result.toPromise();
    }

    /**
     * Terminate workflow execution
     * @param workflowId 
     * @param reason 
     * @param triggerFailureWorkflow 
     */
    public terminate1(workflowId: string, reason?: string, triggerFailureWorkflow?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.terminate1(workflowId, reason, triggerFailureWorkflow, _options);
        return result.toPromise();
    }

    /**
     * Test workflow execution using mock data
     * @param workflowTestRequest 
     */
    public testWorkflowWithHttpInfo(workflowTestRequest: WorkflowTestRequest, _options?: Configuration): Promise<HttpInfo<Workflow>> {
        const result = this.api.testWorkflowWithHttpInfo(workflowTestRequest, _options);
        return result.toPromise();
    }

    /**
     * Test workflow execution using mock data
     * @param workflowTestRequest 
     */
    public testWorkflow(workflowTestRequest: WorkflowTestRequest, _options?: Configuration): Promise<Workflow> {
        const result = this.api.testWorkflow(workflowTestRequest, _options);
        return result.toPromise();
    }


}



