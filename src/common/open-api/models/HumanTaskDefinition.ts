/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HumanTaskAssignment } from './HumanTaskAssignment';
import type { HumanTaskTrigger } from './HumanTaskTrigger';
import type { UserFormTemplateId } from './UserFormTemplateId';

export type HumanTaskDefinition = {
  assignmentCompletionStrategy?: 'LEAVE_OPEN' | 'TERMINATE';
  assignments?: Array<HumanTaskAssignment>;
  taskTriggers?: Array<HumanTaskTrigger>;
  userFormTemplate?: UserFormTemplateId;
};

