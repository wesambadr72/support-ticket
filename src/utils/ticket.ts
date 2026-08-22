import type { Priority, Status } from '../types/ticket';

/** Maps a ticket status to its i18n translation key. */
export const statusLabelKey: Record<Status, string> = {
  Open: 'open',
  'In Progress': 'inProgress',
  Closed: 'closed',
};

/** Maps a ticket priority to its i18n translation key. */
export const priorityLabelKey: Record<Priority, string> = {
  High: 'high',
  Medium: 'medium',
  Low: 'low',
};

/** Maps a ticket priority to a semantic color used by tags. */
export const priorityColor: Record<Priority, string> = {
  High: 'red',
  Medium: 'orange',
  Low: 'green',
};