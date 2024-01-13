import { TaskType, CustomTaskDef } from "../../common/types";

export const customTask = (
  taskReferenceName: string,
  name: string,
  inputParameters:Record<string,any>
): CustomTaskDef => ({
  name,
  taskReferenceName,
  inputParameters,
  type: TaskType.CUSTOM,
});
