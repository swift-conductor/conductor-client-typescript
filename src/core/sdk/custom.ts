import { TaskType, CustomTaskDef } from "../../common/types";

export const customTask = (
  name: string,
  taskReferenceName: string,
  inputParameters:Record<string,any>
): CustomTaskDef => ({
  name,
  taskReferenceName,
  inputParameters,
  type: TaskType.CUSTOM,
});
