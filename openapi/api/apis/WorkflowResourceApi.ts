// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ExternalStorageLocation } from '../models/ExternalStorageLocation';
import { RerunWorkflowRequest } from '../models/RerunWorkflowRequest';
import { SearchResultWorkflow } from '../models/SearchResultWorkflow';
import { SearchResultWorkflowSummary } from '../models/SearchResultWorkflowSummary';
import { SkipTaskRequest } from '../models/SkipTaskRequest';
import { StartWorkflowRequest } from '../models/StartWorkflowRequest';
import { Workflow } from '../models/Workflow';
import { WorkflowTestRequest } from '../models/WorkflowTestRequest';

/**
 * no description
 */
export class WorkflowResourceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Removes the workflow from the system
     * @param workflowId 
     * @param archiveWorkflow 
     */
    public async _delete(workflowId: string, archiveWorkflow?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("WorkflowResourceApi", "_delete", "workflowId");
        }



        // Path Params
        const localVarPath = '/api/workflow/{workflowId}/remove'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (archiveWorkflow !== undefined) {
            requestContext.setQueryParam("archiveWorkflow", ObjectSerializer.serialize(archiveWorkflow, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Starts the decision task for a workflow
     * @param workflowId 
     */
    public async decide(workflowId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("WorkflowResourceApi", "decide", "workflowId");
        }


        // Path Params
        const localVarPath = '/api/workflow/decide/{workflowId}'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the workflow by workflow id
     * @param workflowId 
     * @param includeTasks 
     */
    public async getExecutionStatus(workflowId: string, includeTasks?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("WorkflowResourceApi", "getExecutionStatus", "workflowId");
        }



        // Path Params
        const localVarPath = '/api/workflow/{workflowId}'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeTasks !== undefined) {
            requestContext.setQueryParam("includeTasks", ObjectSerializer.serialize(includeTasks, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the uri and path of the external storage where the workflow payload is to be stored
     * @param path 
     * @param operation 
     * @param payloadType 
     */
    public async getExternalStorageLocation(path: string, operation: string, payloadType: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("WorkflowResourceApi", "getExternalStorageLocation", "path");
        }


        // verify required parameter 'operation' is not null or undefined
        if (operation === null || operation === undefined) {
            throw new RequiredError("WorkflowResourceApi", "getExternalStorageLocation", "operation");
        }


        // verify required parameter 'payloadType' is not null or undefined
        if (payloadType === null || payloadType === undefined) {
            throw new RequiredError("WorkflowResourceApi", "getExternalStorageLocation", "payloadType");
        }


        // Path Params
        const localVarPath = '/api/workflow/external-storage-location';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (path !== undefined) {
            requestContext.setQueryParam("path", ObjectSerializer.serialize(path, "string", ""));
        }

        // Query Params
        if (operation !== undefined) {
            requestContext.setQueryParam("operation", ObjectSerializer.serialize(operation, "string", ""));
        }

        // Query Params
        if (payloadType !== undefined) {
            requestContext.setQueryParam("payloadType", ObjectSerializer.serialize(payloadType, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve all the running workflows
     * @param name 
     * @param version 
     * @param startTime 
     * @param endTime 
     */
    public async getRunningWorkflow(name: string, version?: number, startTime?: number, endTime?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowResourceApi", "getRunningWorkflow", "name");
        }





        // Path Params
        const localVarPath = '/api/workflow/running/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "number", "int32"));
        }

        // Query Params
        if (startTime !== undefined) {
            requestContext.setQueryParam("startTime", ObjectSerializer.serialize(startTime, "number", "int64"));
        }

        // Query Params
        if (endTime !== undefined) {
            requestContext.setQueryParam("endTime", ObjectSerializer.serialize(endTime, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists workflows for the given correlation id list
     * @param name 
     * @param requestBody 
     * @param includeClosed 
     * @param includeTasks 
     */
    public async getWorkflows(name: string, requestBody: Array<string>, includeClosed?: boolean, includeTasks?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowResourceApi", "getWorkflows", "name");
        }


        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("WorkflowResourceApi", "getWorkflows", "requestBody");
        }




        // Path Params
        const localVarPath = '/api/workflow/{name}/correlated'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeClosed !== undefined) {
            requestContext.setQueryParam("includeClosed", ObjectSerializer.serialize(includeClosed, "boolean", ""));
        }

        // Query Params
        if (includeTasks !== undefined) {
            requestContext.setQueryParam("includeTasks", ObjectSerializer.serialize(includeTasks, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "Array<string>", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists workflows for the given correlation id
     * @param name 
     * @param correlationId 
     * @param includeClosed 
     * @param includeTasks 
     */
    public async getWorkflows1(name: string, correlationId: string, includeClosed?: boolean, includeTasks?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowResourceApi", "getWorkflows1", "name");
        }


        // verify required parameter 'correlationId' is not null or undefined
        if (correlationId === null || correlationId === undefined) {
            throw new RequiredError("WorkflowResourceApi", "getWorkflows1", "correlationId");
        }




        // Path Params
        const localVarPath = '/api/workflow/{name}/correlated/{correlationId}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'correlationId' + '}', encodeURIComponent(String(correlationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeClosed !== undefined) {
            requestContext.setQueryParam("includeClosed", ObjectSerializer.serialize(includeClosed, "boolean", ""));
        }

        // Query Params
        if (includeTasks !== undefined) {
            requestContext.setQueryParam("includeTasks", ObjectSerializer.serialize(includeTasks, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Pauses the workflow
     * @param workflowId 
     */
    public async pauseWorkflow(workflowId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("WorkflowResourceApi", "pauseWorkflow", "workflowId");
        }


        // Path Params
        const localVarPath = '/api/workflow/{workflowId}/pause'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Reruns the workflow from a specific task
     * @param workflowId 
     * @param rerunWorkflowRequest 
     */
    public async rerun(workflowId: string, rerunWorkflowRequest: RerunWorkflowRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("WorkflowResourceApi", "rerun", "workflowId");
        }


        // verify required parameter 'rerunWorkflowRequest' is not null or undefined
        if (rerunWorkflowRequest === null || rerunWorkflowRequest === undefined) {
            throw new RequiredError("WorkflowResourceApi", "rerun", "rerunWorkflowRequest");
        }


        // Path Params
        const localVarPath = '/api/workflow/{workflowId}/rerun'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(rerunWorkflowRequest, "RerunWorkflowRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Resets callback times of all non-terminal CUSTOM tasks to 0
     * @param workflowId 
     */
    public async resetWorkflow(workflowId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("WorkflowResourceApi", "resetWorkflow", "workflowId");
        }


        // Path Params
        const localVarPath = '/api/workflow/{workflowId}/reset-callbacks'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Restarts a completed workflow
     * @param workflowId 
     * @param useLatestDefinitions 
     */
    public async restart(workflowId: string, useLatestDefinitions?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("WorkflowResourceApi", "restart", "workflowId");
        }



        // Path Params
        const localVarPath = '/api/workflow/{workflowId}/restart'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (useLatestDefinitions !== undefined) {
            requestContext.setQueryParam("useLatestDefinitions", ObjectSerializer.serialize(useLatestDefinitions, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Resumes the workflow
     * @param workflowId 
     */
    public async resumeWorkflow(workflowId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("WorkflowResourceApi", "resumeWorkflow", "workflowId");
        }


        // Path Params
        const localVarPath = '/api/workflow/{workflowId}/resume'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retries the last failed task
     * @param workflowId 
     * @param resumeSubworkflowTasks 
     */
    public async retry(workflowId: string, resumeSubworkflowTasks?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("WorkflowResourceApi", "retry", "workflowId");
        }



        // Path Params
        const localVarPath = '/api/workflow/{workflowId}/retry'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (resumeSubworkflowTasks !== undefined) {
            requestContext.setQueryParam("resumeSubworkflowTasks", ObjectSerializer.serialize(resumeSubworkflowTasks, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async search(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/api/workflow/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", "int32"));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (freeText !== undefined) {
            requestContext.setQueryParam("freeText", ObjectSerializer.serialize(freeText, "string", ""));
        }

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async searchV2(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/api/workflow/search-v2';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", "int32"));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (freeText !== undefined) {
            requestContext.setQueryParam("freeText", ObjectSerializer.serialize(freeText, "string", ""));
        }

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async searchWorkflowsByTasks(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/api/workflow/search-by-tasks';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", "int32"));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (freeText !== undefined) {
            requestContext.setQueryParam("freeText", ObjectSerializer.serialize(freeText, "string", ""));
        }

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async searchWorkflowsByTasksV2(start?: number, size?: number, sort?: string, freeText?: string, query?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/api/workflow/search-by-tasks-v2';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", "int32"));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (freeText !== undefined) {
            requestContext.setQueryParam("freeText", ObjectSerializer.serialize(freeText, "string", ""));
        }

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Skips a given task from a current running workflow
     * @param workflowId 
     * @param taskReferenceName 
     * @param skipTaskRequest 
     */
    public async skipTaskFromWorkflow(workflowId: string, taskReferenceName: string, skipTaskRequest: SkipTaskRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("WorkflowResourceApi", "skipTaskFromWorkflow", "workflowId");
        }


        // verify required parameter 'taskReferenceName' is not null or undefined
        if (taskReferenceName === null || taskReferenceName === undefined) {
            throw new RequiredError("WorkflowResourceApi", "skipTaskFromWorkflow", "taskReferenceName");
        }


        // verify required parameter 'skipTaskRequest' is not null or undefined
        if (skipTaskRequest === null || skipTaskRequest === undefined) {
            throw new RequiredError("WorkflowResourceApi", "skipTaskFromWorkflow", "skipTaskRequest");
        }


        // Path Params
        const localVarPath = '/api/workflow/{workflowId}/skip-task/{taskReferenceName}'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)))
            .replace('{' + 'taskReferenceName' + '}', encodeURIComponent(String(taskReferenceName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (skipTaskRequest !== undefined) {
            requestContext.setQueryParam("skipTaskRequest", ObjectSerializer.serialize(skipTaskRequest, "SkipTaskRequest", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain
     * @param startWorkflowRequest 
     */
    public async startWorkflow(startWorkflowRequest: StartWorkflowRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'startWorkflowRequest' is not null or undefined
        if (startWorkflowRequest === null || startWorkflowRequest === undefined) {
            throw new RequiredError("WorkflowResourceApi", "startWorkflow", "startWorkflowRequest");
        }


        // Path Params
        const localVarPath = '/api/workflow';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(startWorkflowRequest, "StartWorkflowRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking
     * @param name 
     * @param requestBody 
     * @param version 
     * @param correlationId 
     * @param priority 
     */
    public async startWorkflow1(name: string, requestBody: { [key: string]: any; }, version?: number, correlationId?: string, priority?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowResourceApi", "startWorkflow1", "name");
        }


        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("WorkflowResourceApi", "startWorkflow1", "requestBody");
        }





        // Path Params
        const localVarPath = '/api/workflow/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "number", "int32"));
        }

        // Query Params
        if (correlationId !== undefined) {
            requestContext.setQueryParam("correlationId", ObjectSerializer.serialize(correlationId, "string", ""));
        }

        // Query Params
        if (priority !== undefined) {
            requestContext.setQueryParam("priority", ObjectSerializer.serialize(priority, "number", "int32"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "{ [key: string]: any; }", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Terminate workflow execution
     * @param workflowId 
     * @param reason 
     * @param triggerFailureWorkflow 
     */
    public async terminate1(workflowId: string, reason?: string, triggerFailureWorkflow?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("WorkflowResourceApi", "terminate1", "workflowId");
        }




        // Path Params
        const localVarPath = '/api/workflow/{workflowId}'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (reason !== undefined) {
            requestContext.setQueryParam("reason", ObjectSerializer.serialize(reason, "string", ""));
        }

        // Query Params
        if (triggerFailureWorkflow !== undefined) {
            requestContext.setQueryParam("triggerFailureWorkflow", ObjectSerializer.serialize(triggerFailureWorkflow, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Test workflow execution using mock data
     * @param workflowTestRequest 
     */
    public async testWorkflow(workflowTestRequest: WorkflowTestRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowTestRequest' is not null or undefined
        if (workflowTestRequest === null || workflowTestRequest === undefined) {
            throw new RequiredError("WorkflowResourceApi", "testWorkflow", "workflowTestRequest");
        }


        // Path Params
        const localVarPath = '/api/workflow/test';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(workflowTestRequest, "WorkflowTestRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class WorkflowResourceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to _delete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async _deleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to decide
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async decideWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getExecutionStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getExecutionStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Workflow >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Workflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Workflow", ""
            ) as Workflow;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Workflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Workflow", ""
            ) as Workflow;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getExternalStorageLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getExternalStorageLocationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ExternalStorageLocation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalStorageLocation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalStorageLocation", ""
            ) as ExternalStorageLocation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExternalStorageLocation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalStorageLocation", ""
            ) as ExternalStorageLocation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRunningWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRunningWorkflowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<string> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWorkflows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWorkflowsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: Array<Workflow>; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: Array<Workflow>; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: Array<Workflow>; }", ""
            ) as { [key: string]: Array<Workflow>; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: Array<Workflow>; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: Array<Workflow>; }", ""
            ) as { [key: string]: Array<Workflow>; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWorkflows1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWorkflows1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Workflow> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Workflow> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Workflow>", ""
            ) as Array<Workflow>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Workflow> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Workflow>", ""
            ) as Array<Workflow>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to pauseWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async pauseWorkflowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rerun
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rerunWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resetWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async resetWorkflowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to restart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async restartWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resumeWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async resumeWorkflowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retry
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to search
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchResultWorkflowSummary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SearchResultWorkflowSummary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchResultWorkflowSummary", ""
            ) as SearchResultWorkflowSummary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SearchResultWorkflowSummary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchResultWorkflowSummary", ""
            ) as SearchResultWorkflowSummary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchResultWorkflow >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SearchResultWorkflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchResultWorkflow", ""
            ) as SearchResultWorkflow;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SearchResultWorkflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchResultWorkflow", ""
            ) as SearchResultWorkflow;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchWorkflowsByTasks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchWorkflowsByTasksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchResultWorkflowSummary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SearchResultWorkflowSummary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchResultWorkflowSummary", ""
            ) as SearchResultWorkflowSummary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SearchResultWorkflowSummary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchResultWorkflowSummary", ""
            ) as SearchResultWorkflowSummary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchWorkflowsByTasksV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchWorkflowsByTasksV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchResultWorkflow >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SearchResultWorkflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchResultWorkflow", ""
            ) as SearchResultWorkflow;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SearchResultWorkflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchResultWorkflow", ""
            ) as SearchResultWorkflow;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to skipTaskFromWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async skipTaskFromWorkflowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to startWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async startWorkflowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to startWorkflow1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async startWorkflow1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to terminate1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async terminate1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testWorkflowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Workflow >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Workflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Workflow", ""
            ) as Workflow;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Workflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Workflow", ""
            ) as Workflow;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
