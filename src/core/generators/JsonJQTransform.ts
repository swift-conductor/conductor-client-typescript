import { JsonJQTransformTaskDef, TaskType } from "../../common/types";
import { nameTaskNameGenerator } from "./common";

/**
 * Takes an optional partial JsonJQTransformTaskDef
 * generates a task replacing default/fake values with provided overrides
 *
 * @param overrides overrides for defaults
 * @returns a fully defined task
 */
export const generateJQTransformTask = (
  overrides: Partial<JsonJQTransformTaskDef> = {}
): JsonJQTransformTaskDef => ({
  ...nameTaskNameGenerator("jqTransform", overrides),
  inputParameters: {
    key1: {
      value1: ["a", "b"],
    } as any,
    key2: {
      value2: ["c", "d"],
    } as any,
    queryExpression: "{ key3: (.key1.value1 + .key2.value2) }" as any,
  },
  ...overrides,
  type: TaskType.JSON_JQ_TRANSFORM,
});
