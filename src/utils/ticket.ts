import type { Priority, Status } from '../types/ticket';

export const statusLabelKey: Record<Status, string> = {
  "to do": 'to do',
  'in progress': 'in progress',
  complete: 'complete',
  done: 'done',
};

export const priorityLabelKey: Record<Priority, string> = {
  High: 'high',
  Medium: 'medium',
  Low: 'low',
};

export const priorityColor: Record<Priority, string> = {
  High: 'red',
  Medium: 'orange',
  Low: 'green',
};