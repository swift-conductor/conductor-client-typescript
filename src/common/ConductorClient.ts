import { AdminResourceApi, EventResourceApi, HealthCheckResourceApi, MetadataResourceApi, QueueAdminResourceApi, TaskResourceApi, WorkflowBulkResourceApi, WorkflowResourceApi } from "../../openapi/api";
import { Configuration, createConfiguration } from "../../openapi/api/configuration";

export class ConductorClient {
    public readonly configuration: Configuration;

    public readonly adminResource: AdminResourceApi;
    public readonly eventResource: EventResourceApi;
    public readonly healthCheckResource: HealthCheckResourceApi;
    public readonly metadataResource: MetadataResourceApi;
    public readonly queueAdminResource: QueueAdminResourceApi;
    public readonly taskResource: TaskResourceApi;
    public readonly workflowBulkResource: WorkflowBulkResourceApi;
    public readonly workflowResource: WorkflowResourceApi;
    
    constructor(configuration?: Configuration) {
        this.configuration = configuration ?? createConfiguration();
        
        this.adminResource = new AdminResourceApi(this.configuration);
        this.eventResource = new EventResourceApi(this.configuration);
        this.healthCheckResource = new HealthCheckResourceApi(this.configuration);
        this.metadataResource = new MetadataResourceApi(this.configuration);
        this.queueAdminResource = new QueueAdminResourceApi(this.configuration);
        this.taskResource = new TaskResourceApi(this.configuration);
        this.workflowBulkResource = new WorkflowBulkResourceApi(this.configuration);
        this.workflowResource = new WorkflowResourceApi(this.configuration);
    }
}

