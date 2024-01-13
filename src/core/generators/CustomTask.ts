import { CustomTaskDef, TaskType } from "../../common/types";
import { nameTaskNameGenerator } from "./common";

/**
 * Takes an optional partial CustomTaskDef
 * generates a task replacing default values with provided overrides
 *
 * @param overrides overrides for defaults
 * @returns a fully defined task
 */
export const generateCustomTask = (overrides: Partial<CustomTaskDef> = {}): CustomTaskDef => ({
    ...nameTaskNameGenerator("custom", overrides),
    inputParameters: {},
    ...overrides,
    type: TaskType.CUSTOM,
});
