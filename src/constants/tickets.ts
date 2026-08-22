import type { Priority, Status } from '../types/ticket';

export const TICKET_STATUSES: Status[] = ['Open', 'In Progress', 'Closed'];
export const TICKET_PRIORITIES: Priority[] = ['High', 'Medium', 'Low'];

/** Includes the `All` value used by the list status filter. */
export const STATUS_FILTER_VALUES: (Status | 'All')[] = ['All', 'Open', 'In Progress', 'Closed'];