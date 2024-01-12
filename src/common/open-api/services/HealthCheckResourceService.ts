/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HealthCheckStatus } from '../models/HealthCheckStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HealthCheckResourceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns HealthCheckStatus OK
     * @throws ApiError
     */
    public doCheck(): CancelablePromise<HealthCheckStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/health',
        });
    }
}
