import type { Priority, Status } from '../types/ticket';

export const TICKET_STATUSES: Status[] = ['to do', 'in progress', 'complete', 'done'];
export const TICKET_PRIORITIES: Priority[] = ['High', 'Medium', 'Low'];

export const STATUS_FILTER_VALUES: (Status | 'All')[] = ['All', 'to do', 'in progress', 'complete', 'done'];
