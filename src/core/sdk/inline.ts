import { TaskType, InlineTaskDef } from "../../common/types";

export const inlineTask = (
  taskReferenceName: string,
  script: string,
  evaluatorType: "javascript" | "value-param" = "javascript"
): InlineTaskDef => ({
  name: taskReferenceName,
  taskReferenceName,
  inputParameters: {
    evaluatorType,
    expression: script,
  } as any,
  type: TaskType.INLINE,
});
