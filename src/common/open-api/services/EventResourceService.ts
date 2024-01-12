/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventHandler } from '../models/EventHandler';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EventResourceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get all the event handlers
     * @returns EventHandler OK
     * @throws ApiError
     */
    public getEventHandlers(): CancelablePromise<Array<EventHandler>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/event',
        });
    }
    /**
     * Update an existing event handler.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public updateEventHandler(
        requestBody: EventHandler,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/event',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Add a new event handler.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public addEventHandler(
        requestBody: EventHandler,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/event',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get event handlers for a given event
     * @param event
     * @param activeOnly
     * @returns EventHandler OK
     * @throws ApiError
     */
    public getEventHandlersForEvent(
        event: string,
        activeOnly: boolean = true,
    ): CancelablePromise<Array<EventHandler>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/event/{event}',
            path: {
                'event': event,
            },
            query: {
                'activeOnly': activeOnly,
            },
        });
    }
    /**
     * Remove an event handler
     * @param name
     * @returns any OK
     * @throws ApiError
     */
    public removeEventHandlerStatus(
        name: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/event/{name}',
            path: {
                'name': name,
            },
        });
    }
}
