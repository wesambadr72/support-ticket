import type { Priority, Status } from '../types/ticket';

export const TICKET_STATUSES: Status[] = ['open', 'in-progress', 'resolved', 'closed'];
export const TICKET_PRIORITIES: Priority[] = ['High', 'Medium', 'Low'];

export const STATUS_FILTER_VALUES: (Status | 'All')[] = ['All', 'open', 'in-progress', 'closed'];
