/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskMock = {
    status?: 'IN_PROGRESS' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED';
    output?: Record<string, Record<string, any>>;
    executionTime?: number;
    queueWaitTime?: number;
};

