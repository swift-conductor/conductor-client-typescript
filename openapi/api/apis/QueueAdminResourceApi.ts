// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';



/**
 * no description
 */
export class QueueAdminResourceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get Queue Names
     */
    public async names(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/queue/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the queue length
     */
    public async size1(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/queue/size';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Publish a message in queue to mark a wait task as completed.
     * @param workflowId 
     * @param taskRefName 
     * @param status 
     * @param requestBody 
     */
    public async update1(workflowId: string, taskRefName: string, status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED', requestBody: { [key: string]: any; }, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("QueueAdminResourceApi", "update1", "workflowId");
        }


        // verify required parameter 'taskRefName' is not null or undefined
        if (taskRefName === null || taskRefName === undefined) {
            throw new RequiredError("QueueAdminResourceApi", "update1", "taskRefName");
        }


        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new RequiredError("QueueAdminResourceApi", "update1", "status");
        }


        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("QueueAdminResourceApi", "update1", "requestBody");
        }


        // Path Params
        const localVarPath = '/api/queue/update/{workflowId}/{taskRefName}/{status}'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)))
            .replace('{' + 'taskRefName' + '}', encodeURIComponent(String(taskRefName)))
            .replace('{' + 'status' + '}', encodeURIComponent(String(status)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Publish a message in queue to mark a wait task (by taskId) as completed.
     * @param workflowId 
     * @param taskId 
     * @param status 
     * @param requestBody 
     */
    public async updateByTaskId(workflowId: string, taskId: string, status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED', requestBody: { [key: string]: any; }, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workflowId' is not null or undefined
        if (workflowId === null || workflowId === undefined) {
            throw new RequiredError("QueueAdminResourceApi", "updateByTaskId", "workflowId");
        }


        // verify required parameter 'taskId' is not null or undefined
        if (taskId === null || taskId === undefined) {
            throw new RequiredError("QueueAdminResourceApi", "updateByTaskId", "taskId");
        }


        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new RequiredError("QueueAdminResourceApi", "updateByTaskId", "status");
        }


        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("QueueAdminResourceApi", "updateByTaskId", "requestBody");
        }


        // Path Params
        const localVarPath = '/api/queue/update/{workflowId}/task/{taskId}/{status}'
            .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)))
            .replace('{' + 'taskId' + '}', encodeURIComponent(String(taskId)))
            .replace('{' + 'status' + '}', encodeURIComponent(String(status)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

}

export class QueueAdminResourceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to names
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async namesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: string; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: string; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: string; }", ""
            ) as { [key: string]: string; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: string; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: string; }", ""
            ) as { [key: string]: string; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to size1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async size1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: number; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: number; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: number; }", "int64"
            ) as { [key: string]: number; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: number; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: number; }", "int64"
            ) as { [key: string]: number; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to update1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async update1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to updateByTaskId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateByTaskIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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

}
