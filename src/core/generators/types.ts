import {
  ForkJoinTaskDef,
  SwitchTaskDef,
  DoWhileTaskDef,
  CustomTaskDef,
  EventTaskDef,
  ForkJoinDynamicDef,
  HttpTaskDef,
  InlineTaskDef,
  JsonJQTransformTaskDef,
  KafkaPublishTaskDef,
  SetVariableTaskDef,
  SubWorkflowTaskDef,
  TerminateTaskDef,
  JoinTaskDef,
  WaitTaskDef,
  TaskDefTypes,
  InlineTaskInputParameters,
} from "../../common/types";

import { WorkflowDef} from "../../common";

export type TaskDefTypesGen =
  | CustomTaskDef
  | DoWhileTaskDefGen
  | EventTaskDef
  | ForkJoinTaskDefGen
  | ForkJoinDynamicDef
  | HttpTaskDef
  | InlineTaskDefGen
  | JsonJQTransformTaskDef
  | KafkaPublishTaskDef
  | SetVariableTaskDef
  | SubWorkflowTaskDef
  | SwitchTaskDefGen
  | TerminateTaskDef
  | JoinTaskDef
  | WaitTaskDef

export interface WorkflowDefGen extends Omit<WorkflowDef, "tasks"> {
  tasks: Partial<TaskDefTypesGen>[];
}

export type ForkJoinTaskDefGen = Omit<ForkJoinTaskDef, "forkTasks"> & {
  forkTasks: Array<Array<TaskDefTypesGen>>;
};

export type SwitchTaskDefGen = Omit<SwitchTaskDef, "decisionCases" | "defaultCase"> & {
  decisionCases: Record<string, TaskDefTypesGen[]>;
  defaultCase: TaskDefTypesGen[];
};

export type DoWhileTaskDefGen = Omit<DoWhileTaskDef, "loopOver"> & {
  loopOver?: TaskDefTypesGen[];
};

export interface InlineTaskInputParametersGen
  extends Omit<InlineTaskInputParameters, "expression"> {
  expression: string | Function;
}

export interface InlineTaskDefGen extends Omit<InlineTaskDef, "inputParameters"> {
  inputParameters: InlineTaskInputParametersGen;
}

export type NestedTaskMapper = {
  (tasks: Partial<TaskDefTypesGen>[]): TaskDefTypes[];
};
