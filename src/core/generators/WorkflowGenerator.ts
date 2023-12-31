import { WorkflowDef } from "../../common/types";

export const workflowGenerator = (
  overrides: Partial<WorkflowDef>
): WorkflowDef => ({
  name: "NewWorkflow_3nxbi",
  description:
    "Edit or extend this sample workflow. Set the workflow name to get started",
  version: 1,
  tasks: [],
  inputParameters: [],
  outputParameters: {},
  schemaVersion: 2,
  restartable: true,
  workflowStatusListenerEnabled: false,
  ownerEmail: "hello@swiftsoftwaregroup.com",
  timeoutPolicy: "ALERT_ONLY",
  timeoutSeconds: 0,
  ...overrides,
});
