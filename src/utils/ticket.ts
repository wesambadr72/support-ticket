import type { Priority, Status } from '../types/ticket';

export const statusLabelKey: Record<Status, string> = {
  open: 'open',
  'in-progress': 'in-progress',
  resolved: 'resolved',
  closed: 'closed',
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