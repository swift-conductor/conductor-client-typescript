import { WorkerProcessOptions } from "./types";
type OptionEntries = Array<
    [keyof WorkerProcessOptions, string | number | undefined]
  >;


/**
 * Compares if the new options are really new
 * @param oldOptions
 * @param newOptions
 */
export const optionEquals = (
  oldOptions: Partial<WorkerProcessOptions>,
  newOptions: Partial<WorkerProcessOptions>
) => {
  const newOptionEntries = Object.entries(newOptions) as OptionEntries;
  const oldOptionsEntries = Object.entries(oldOptions) as OptionEntries;

  return newOptionEntries.length === oldOptionsEntries.length && newOptionEntries.every(
    ([key, value]) => (oldOptions[key] as unknown) === value
  );
};
