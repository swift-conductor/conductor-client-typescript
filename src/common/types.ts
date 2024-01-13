export interface CommonTaskDef {
  name: string;
  taskReferenceName: string;
}

export enum TaskType {
  START = "START",
  CUSTOM = "CUSTOM",
  DYNAMIC = "DYNAMIC",
  FORK_JOIN = "FORK_JOIN",
  FORK_JOIN_DYNAMIC = "FORK_JOIN_DYNAMIC",
  DECISION = "DECISION",
  SWITCH = "SWITCH",
  JOIN = "JOIN",
  DO_WHILE = "DO_WHILE",
  SUB_WORKFLOW = "SUB_WORKFLOW",
  EVENT = "EVENT",
  WAIT = "WAIT",
  USER_DEFINED = "USER_DEFINED",
  HTTP = "HTTP",
  LAMBDA = "LAMBDA",
  INLINE = "INLINE",
  EXCLUSIVE_JOIN = "EXCLUSIVE_JOIN",
  TERMINAL = "TERMINAL",
  TERMINATE = "TERMINATE",
  KAFKA_PUBLISH = "KAFKA_PUBLISH",
  JSON_JQ_TRANSFORM = "JSON_JQ_TRANSFORM",
  SET_VARIABLE = "SET_VARIABLE",
}

export type TaskDefTypes =
  | CustomTaskDef
  | DoWhileTaskDef
  | EventTaskDef
  | ForkJoinTaskDef
  | ForkJoinDynamicDef
  | HttpTaskDef
  | InlineTaskDef
  | JsonJQTransformTaskDef
  | KafkaPublishTaskDef
  | SetVariableTaskDef
  | SubWorkflowTaskDef
  | SwitchTaskDef
  | TerminateTaskDef
  | JoinTaskDef
  | WaitTaskDef;

export interface DoWhileTaskDef extends CommonTaskDef {
  inputParameters: { [key: string]: any; };
  type: TaskType.DO_WHILE;
  startDelay?: number;
  optional?: boolean;
  asyncComplete?: boolean;
  loopCondition: string;
  loopOver: TaskDefTypes[];
}

export interface EventTaskDef extends CommonTaskDef {
  type: TaskType.EVENT;
  sink: string;
  asyncComplete?: boolean;
}

export interface ForkJoinTaskDef extends CommonTaskDef {
  type: TaskType.FORK_JOIN;
  inputParameters?: Record<string, string>;
  forkTasks: Array<Array<TaskDefTypes>>;
}

export interface JoinTaskDef extends CommonTaskDef {
  type: TaskType.JOIN;
  inputParameters?: Record<string, string>;
  joinOn: string[];
  optional?: boolean;
  asyncComplete?: boolean;
}

export interface ForkJoinDynamicDef extends CommonTaskDef {
  inputParameters: {
    dynamicTasks: any;
    dynamicTasksInput: any;
  };
  type: TaskType.FORK_JOIN_DYNAMIC;
  dynamicForkTasksParam: string; // not string "dynamicTasks",
  dynamicForkTasksInputParamName: string; // not string "dynamicTasksInput",
  startDelay?: number;
  optional?: boolean;
  asyncComplete?: boolean;
}
export interface HttpInputParameters {
  uri: string;
  method: "GET" | "PUT" | "POST" | "DELETE" | "OPTIONS" | "HEAD";
  accept?: string;
  contentType?: string;
  headers?: Record<string, string>;
  body?: unknown;
  connectionTimeOut?: number;
  readTimeOut?: string;
}

export interface HttpTaskDef extends CommonTaskDef {
  inputParameters: {
    [x: string]: unknown;
    http_request: HttpInputParameters;
  };
  type: TaskType.HTTP;
}

export interface InlineTaskInputParameters {
  evaluatorType: "javascript" | "value-param";
  expression: string;
  [x: string]: unknown;
}

export interface InlineTaskDef extends CommonTaskDef {
  type: TaskType.INLINE;
  inputParameters: InlineTaskInputParameters;
}

interface ContainingQueryExpression {
  queryExpression: string;
  [x: string | number | symbol]: unknown;
}

export interface JsonJQTransformTaskDef extends CommonTaskDef {
  type: TaskType.JSON_JQ_TRANSFORM;
  inputParameters: ContainingQueryExpression;
}

export interface KafkaPublishInputParameters {
  topic: string;
  value: string;
  bootStrapServers: string;
  headers: Record<string, string>;
  key: string;
  keySerializer: string;
}

export interface KafkaPublishTaskDef extends CommonTaskDef {
  inputParameters: {
    kafka_request: KafkaPublishInputParameters;
  };
  type: TaskType.KAFKA_PUBLISH;
}

export interface SetVariableTaskDef extends CommonTaskDef {
  type: TaskType.SET_VARIABLE;
  inputParameters: { [key: string]: any; };
}

export interface CustomTaskDef extends CommonTaskDef {
  type: TaskType.CUSTOM;
  inputParameters?: { [key: string]: any; };
}

export interface SubWorkflowTaskDef extends CommonTaskDef {
  type: TaskType.SUB_WORKFLOW;
  inputParameters?: { [key: string]: any; };
  subWorkflowParam: {
    name: string;
    version?: number;
    taskToDomain?: Record<string, string>;
  };
}

export interface SwitchTaskDef extends CommonTaskDef {
  inputParameters: { [key: string]: any; };
  type: TaskType.SWITCH;
  decisionCases: Record<string, TaskDefTypes[]>;
  defaultCase: TaskDefTypes[];
  evaluatorType: "value-param" | "javascript";
  expression: string;
}

export interface TerminateTaskDef extends CommonTaskDef {
  inputParameters: {
    terminationStatus: "COMPLETED" | "FAILED";
    workflowOutput?: Record<string, string>;
    terminationReason?: string;
  };
  type: TaskType.TERMINATE;
  startDelay?: number;
  optional?: boolean;
}

export interface WaitTaskDef extends CommonTaskDef {
  type: TaskType.WAIT;
  inputParameters: {
    duration?: string;
    until?: string;
  };
}
