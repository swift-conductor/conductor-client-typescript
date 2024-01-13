import { InlineTaskDef, TaskType, InlineTaskInputParameters } from "../../common/types";
import { InlineTaskDefGen, InlineTaskInputParametersGen } from "./types";
import { nameTaskNameGenerator } from "./common";

const defaultInputParams: InlineTaskInputParameters = {
  value: "${workflow.input.value}" as any,
  evaluatorType: "javascript" as any,
  expression: "true" as any,
};

export const generateEvaluationCode = (inputParametersPartial: Partial<InlineTaskInputParametersGen> = {}): InlineTaskInputParameters => {
  const inlinePartialDefJavascript = inputParametersPartial;
  const inlineExpression = inlinePartialDefJavascript?.expression;
  if (inlineExpression !== undefined && typeof inlineExpression === "function") {
    const resultingFunction = inlineExpression();
    const resultingFunctionAsString = resultingFunction.toString();

    const toReturn: InlineTaskInputParameters = {
      evaluatorType: "javascript" as any,
      ...(inputParametersPartial || { value: "true" }),
      expression: `(${resultingFunctionAsString})();` as any,
    };

    return toReturn;
  }

  return { ...defaultInputParams, evaluatorType: "javascript" as any, ...inputParametersPartial } as InlineTaskInputParameters;
};

/**
 * Takes an optional partial InlineTaskDefGen
 * generates a task replacing default/fake values with provided overrides
 *
 * <b>note</b> that the inputParameters.expression can be either a string containing javascript
 * or a function thar returns an ES5 function
 *
 * @param overrides overrides for defaults
 * @returns a fully defined task
 */
export const generateInlineTask = (
  override: Partial<InlineTaskDefGen> = {}
): InlineTaskDef => ({
  ...nameTaskNameGenerator("inline", override),
  ...override,
  inputParameters: generateEvaluationCode(override?.inputParameters || {}),
  type: TaskType.INLINE,
});
