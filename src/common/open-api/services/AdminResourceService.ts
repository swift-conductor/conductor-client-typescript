/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task } from '../models/Task';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AdminResourceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queue up all the running workflows for sweep
     * @param workflowId
     * @returns string OK
     * @throws ApiError
     */
    public requeueSweep(
        workflowId: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/admin/sweep/requeue/{workflowId}',
            path: {
                'workflowId': workflowId,
            },
        });
    }
    /**
     * Verify and repair workflow consistency
     * @param workflowId
     * @returns string OK
     * @throws ApiError
     */
    public verifyAndRepairWorkflowConsistency(
        workflowId: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/admin/consistency/verifyAndRepair/{workflowId}',
            path: {
                'workflowId': workflowId,
            },
        });
    }
    /**
     * Get the list of pending tasks for a given task type
     * @param tasktype
     * @param start
     * @param count
     * @returns Task OK
     * @throws ApiError
     */
    public view(
        tasktype: string,
        start?: number,
        count: number = 100,
    ): CancelablePromise<Array<Task>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/admin/task/{tasktype}',
            path: {
                'tasktype': tasktype,
            },
            query: {
                'start': start,
                'count': count,
            },
        });
    }
    /**
     * Get registered queues
     * @param verbose
     * @returns any OK
     * @throws ApiError
     */
    public getEventQueues(
        verbose: boolean = false,
    ): CancelablePromise<Record<string, Record<string, any>>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/admin/queues',
            query: {
                'verbose': verbose,
            },
        });
    }
    /**
     * Get all the configuration parameters
     * @returns any OK
     * @throws ApiError
     */
    public getAllConfig(): CancelablePromise<Record<string, Record<string, any>>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/admin/config',
        });
    }
}
