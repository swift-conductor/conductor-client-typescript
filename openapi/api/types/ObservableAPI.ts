import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AdminResourceApiRequestFactory, AdminResourceApiResponseProcessor} from "../apis/AdminResourceApi";
export class ObservableAdminResourceApi {
    private requestFactory: AdminResourceApiRequestFactory;
    private responseProcessor: AdminResourceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AdminResourceApiRequestFactory,
        responseProcessor?: AdminResourceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AdminResourceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AdminResourceApiResponseProcessor();
    }

    /**
     * Get all the configuration parameters
     */
    public getAllConfigWithHttpInfo(_options?: Configuration): Observable<HttpInfo<{ [key: string]: any; }>> {
        const requestContextPromise = this.requestFactory.getAllConfig(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all the configuration parameters
     */
    public getAllConfig(_options?: Configuration): Observable<{ [key: string]: any; }> {
        return this.getAllConfigWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: any; }>) => apiResponse.data));
    }

    /**
     * Get registered queues
     * @param verbose 
     */
    public getEventQueuesWithHttpInfo(verbose?: boolean, _options?: Configuration): Observable<HttpInfo<{ [key: string]: any; }>> {
        const requestContextPromise = this.requestFactory.getEventQueues(verbose, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventQueuesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get registered queues
     * @param verbose 
     */
    public getEventQueues(verbose?: boolean, _options?: Configuration): Observable<{ [key: string]: any; }> {
        return this.getEventQueuesWithHttpInfo(verbose, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: any; }>) => apiResponse.data));
    }

    /**
     * Queue up all the running workflows for sweep
     * @param workflowId 
     */
    public requeueSweepWithHttpInfo(workflowId: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.requeueSweep(workflowId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requeueSweepWithHttpInfo(rsp)));
            }));
    }

    /**
     * Queue up all the running workflows for sweep
     * @param workflowId 
     */
    public requeueSweep(workflowId: string, _options?: Configuration): Observable<string> {
        return this.requeueSweepWithHttpInfo(workflowId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Verify and repair workflow consistency
     * @param workflowId 
     */
    public verifyAndRepairWorkflowConsistencyWithHttpInfo(workflowId: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.verifyAndRepairWorkflowConsistency(workflowId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyAndRepairWorkflowConsistencyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Verify and repair workflow consistency
     * @param workflowId 
     */
    public verifyAndRepairWorkflowConsistency(workflowId: string, _options?: Configuration): Observable<string> {
        return this.verifyAndRepairWorkflowConsistencyWithHttpInfo(workflowId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Get the list of pending tasks for a given task type
     * @param tasktype 
     * @param start 
     * @param count 
     */
    public viewWithHttpInfo(tasktype: string, start?: number, count?: number, _options?: Configuration): Observable<HttpInfo<Array<Task>>> {
        const requestContextPromise = this.requestFactory.view(tasktype, start, count, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.viewWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the list of pending tasks for a given task type
     * @param tasktype 
     * @param start 
     * @param count 
     */
    public view(tasktype: string, start?: number, count?: number, _options?: Configuration): Observable<Array<Task>> {
        return this.viewWithHttpInfo(tasktype, start, count, _options).pipe(map((apiResponse: HttpInfo<Array<Task>>) => apiResponse.data));
    }

}

import { EventResourceApiRequestFactory, EventResourceApiResponseProcessor} from "../apis/EventResourceApi";
export class ObservableEventResourceApi {
    private requestFactory: EventResourceApiRequestFactory;
    private responseProcessor: EventResourceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventResourceApiRequestFactory,
        responseProcessor?: EventResourceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventResourceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventResourceApiResponseProcessor();
    }

    /**
     * Add a new event handler.
     * @param eventHandler 
     */
    public addEventHandlerWithHttpInfo(eventHandler: EventHandler, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addEventHandler(eventHandler, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addEventHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a new event handler.
     * @param eventHandler 
     */
    public addEventHandler(eventHandler: EventHandler, _options?: Configuration): Observable<void> {
        return this.addEventHandlerWithHttpInfo(eventHandler, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get all the event handlers
     */
    public getEventHandlersWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<EventHandler>>> {
        const requestContextPromise = this.requestFactory.getEventHandlers(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventHandlersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all the event handlers
     */
    public getEventHandlers(_options?: Configuration): Observable<Array<EventHandler>> {
        return this.getEventHandlersWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<EventHandler>>) => apiResponse.data));
    }

    /**
     * Get event handlers for a given event
     * @param event 
     * @param activeOnly 
     */
    public getEventHandlersForEventWithHttpInfo(event: string, activeOnly?: boolean, _options?: Configuration): Observable<HttpInfo<Array<EventHandler>>> {
        const requestContextPromise = this.requestFactory.getEventHandlersForEvent(event, activeOnly, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventHandlersForEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get event handlers for a given event
     * @param event 
     * @param activeOnly 
     */
    public getEventHandlersForEvent(event: string, activeOnly?: boolean, _options?: Configuration): Observable<Array<EventHandler>> {
        return this.getEventHandlersForEventWithHttpInfo(event, activeOnly, _options).pipe(map((apiResponse: HttpInfo<Array<EventHandler>>) => apiResponse.data));
    }

    /**
     * Remove an event handler
     * @param name 
     */
    public removeEventHandlerStatusWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeEventHandlerStatus(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeEventHandlerStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove an event handler
     * @param name 
     */
    public removeEventHandlerStatus(name: string, _options?: Configuration): Observable<void> {
        return this.removeEventHandlerStatusWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update an existing event handler.
     * @param eventHandler 
     */
    public updateEventHandlerWithHttpInfo(eventHandler: EventHandler, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateEventHandler(eventHandler, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEventHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing event handler.
     * @param eventHandler 
     */
    public updateEventHandler(eventHandler: EventHandler, _options?: Configuration): Observable<void> {
        return this.updateEventHandlerWithHttpInfo(eventHandler, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { HealthCheckResourceApiRequestFactory, HealthCheckResourceApiResponseProcessor} from "../apis/HealthCheckResourceApi";
export class ObservableHealthCheckResourceApi {
    private requestFactory: HealthCheckResourceApiRequestFactory;
    private responseProcessor: HealthCheckResourceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthCheckResourceApiRequestFactory,
        responseProcessor?: HealthCheckResourceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HealthCheckResourceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HealthCheckResourceApiResponseProcessor();
    }

    /**
     */
    public doCheckWithHttpInfo(_options?: Configuration): Observable<HttpInfo<HealthCheckStatus>> {
        const requestContextPromise = this.requestFactory.doCheck(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doCheckWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public doCheck(_options?: Configuration): Observable<HealthCheckStatus> {
        return this.doCheckWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<HealthCheckStatus>) => apiResponse.data));
    }

}

import { MetadataResourceApiRequestFactory, MetadataResourceApiResponseProcessor} from "../apis/MetadataResourceApi";
export class ObservableMetadataResourceApi {
    private requestFactory: MetadataResourceApiRequestFactory;
    private responseProcessor: MetadataResourceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataResourceApiRequestFactory,
        responseProcessor?: MetadataResourceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MetadataResourceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MetadataResourceApiResponseProcessor();
    }

    /**
     * Create a new workflow definition
     * @param workflowDef 
     */
    public createWithHttpInfo(workflowDef: WorkflowDef, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.create(workflowDef, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new workflow definition
     * @param workflowDef 
     */
    public create(workflowDef: WorkflowDef, _options?: Configuration): Observable<void> {
        return this.createWithHttpInfo(workflowDef, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves workflow definition along with blueprint
     * @param name 
     * @param version 
     */
    public getWithHttpInfo(name: string, version?: number, _options?: Configuration): Observable<HttpInfo<WorkflowDef>> {
        const requestContextPromise = this.requestFactory.get(name, version, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves workflow definition along with blueprint
     * @param name 
     * @param version 
     */
    public get(name: string, version?: number, _options?: Configuration): Observable<WorkflowDef> {
        return this.getWithHttpInfo(name, version, _options).pipe(map((apiResponse: HttpInfo<WorkflowDef>) => apiResponse.data));
    }

    /**
     * Retrieves all workflow definition along with blueprint
     */
    public getAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<WorkflowDef>>> {
        const requestContextPromise = this.requestFactory.getAll(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all workflow definition along with blueprint
     */
    public getAll(_options?: Configuration): Observable<Array<WorkflowDef>> {
        return this.getAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<WorkflowDef>>) => apiResponse.data));
    }

    /**
     * Returns only the latest version of all workflow definitions
     */
    public getAllWorkflowsWithLatestVersionsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<WorkflowDef>>> {
        const requestContextPromise = this.requestFactory.getAllWorkflowsWithLatestVersions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWorkflowsWithLatestVersionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns only the latest version of all workflow definitions
     */
    public getAllWorkflowsWithLatestVersions(_options?: Configuration): Observable<Array<WorkflowDef>> {
        return this.getAllWorkflowsWithLatestVersionsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<WorkflowDef>>) => apiResponse.data));
    }

    /**
     * Gets the task definition
     * @param tasktype 
     */
    public getTaskDefWithHttpInfo(tasktype: string, _options?: Configuration): Observable<HttpInfo<TaskDef>> {
        const requestContextPromise = this.requestFactory.getTaskDef(tasktype, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaskDefWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the task definition
     * @param tasktype 
     */
    public getTaskDef(tasktype: string, _options?: Configuration): Observable<TaskDef> {
        return this.getTaskDefWithHttpInfo(tasktype, _options).pipe(map((apiResponse: HttpInfo<TaskDef>) => apiResponse.data));
    }

    /**
     * Gets all task definition
     */
    public getTaskDefsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<TaskDef>>> {
        const requestContextPromise = this.requestFactory.getTaskDefs(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaskDefsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets all task definition
     */
    public getTaskDefs(_options?: Configuration): Observable<Array<TaskDef>> {
        return this.getTaskDefsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<TaskDef>>) => apiResponse.data));
    }

    /**
     * Returns workflow names and versions only (no definition bodies)
     */
    public getWorkflowNamesAndVersionsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<{ [key: string]: any; }>> {
        const requestContextPromise = this.requestFactory.getWorkflowNamesAndVersions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkflowNamesAndVersionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns workflow names and versions only (no definition bodies)
     */
    public getWorkflowNamesAndVersions(_options?: Configuration): Observable<{ [key: string]: any; }> {
        return this.getWorkflowNamesAndVersionsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: any; }>) => apiResponse.data));
    }

    /**
     * Create new task definition(s)
     * @param taskDef 
     */
    public registerTaskDefWithHttpInfo(taskDef: Array<TaskDef>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.registerTaskDef(taskDef, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.registerTaskDefWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new task definition(s)
     * @param taskDef 
     */
    public registerTaskDef(taskDef: Array<TaskDef>, _options?: Configuration): Observable<void> {
        return this.registerTaskDefWithHttpInfo(taskDef, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Remove a task definition
     * @param tasktype 
     */
    public unregisterTaskDefWithHttpInfo(tasktype: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.unregisterTaskDef(tasktype, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unregisterTaskDefWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a task definition
     * @param tasktype 
     */
    public unregisterTaskDef(tasktype: string, _options?: Configuration): Observable<void> {
        return this.unregisterTaskDefWithHttpInfo(tasktype, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes workflow definition. It does not remove workflows associated with the definition.
     * @param name 
     * @param version 
     */
    public unregisterWorkflowDefWithHttpInfo(name: string, version: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.unregisterWorkflowDef(name, version, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unregisterWorkflowDefWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes workflow definition. It does not remove workflows associated with the definition.
     * @param name 
     * @param version 
     */
    public unregisterWorkflowDef(name: string, version: number, _options?: Configuration): Observable<void> {
        return this.unregisterWorkflowDefWithHttpInfo(name, version, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create or update workflow definition
     * @param workflowDef 
     */
    public updateWithHttpInfo(workflowDef: Array<WorkflowDef>, _options?: Configuration): Observable<HttpInfo<BulkResponse>> {
        const requestContextPromise = this.requestFactory.update(workflowDef, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create or update workflow definition
     * @param workflowDef 
     */
    public update(workflowDef: Array<WorkflowDef>, _options?: Configuration): Observable<BulkResponse> {
        return this.updateWithHttpInfo(workflowDef, _options).pipe(map((apiResponse: HttpInfo<BulkResponse>) => apiResponse.data));
    }

    /**
     * Update an existing task
     * @param taskDef 
     */
    public updateTaskDefWithHttpInfo(taskDef: TaskDef, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateTaskDef(taskDef, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTaskDefWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing task
     * @param taskDef 
     */
    public updateTaskDef(taskDef: TaskDef, _options?: Configuration): Observable<void> {
        return this.updateTaskDefWithHttpInfo(taskDef, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Validates a new workflow definition
     * @param workflowDef 
     */
    public validateWithHttpInfo(workflowDef: WorkflowDef, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.validate(workflowDef, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Validates a new workflow definition
     * @param workflowDef 
     */
    public validate(workflowDef: WorkflowDef, _options?: Configuration): Observable<void> {
        return this.validateWithHttpInfo(workflowDef, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { QueueAdminResourceApiRequestFactory, QueueAdminResourceApiResponseProcessor} from "../apis/QueueAdminResourceApi";
export class ObservableQueueAdminResourceApi {
    private requestFactory: QueueAdminResourceApiRequestFactory;
    private responseProcessor: QueueAdminResourceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: QueueAdminResourceApiRequestFactory,
        responseProcessor?: QueueAdminResourceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new QueueAdminResourceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new QueueAdminResourceApiResponseProcessor();
    }

    /**
     * Get Queue Names
     */
    public namesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<{ [key: string]: string; }>> {
        const requestContextPromise = this.requestFactory.names(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.namesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Queue Names
     */
    public names(_options?: Configuration): Observable<{ [key: string]: string; }> {
        return this.namesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: string; }>) => apiResponse.data));
    }

    /**
     * Get the queue length
     */
    public size1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<{ [key: string]: number; }>> {
        const requestContextPromise = this.requestFactory.size1(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.size1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the queue length
     */
    public size1(_options?: Configuration): Observable<{ [key: string]: number; }> {
        return this.size1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: number; }>) => apiResponse.data));
    }

    /**
     * Publish a message in queue to mark a wait task as completed.
     * @param workflowId 
     * @param taskRefName 
     * @param status 
     * @param requestBody 
     */
    public update1WithHttpInfo(workflowId: string, taskRefName: string, status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED', requestBody: { [key: string]: any; }, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.update1(workflowId, taskRefName, status, requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Publish a message in queue to mark a wait task as completed.
     * @param workflowId 
     * @param taskRefName 
     * @param status 
     * @param requestBody 
     */
    public update1(workflowId: string, taskRefName: string, status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED', requestBody: { [key: string]: any; }, _options?: Configuration): Observable<void> {
        return this.update1WithHttpInfo(workflowId, taskRefName, status, requestBody, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Publish a message in queue to mark a wait task (by taskId) as completed.
     * @param workflowId 
     * @param taskId 
     * @param status 
     * @param requestBody 
     */
    public updateByTaskIdWithHttpInfo(workflowId: string, taskId: string, status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED', requestBody: { [key: string]: any; }, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateByTaskId(workflowId, taskId, status, requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateByTaskIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Publish a message in queue to mark a wait task (by taskId) as completed.
     * @param workflowId 
     * @param taskId 
     * @param status 
     * @param requestBody 
     */
    public updateByTaskId(workflowId: string, taskId: string, status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED', requestBody: { [key: string]: any; }, _options?: Configuration): Observable<void> {
        return this.updateByTaskIdWithHttpInfo(workflowId, taskId, status, requestBody, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { TaskResourceApiRequestFactory, TaskResourceApiResponseProcessor} from "../apis/TaskResourceApi";
export class ObservableTaskResourceApi {
    private requestFactory: TaskResourceApiRequestFactory;
    private responseProcessor: TaskResourceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskResourceApiRequestFactory,
        responseProcessor?: TaskResourceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TaskResourceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TaskResourceApiResponseProcessor();
    }

    /**
     * Get the details about each queue
     */
    public allWithHttpInfo(_options?: Configuration): Observable<HttpInfo<{ [key: string]: number; }>> {
        const requestContextPromise = this.requestFactory.all(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.allWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details about each queue
     */
    public all(_options?: Configuration): Observable<{ [key: string]: number; }> {
        return this.allWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: number; }>) => apiResponse.data));
    }

    /**
     * Get the details about each queue
     */
    public allVerboseWithHttpInfo(_options?: Configuration): Observable<HttpInfo<{ [key: string]: { [key: string]: { [key: string]: number; }; }; }>> {
        const requestContextPromise = this.requestFactory.allVerbose(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.allVerboseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details about each queue
     */
    public allVerbose(_options?: Configuration): Observable<{ [key: string]: { [key: string]: { [key: string]: number; }; }; }> {
        return this.allVerboseWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: { [key: string]: { [key: string]: number; }; }; }>) => apiResponse.data));
    }

    /**
     * Batch poll for a task of a certain type
     * @param tasktype 
     * @param workerid 
     * @param domain 
     * @param count 
     * @param timeout 
     */
    public batchPollWithHttpInfo(tasktype: string, workerid?: string, domain?: string, count?: number, timeout?: number, _options?: Configuration): Observable<HttpInfo<Array<Task>>> {
        const requestContextPromise = this.requestFactory.batchPoll(tasktype, workerid, domain, count, timeout, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchPollWithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch poll for a task of a certain type
     * @param tasktype 
     * @param workerid 
     * @param domain 
     * @param count 
     * @param timeout 
     */
    public batchPoll(tasktype: string, workerid?: string, domain?: string, count?: number, timeout?: number, _options?: Configuration): Observable<Array<Task>> {
        return this.batchPollWithHttpInfo(tasktype, workerid, domain, count, timeout, _options).pipe(map((apiResponse: HttpInfo<Array<Task>>) => apiResponse.data));
    }

    /**
     * Get the last poll data for all task types
     */
    public getAllPollDataWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<PollData>>> {
        const requestContextPromise = this.requestFactory.getAllPollData(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllPollDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the last poll data for all task types
     */
    public getAllPollData(_options?: Configuration): Observable<Array<PollData>> {
        return this.getAllPollDataWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<PollData>>) => apiResponse.data));
    }

    /**
     * Get the external uri where the task payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public getExternalStorageLocation2WithHttpInfo(path: string, operation: string, payloadType: string, _options?: Configuration): Observable<HttpInfo<ExternalStorageLocation>> {
        const requestContextPromise = this.requestFactory.getExternalStorageLocation2(path, operation, payloadType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExternalStorageLocation2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the external uri where the task payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public getExternalStorageLocation2(path: string, operation: string, payloadType: string, _options?: Configuration): Observable<ExternalStorageLocation> {
        return this.getExternalStorageLocation2WithHttpInfo(path, operation, payloadType, _options).pipe(map((apiResponse: HttpInfo<ExternalStorageLocation>) => apiResponse.data));
    }

    /**
     * Get the last poll data for a given task type
     * @param taskType 
     */
    public getPollDataWithHttpInfo(taskType: string, _options?: Configuration): Observable<HttpInfo<Array<PollData>>> {
        const requestContextPromise = this.requestFactory.getPollData(taskType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPollDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the last poll data for a given task type
     * @param taskType 
     */
    public getPollData(taskType: string, _options?: Configuration): Observable<Array<PollData>> {
        return this.getPollDataWithHttpInfo(taskType, _options).pipe(map((apiResponse: HttpInfo<Array<PollData>>) => apiResponse.data));
    }

    /**
     * Get task by Id
     * @param taskId 
     */
    public getTaskWithHttpInfo(taskId: string, _options?: Configuration): Observable<HttpInfo<Task>> {
        const requestContextPromise = this.requestFactory.getTask(taskId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get task by Id
     * @param taskId 
     */
    public getTask(taskId: string, _options?: Configuration): Observable<Task> {
        return this.getTaskWithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
    }

    /**
     * Get Task Execution Logs
     * @param taskId 
     */
    public getTaskLogsWithHttpInfo(taskId: string, _options?: Configuration): Observable<HttpInfo<Array<TaskExecLog>>> {
        const requestContextPromise = this.requestFactory.getTaskLogs(taskId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaskLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Task Execution Logs
     * @param taskId 
     */
    public getTaskLogs(taskId: string, _options?: Configuration): Observable<Array<TaskExecLog>> {
        return this.getTaskLogsWithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<Array<TaskExecLog>>) => apiResponse.data));
    }

    /**
     * Log Task Execution Details
     * @param taskId 
     * @param body 
     */
    public logWithHttpInfo(taskId: string, body: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.log(taskId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.logWithHttpInfo(rsp)));
            }));
    }

    /**
     * Log Task Execution Details
     * @param taskId 
     * @param body 
     */
    public log(taskId: string, body: string, _options?: Configuration): Observable<void> {
        return this.logWithHttpInfo(taskId, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Poll for a task of a certain type
     * @param tasktype 
     * @param workerid 
     * @param domain 
     */
    public pollWithHttpInfo(tasktype: string, workerid?: string, domain?: string, _options?: Configuration): Observable<HttpInfo<Task>> {
        const requestContextPromise = this.requestFactory.poll(tasktype, workerid, domain, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pollWithHttpInfo(rsp)));
            }));
    }

    /**
     * Poll for a task of a certain type
     * @param tasktype 
     * @param workerid 
     * @param domain 
     */
    public poll(tasktype: string, workerid?: string, domain?: string, _options?: Configuration): Observable<Task> {
        return this.pollWithHttpInfo(tasktype, workerid, domain, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
    }

    /**
     * Requeue pending tasks
     * @param taskType 
     */
    public requeuePendingTaskWithHttpInfo(taskType: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.requeuePendingTask(taskType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requeuePendingTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Requeue pending tasks
     * @param taskType 
     */
    public requeuePendingTask(taskType: string, _options?: Configuration): Observable<string> {
        return this.requeuePendingTaskWithHttpInfo(taskType, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
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
    public search1WithHttpInfo(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Observable<HttpInfo<SearchResultTaskSummary>> {
        const requestContextPromise = this.requestFactory.search1(start, size, sort, freeText, query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.search1WithHttpInfo(rsp)));
            }));
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
    public search1(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Observable<SearchResultTaskSummary> {
        return this.search1WithHttpInfo(start, size, sort, freeText, query, _options).pipe(map((apiResponse: HttpInfo<SearchResultTaskSummary>) => apiResponse.data));
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
    public searchV21WithHttpInfo(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Observable<HttpInfo<SearchResultTask>> {
        const requestContextPromise = this.requestFactory.searchV21(start, size, sort, freeText, query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchV21WithHttpInfo(rsp)));
            }));
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
    public searchV21(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Observable<SearchResultTask> {
        return this.searchV21WithHttpInfo(start, size, sort, freeText, query, _options).pipe(map((apiResponse: HttpInfo<SearchResultTask>) => apiResponse.data));
    }

    /**
     * Deprecated. Please use /tasks/queue/size endpoint
     * @param taskType 
     */
    public sizeWithHttpInfo(taskType?: Array<string>, _options?: Configuration): Observable<HttpInfo<{ [key: string]: number; }>> {
        const requestContextPromise = this.requestFactory.size(taskType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sizeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deprecated. Please use /tasks/queue/size endpoint
     * @param taskType 
     */
    public size(taskType?: Array<string>, _options?: Configuration): Observable<{ [key: string]: number; }> {
        return this.sizeWithHttpInfo(taskType, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: number; }>) => apiResponse.data));
    }

    /**
     * Get queue size for a task type.
     * @param taskType 
     * @param domain 
     * @param isolationGroupId 
     * @param executionNamespace 
     */
    public taskDepthWithHttpInfo(taskType: string, domain?: string, isolationGroupId?: string, executionNamespace?: string, _options?: Configuration): Observable<HttpInfo<number>> {
        const requestContextPromise = this.requestFactory.taskDepth(taskType, domain, isolationGroupId, executionNamespace, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.taskDepthWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get queue size for a task type.
     * @param taskType 
     * @param domain 
     * @param isolationGroupId 
     * @param executionNamespace 
     */
    public taskDepth(taskType: string, domain?: string, isolationGroupId?: string, executionNamespace?: string, _options?: Configuration): Observable<number> {
        return this.taskDepthWithHttpInfo(taskType, domain, isolationGroupId, executionNamespace, _options).pipe(map((apiResponse: HttpInfo<number>) => apiResponse.data));
    }

    /**
     * Update a task
     * @param taskResult 
     */
    public updateTaskWithHttpInfo(taskResult: TaskResult, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.updateTask(taskResult, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a task
     * @param taskResult 
     */
    public updateTask(taskResult: TaskResult, _options?: Configuration): Observable<string> {
        return this.updateTaskWithHttpInfo(taskResult, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { WorkflowBulkResourceApiRequestFactory, WorkflowBulkResourceApiResponseProcessor} from "../apis/WorkflowBulkResourceApi";
export class ObservableWorkflowBulkResourceApi {
    private requestFactory: WorkflowBulkResourceApiRequestFactory;
    private responseProcessor: WorkflowBulkResourceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkflowBulkResourceApiRequestFactory,
        responseProcessor?: WorkflowBulkResourceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WorkflowBulkResourceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WorkflowBulkResourceApiResponseProcessor();
    }

    /**
     * Pause the list of workflows
     * @param requestBody 
     */
    public pauseWorkflow1WithHttpInfo(requestBody: Array<string>, _options?: Configuration): Observable<HttpInfo<BulkResponse>> {
        const requestContextPromise = this.requestFactory.pauseWorkflow1(requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pauseWorkflow1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Pause the list of workflows
     * @param requestBody 
     */
    public pauseWorkflow1(requestBody: Array<string>, _options?: Configuration): Observable<BulkResponse> {
        return this.pauseWorkflow1WithHttpInfo(requestBody, _options).pipe(map((apiResponse: HttpInfo<BulkResponse>) => apiResponse.data));
    }

    /**
     * Restart the list of completed workflow
     * @param requestBody 
     * @param useLatestDefinitions 
     */
    public restart1WithHttpInfo(requestBody: Array<string>, useLatestDefinitions?: boolean, _options?: Configuration): Observable<HttpInfo<BulkResponse>> {
        const requestContextPromise = this.requestFactory.restart1(requestBody, useLatestDefinitions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restart1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Restart the list of completed workflow
     * @param requestBody 
     * @param useLatestDefinitions 
     */
    public restart1(requestBody: Array<string>, useLatestDefinitions?: boolean, _options?: Configuration): Observable<BulkResponse> {
        return this.restart1WithHttpInfo(requestBody, useLatestDefinitions, _options).pipe(map((apiResponse: HttpInfo<BulkResponse>) => apiResponse.data));
    }

    /**
     * Resume the list of workflows
     * @param requestBody 
     */
    public resumeWorkflow1WithHttpInfo(requestBody: Array<string>, _options?: Configuration): Observable<HttpInfo<BulkResponse>> {
        const requestContextPromise = this.requestFactory.resumeWorkflow1(requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resumeWorkflow1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Resume the list of workflows
     * @param requestBody 
     */
    public resumeWorkflow1(requestBody: Array<string>, _options?: Configuration): Observable<BulkResponse> {
        return this.resumeWorkflow1WithHttpInfo(requestBody, _options).pipe(map((apiResponse: HttpInfo<BulkResponse>) => apiResponse.data));
    }

    /**
     * Retry the last failed task for each workflow from the list
     * @param requestBody 
     */
    public retry1WithHttpInfo(requestBody: Array<string>, _options?: Configuration): Observable<HttpInfo<BulkResponse>> {
        const requestContextPromise = this.requestFactory.retry1(requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retry1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retry the last failed task for each workflow from the list
     * @param requestBody 
     */
    public retry1(requestBody: Array<string>, _options?: Configuration): Observable<BulkResponse> {
        return this.retry1WithHttpInfo(requestBody, _options).pipe(map((apiResponse: HttpInfo<BulkResponse>) => apiResponse.data));
    }

    /**
     * Terminate workflows execution
     * @param requestBody 
     * @param reason 
     */
    public terminateWithHttpInfo(requestBody: Array<string>, reason?: string, _options?: Configuration): Observable<HttpInfo<BulkResponse>> {
        const requestContextPromise = this.requestFactory.terminate(requestBody, reason, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.terminateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Terminate workflows execution
     * @param requestBody 
     * @param reason 
     */
    public terminate(requestBody: Array<string>, reason?: string, _options?: Configuration): Observable<BulkResponse> {
        return this.terminateWithHttpInfo(requestBody, reason, _options).pipe(map((apiResponse: HttpInfo<BulkResponse>) => apiResponse.data));
    }

}

import { WorkflowResourceApiRequestFactory, WorkflowResourceApiResponseProcessor} from "../apis/WorkflowResourceApi";
export class ObservableWorkflowResourceApi {
    private requestFactory: WorkflowResourceApiRequestFactory;
    private responseProcessor: WorkflowResourceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkflowResourceApiRequestFactory,
        responseProcessor?: WorkflowResourceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WorkflowResourceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WorkflowResourceApiResponseProcessor();
    }

    /**
     * Removes the workflow from the system
     * @param workflowId 
     * @param archiveWorkflow 
     */
    public _deleteWithHttpInfo(workflowId: string, archiveWorkflow?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory._delete(workflowId, archiveWorkflow, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._deleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes the workflow from the system
     * @param workflowId 
     * @param archiveWorkflow 
     */
    public _delete(workflowId: string, archiveWorkflow?: boolean, _options?: Configuration): Observable<void> {
        return this._deleteWithHttpInfo(workflowId, archiveWorkflow, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Starts the decision task for a workflow
     * @param workflowId 
     */
    public decideWithHttpInfo(workflowId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.decide(workflowId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.decideWithHttpInfo(rsp)));
            }));
    }

    /**
     * Starts the decision task for a workflow
     * @param workflowId 
     */
    public decide(workflowId: string, _options?: Configuration): Observable<void> {
        return this.decideWithHttpInfo(workflowId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets the workflow by workflow id
     * @param workflowId 
     * @param includeTasks 
     */
    public getExecutionStatusWithHttpInfo(workflowId: string, includeTasks?: boolean, _options?: Configuration): Observable<HttpInfo<Workflow>> {
        const requestContextPromise = this.requestFactory.getExecutionStatus(workflowId, includeTasks, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExecutionStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the workflow by workflow id
     * @param workflowId 
     * @param includeTasks 
     */
    public getExecutionStatus(workflowId: string, includeTasks?: boolean, _options?: Configuration): Observable<Workflow> {
        return this.getExecutionStatusWithHttpInfo(workflowId, includeTasks, _options).pipe(map((apiResponse: HttpInfo<Workflow>) => apiResponse.data));
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public getExternalStorageLocationWithHttpInfo(path: string, operation: string, payloadType: string, _options?: Configuration): Observable<HttpInfo<ExternalStorageLocation>> {
        const requestContextPromise = this.requestFactory.getExternalStorageLocation(path, operation, payloadType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExternalStorageLocationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public getExternalStorageLocation(path: string, operation: string, payloadType: string, _options?: Configuration): Observable<ExternalStorageLocation> {
        return this.getExternalStorageLocationWithHttpInfo(path, operation, payloadType, _options).pipe(map((apiResponse: HttpInfo<ExternalStorageLocation>) => apiResponse.data));
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public getExternalStorageLocation1WithHttpInfo(path: string, operation: string, payloadType: string, _options?: Configuration): Observable<HttpInfo<ExternalStorageLocation>> {
        const requestContextPromise = this.requestFactory.getExternalStorageLocation1(path, operation, payloadType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExternalStorageLocation1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public getExternalStorageLocation1(path: string, operation: string, payloadType: string, _options?: Configuration): Observable<ExternalStorageLocation> {
        return this.getExternalStorageLocation1WithHttpInfo(path, operation, payloadType, _options).pipe(map((apiResponse: HttpInfo<ExternalStorageLocation>) => apiResponse.data));
    }

    /**
     * Retrieve all the running workflows
     * @param name 
     * @param version 
     * @param startTime 
     * @param endTime 
     */
    public getRunningWorkflowWithHttpInfo(name: string, version?: number, startTime?: number, endTime?: number, _options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.getRunningWorkflow(name, version, startTime, endTime, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRunningWorkflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve all the running workflows
     * @param name 
     * @param version 
     * @param startTime 
     * @param endTime 
     */
    public getRunningWorkflow(name: string, version?: number, startTime?: number, endTime?: number, _options?: Configuration): Observable<Array<string>> {
        return this.getRunningWorkflowWithHttpInfo(name, version, startTime, endTime, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Lists workflows for the given correlation id list
     * @param name 
     * @param requestBody 
     * @param includeClosed 
     * @param includeTasks 
     */
    public getWorkflowsWithHttpInfo(name: string, requestBody: Array<string>, includeClosed?: boolean, includeTasks?: boolean, _options?: Configuration): Observable<HttpInfo<{ [key: string]: Array<Workflow>; }>> {
        const requestContextPromise = this.requestFactory.getWorkflows(name, requestBody, includeClosed, includeTasks, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkflowsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists workflows for the given correlation id list
     * @param name 
     * @param requestBody 
     * @param includeClosed 
     * @param includeTasks 
     */
    public getWorkflows(name: string, requestBody: Array<string>, includeClosed?: boolean, includeTasks?: boolean, _options?: Configuration): Observable<{ [key: string]: Array<Workflow>; }> {
        return this.getWorkflowsWithHttpInfo(name, requestBody, includeClosed, includeTasks, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: Array<Workflow>; }>) => apiResponse.data));
    }

    /**
     * Lists workflows for the given correlation id
     * @param name 
     * @param correlationId 
     * @param includeClosed 
     * @param includeTasks 
     */
    public getWorkflows1WithHttpInfo(name: string, correlationId: string, includeClosed?: boolean, includeTasks?: boolean, _options?: Configuration): Observable<HttpInfo<Array<Workflow>>> {
        const requestContextPromise = this.requestFactory.getWorkflows1(name, correlationId, includeClosed, includeTasks, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkflows1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists workflows for the given correlation id
     * @param name 
     * @param correlationId 
     * @param includeClosed 
     * @param includeTasks 
     */
    public getWorkflows1(name: string, correlationId: string, includeClosed?: boolean, includeTasks?: boolean, _options?: Configuration): Observable<Array<Workflow>> {
        return this.getWorkflows1WithHttpInfo(name, correlationId, includeClosed, includeTasks, _options).pipe(map((apiResponse: HttpInfo<Array<Workflow>>) => apiResponse.data));
    }

    /**
     * Pauses the workflow
     * @param workflowId 
     */
    public pauseWorkflowWithHttpInfo(workflowId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pauseWorkflow(workflowId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pauseWorkflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Pauses the workflow
     * @param workflowId 
     */
    public pauseWorkflow(workflowId: string, _options?: Configuration): Observable<void> {
        return this.pauseWorkflowWithHttpInfo(workflowId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Reruns the workflow from a specific task
     * @param workflowId 
     * @param rerunWorkflowRequest 
     */
    public rerunWithHttpInfo(workflowId: string, rerunWorkflowRequest: RerunWorkflowRequest, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.rerun(workflowId, rerunWorkflowRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rerunWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reruns the workflow from a specific task
     * @param workflowId 
     * @param rerunWorkflowRequest 
     */
    public rerun(workflowId: string, rerunWorkflowRequest: RerunWorkflowRequest, _options?: Configuration): Observable<string> {
        return this.rerunWithHttpInfo(workflowId, rerunWorkflowRequest, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Resets callback times of all non-terminal CUSTOM tasks to 0
     * @param workflowId 
     */
    public resetWorkflowWithHttpInfo(workflowId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.resetWorkflow(workflowId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetWorkflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resets callback times of all non-terminal CUSTOM tasks to 0
     * @param workflowId 
     */
    public resetWorkflow(workflowId: string, _options?: Configuration): Observable<void> {
        return this.resetWorkflowWithHttpInfo(workflowId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Restarts a completed workflow
     * @param workflowId 
     * @param useLatestDefinitions 
     */
    public restartWithHttpInfo(workflowId: string, useLatestDefinitions?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.restart(workflowId, useLatestDefinitions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restartWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restarts a completed workflow
     * @param workflowId 
     * @param useLatestDefinitions 
     */
    public restart(workflowId: string, useLatestDefinitions?: boolean, _options?: Configuration): Observable<void> {
        return this.restartWithHttpInfo(workflowId, useLatestDefinitions, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Resumes the workflow
     * @param workflowId 
     */
    public resumeWorkflowWithHttpInfo(workflowId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.resumeWorkflow(workflowId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resumeWorkflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resumes the workflow
     * @param workflowId 
     */
    public resumeWorkflow(workflowId: string, _options?: Configuration): Observable<void> {
        return this.resumeWorkflowWithHttpInfo(workflowId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retries the last failed task
     * @param workflowId 
     * @param resumeSubworkflowTasks 
     */
    public retryWithHttpInfo(workflowId: string, resumeSubworkflowTasks?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.retry(workflowId, resumeSubworkflowTasks, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retries the last failed task
     * @param workflowId 
     * @param resumeSubworkflowTasks 
     */
    public retry(workflowId: string, resumeSubworkflowTasks?: boolean, _options?: Configuration): Observable<void> {
        return this.retryWithHttpInfo(workflowId, resumeSubworkflowTasks, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public searchWithHttpInfo(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Observable<HttpInfo<SearchResultWorkflowSummary>> {
        const requestContextPromise = this.requestFactory.search(start, size, sort, freeText, query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchWithHttpInfo(rsp)));
            }));
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
    public search(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Observable<SearchResultWorkflowSummary> {
        return this.searchWithHttpInfo(start, size, sort, freeText, query, _options).pipe(map((apiResponse: HttpInfo<SearchResultWorkflowSummary>) => apiResponse.data));
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
    public searchV2WithHttpInfo(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Observable<HttpInfo<SearchResultWorkflow>> {
        const requestContextPromise = this.requestFactory.searchV2(start, size, sort, freeText, query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchV2WithHttpInfo(rsp)));
            }));
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
    public searchV2(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Observable<SearchResultWorkflow> {
        return this.searchV2WithHttpInfo(start, size, sort, freeText, query, _options).pipe(map((apiResponse: HttpInfo<SearchResultWorkflow>) => apiResponse.data));
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
    public searchWorkflowsByTasksWithHttpInfo(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Observable<HttpInfo<SearchResultWorkflowSummary>> {
        const requestContextPromise = this.requestFactory.searchWorkflowsByTasks(start, size, sort, freeText, query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchWorkflowsByTasksWithHttpInfo(rsp)));
            }));
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
    public searchWorkflowsByTasks(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Observable<SearchResultWorkflowSummary> {
        return this.searchWorkflowsByTasksWithHttpInfo(start, size, sort, freeText, query, _options).pipe(map((apiResponse: HttpInfo<SearchResultWorkflowSummary>) => apiResponse.data));
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
    public searchWorkflowsByTasksV2WithHttpInfo(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Observable<HttpInfo<SearchResultWorkflow>> {
        const requestContextPromise = this.requestFactory.searchWorkflowsByTasksV2(start, size, sort, freeText, query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchWorkflowsByTasksV2WithHttpInfo(rsp)));
            }));
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
    public searchWorkflowsByTasksV2(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Observable<SearchResultWorkflow> {
        return this.searchWorkflowsByTasksV2WithHttpInfo(start, size, sort, freeText, query, _options).pipe(map((apiResponse: HttpInfo<SearchResultWorkflow>) => apiResponse.data));
    }

    /**
     * Skips a given task from a current running workflow
     * @param workflowId 
     * @param taskReferenceName 
     * @param skipTaskRequest 
     */
    public skipTaskFromWorkflowWithHttpInfo(workflowId: string, taskReferenceName: string, skipTaskRequest: SkipTaskRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.skipTaskFromWorkflow(workflowId, taskReferenceName, skipTaskRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.skipTaskFromWorkflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Skips a given task from a current running workflow
     * @param workflowId 
     * @param taskReferenceName 
     * @param skipTaskRequest 
     */
    public skipTaskFromWorkflow(workflowId: string, taskReferenceName: string, skipTaskRequest: SkipTaskRequest, _options?: Configuration): Observable<void> {
        return this.skipTaskFromWorkflowWithHttpInfo(workflowId, taskReferenceName, skipTaskRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain
     * @param startWorkflowRequest 
     */
    public startWorkflowWithHttpInfo(startWorkflowRequest: StartWorkflowRequest, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.startWorkflow(startWorkflowRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startWorkflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain
     * @param startWorkflowRequest 
     */
    public startWorkflow(startWorkflowRequest: StartWorkflowRequest, _options?: Configuration): Observable<string> {
        return this.startWorkflowWithHttpInfo(startWorkflowRequest, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking
     * @param name 
     * @param requestBody 
     * @param version 
     * @param correlationId 
     * @param priority 
     */
    public startWorkflow1WithHttpInfo(name: string, requestBody: { [key: string]: any; }, version?: number, correlationId?: string, priority?: number, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.startWorkflow1(name, requestBody, version, correlationId, priority, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startWorkflow1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking
     * @param name 
     * @param requestBody 
     * @param version 
     * @param correlationId 
     * @param priority 
     */
    public startWorkflow1(name: string, requestBody: { [key: string]: any; }, version?: number, correlationId?: string, priority?: number, _options?: Configuration): Observable<string> {
        return this.startWorkflow1WithHttpInfo(name, requestBody, version, correlationId, priority, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Terminate workflow execution
     * @param workflowId 
     * @param reason 
     * @param triggerFailureWorkflow 
     */
    public terminate1WithHttpInfo(workflowId: string, reason?: string, triggerFailureWorkflow?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.terminate1(workflowId, reason, triggerFailureWorkflow, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.terminate1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Terminate workflow execution
     * @param workflowId 
     * @param reason 
     * @param triggerFailureWorkflow 
     */
    public terminate1(workflowId: string, reason?: string, triggerFailureWorkflow?: boolean, _options?: Configuration): Observable<void> {
        return this.terminate1WithHttpInfo(workflowId, reason, triggerFailureWorkflow, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Test workflow execution using mock data
     * @param workflowTestRequest 
     */
    public testWorkflowWithHttpInfo(workflowTestRequest: WorkflowTestRequest, _options?: Configuration): Observable<HttpInfo<Workflow>> {
        const requestContextPromise = this.requestFactory.testWorkflow(workflowTestRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testWorkflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Test workflow execution using mock data
     * @param workflowTestRequest 
     */
    public testWorkflow(workflowTestRequest: WorkflowTestRequest, _options?: Configuration): Observable<Workflow> {
        return this.testWorkflowWithHttpInfo(workflowTestRequest, _options).pipe(map((apiResponse: HttpInfo<Workflow>) => apiResponse.data));
    }

}
