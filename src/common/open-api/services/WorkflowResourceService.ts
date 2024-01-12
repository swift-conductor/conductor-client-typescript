/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalStorageLocation } from '../models/ExternalStorageLocation';
import type { RerunWorkflowRequest } from '../models/RerunWorkflowRequest';
import type { SearchResultWorkflow } from '../models/SearchResultWorkflow';
import type { SearchResultWorkflowSummary } from '../models/SearchResultWorkflowSummary';
import type { SkipTaskRequest } from '../models/SkipTaskRequest';
import type { StartWorkflowRequest } from '../models/StartWorkflowRequest';
import type { Workflow } from '../models/Workflow';
import type { WorkflowTestRequest } from '../models/WorkflowTestRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkflowResourceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Skips a given task from a current running workflow
     * @param workflowId
     * @param taskReferenceName
     * @param skipTaskRequest
     * @returns any OK
     * @throws ApiError
     */
    public skipTaskFromWorkflow(
        workflowId: string,
        taskReferenceName: string,
        skipTaskRequest: SkipTaskRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/workflow/{workflowId}/skiptask/{taskReferenceName}',
            path: {
                'workflowId': workflowId,
                'taskReferenceName': taskReferenceName,
            },
            query: {
                'skipTaskRequest': skipTaskRequest,
            },
        });
    }
    /**
     * Resumes the workflow
     * @param workflowId
     * @returns any OK
     * @throws ApiError
     */
    public resumeWorkflow(
        workflowId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/workflow/{workflowId}/resume',
            path: {
                'workflowId': workflowId,
            },
        });
    }
    /**
     * Pauses the workflow
     * @param workflowId
     * @returns any OK
     * @throws ApiError
     */
    public pauseWorkflow(
        workflowId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/workflow/{workflowId}/pause',
            path: {
                'workflowId': workflowId,
            },
        });
    }
    /**
     * Starts the decision task for a workflow
     * @param workflowId
     * @returns any OK
     * @throws ApiError
     */
    public decide(
        workflowId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/workflow/decide/{workflowId}',
            path: {
                'workflowId': workflowId,
            },
        });
    }
    /**
     * Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public startWorkflow(
        requestBody: StartWorkflowRequest,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/workflow',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retries the last failed task
     * @param workflowId
     * @param resumeSubworkflowTasks
     * @returns void
     * @throws ApiError
     */
    public retry(
        workflowId: string,
        resumeSubworkflowTasks: boolean = false,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/workflow/{workflowId}/retry',
            path: {
                'workflowId': workflowId,
            },
            query: {
                'resumeSubworkflowTasks': resumeSubworkflowTasks,
            },
        });
    }
    /**
     * Restarts a completed workflow
     * @param workflowId
     * @param useLatestDefinitions
     * @returns void
     * @throws ApiError
     */
    public restart(
        workflowId: string,
        useLatestDefinitions: boolean = false,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/workflow/{workflowId}/restart',
            path: {
                'workflowId': workflowId,
            },
            query: {
                'useLatestDefinitions': useLatestDefinitions,
            },
        });
    }
    /**
     * Resets callback times of all non-terminal CUSTOM tasks to 0
     * @param workflowId
     * @returns void
     * @throws ApiError
     */
    public resetWorkflow(
        workflowId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/workflow/{workflowId}/resetcallbacks',
            path: {
                'workflowId': workflowId,
            },
        });
    }
    /**
     * Reruns the workflow from a specific task
     * @param workflowId
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public rerun(
        workflowId: string,
        requestBody: RerunWorkflowRequest,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/workflow/{workflowId}/rerun',
            path: {
                'workflowId': workflowId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking
     * @param name
     * @param requestBody
     * @param version
     * @param correlationId
     * @param priority
     * @returns string OK
     * @throws ApiError
     */
    public startWorkflow1(
        name: string,
        requestBody: Record<string, Record<string, any>>,
        version?: number,
        correlationId?: string,
        priority?: number,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/workflow/{name}',
            path: {
                'name': name,
            },
            query: {
                'version': version,
                'correlationId': correlationId,
                'priority': priority,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Lists workflows for the given correlation id list
     * @param name
     * @param requestBody
     * @param includeClosed
     * @param includeTasks
     * @returns Workflow OK
     * @throws ApiError
     */
    public getWorkflows(
        name: string,
        requestBody: Array<string>,
        includeClosed: boolean = false,
        includeTasks: boolean = false,
    ): CancelablePromise<Record<string, Array<Workflow>>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/workflow/{name}/correlated',
            path: {
                'name': name,
            },
            query: {
                'includeClosed': includeClosed,
                'includeTasks': includeTasks,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Test workflow execution using mock data
     * @param requestBody
     * @returns Workflow OK
     * @throws ApiError
     */
    public testWorkflow(
        requestBody: WorkflowTestRequest,
    ): CancelablePromise<Workflow> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/workflow/test',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Gets the workflow by workflow id
     * @param workflowId
     * @param includeTasks
     * @returns Workflow OK
     * @throws ApiError
     */
    public getExecutionStatus(
        workflowId: string,
        includeTasks: boolean = true,
    ): CancelablePromise<Workflow> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/workflow/{workflowId}',
            path: {
                'workflowId': workflowId,
            },
            query: {
                'includeTasks': includeTasks,
            },
        });
    }
    /**
     * Terminate workflow execution
     * @param workflowId
     * @param reason
     * @param triggerFailureWorkflow
     * @returns any OK
     * @throws ApiError
     */
    public terminate1(
        workflowId: string,
        reason?: string,
        triggerFailureWorkflow?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/workflow/{workflowId}',
            path: {
                'workflowId': workflowId,
            },
            query: {
                'reason': reason,
                'triggerFailureWorkflow': triggerFailureWorkflow,
            },
        });
    }
    /**
     * Lists workflows for the given correlation id
     * @param name
     * @param correlationId
     * @param includeClosed
     * @param includeTasks
     * @returns Workflow OK
     * @throws ApiError
     */
    public getWorkflows1(
        name: string,
        correlationId: string,
        includeClosed: boolean = false,
        includeTasks: boolean = false,
    ): CancelablePromise<Array<Workflow>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/workflow/{name}/correlated/{correlationId}',
            path: {
                'name': name,
                'correlationId': correlationId,
            },
            query: {
                'includeClosed': includeClosed,
                'includeTasks': includeTasks,
            },
        });
    }
    /**
     * Search for workflows based on payload and other parameters
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
     * @param start
     * @param size
     * @param sort
     * @param freeText
     * @param query
     * @returns SearchResultWorkflowSummary OK
     * @throws ApiError
     */
    public search(
        start?: number,
        size: number = 100,
        sort?: string,
        freeText: string = '*',
        query?: string,
    ): CancelablePromise<SearchResultWorkflowSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/workflow/search',
            query: {
                'start': start,
                'size': size,
                'sort': sort,
                'freeText': freeText,
                'query': query,
            },
        });
    }
    /**
     * Search for workflows based on payload and other parameters
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
     * @param start
     * @param size
     * @param sort
     * @param freeText
     * @param query
     * @returns SearchResultWorkflow OK
     * @throws ApiError
     */
    public searchV2(
        start?: number,
        size: number = 100,
        sort?: string,
        freeText: string = '*',
        query?: string,
    ): CancelablePromise<SearchResultWorkflow> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/workflow/search-v2',
            query: {
                'start': start,
                'size': size,
                'sort': sort,
                'freeText': freeText,
                'query': query,
            },
        });
    }
    /**
     * Search for workflows based on task parameters
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * @param start
     * @param size
     * @param sort
     * @param freeText
     * @param query
     * @returns SearchResultWorkflowSummary OK
     * @throws ApiError
     */
    public searchWorkflowsByTasks(
        start?: number,
        size: number = 100,
        sort?: string,
        freeText: string = '*',
        query?: string,
    ): CancelablePromise<SearchResultWorkflowSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/workflow/search-by-tasks',
            query: {
                'start': start,
                'size': size,
                'sort': sort,
                'freeText': freeText,
                'query': query,
            },
        });
    }
    /**
     * Search for workflows based on task parameters
     * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
     * @param start
     * @param size
     * @param sort
     * @param freeText
     * @param query
     * @returns SearchResultWorkflow OK
     * @throws ApiError
     */
    public searchWorkflowsByTasksV2(
        start?: number,
        size: number = 100,
        sort?: string,
        freeText: string = '*',
        query?: string,
    ): CancelablePromise<SearchResultWorkflow> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/workflow/search-by-tasks-v2',
            query: {
                'start': start,
                'size': size,
                'sort': sort,
                'freeText': freeText,
                'query': query,
            },
        });
    }
    /**
     * Retrieve all the running workflows
     * @param name
     * @param version
     * @param startTime
     * @param endTime
     * @returns string OK
     * @throws ApiError
     */
    public getRunningWorkflow(
        name: string,
        version: number = 1,
        startTime?: number,
        endTime?: number,
    ): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/workflow/running/{name}',
            path: {
                'name': name,
            },
            query: {
                'version': version,
                'startTime': startTime,
                'endTime': endTime,
            },
        });
    }
    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param path
     * @param operation
     * @param payloadType
     * @returns ExternalStorageLocation OK
     * @throws ApiError
     */
    public getExternalStorageLocation(
        path: string,
        operation: string,
        payloadType: string,
    ): CancelablePromise<ExternalStorageLocation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/workflow/external-storage-location',
            query: {
                'path': path,
                'operation': operation,
                'payloadType': payloadType,
            },
        });
    }
    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param path
     * @param operation
     * @param payloadType
     * @returns ExternalStorageLocation OK
     * @throws ApiError
     */
    public getExternalStorageLocation1(
        path: string,
        operation: string,
        payloadType: string,
    ): CancelablePromise<ExternalStorageLocation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/workflow/externalstoragelocation',
            query: {
                'path': path,
                'operation': operation,
                'payloadType': payloadType,
            },
        });
    }
    /**
     * Removes the workflow from the system
     * @param workflowId
     * @param archiveWorkflow
     * @returns any OK
     * @throws ApiError
     */
    public delete(
        workflowId: string,
        archiveWorkflow: boolean = true,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/workflow/{workflowId}/remove',
            path: {
                'workflowId': workflowId,
            },
            query: {
                'archiveWorkflow': archiveWorkflow,
            },
        });
    }
}
