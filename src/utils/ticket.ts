import type { Priority, Status } from '../types/ticket';

export const statusLabelKey: Record<Status, string> = {
  Open: 'open',
  'In Progress': 'inProgress',
  Closed: 'closed',
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