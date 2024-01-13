import { TaskType, SetVariableTaskDef } from "../../common/types";

export const setVariableTask = (
  taskReferenceName: string,
  inputParameters: Record<string, any>
): SetVariableTaskDef => ({
  name: taskReferenceName,
  taskReferenceName,
  type: TaskType.SET_VARIABLE,
  inputParameters,
});
