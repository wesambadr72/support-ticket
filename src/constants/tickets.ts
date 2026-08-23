import type { Priority, Status } from '../types/ticket';

export const TICKET_STATUSES: Status[] = ['Open', 'In Progress', 'Closed'];
export const TICKET_PRIORITIES: Priority[] = ['High', 'Medium', 'Low'];

export const STATUS_FILTER_VALUES: (Status | 'All')[] = ['All', 'Open', 'In Progress', 'Closed'];