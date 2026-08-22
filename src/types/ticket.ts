export type Status = 'Open' | 'In Progress' | 'Closed';
export type Priority = 'High' | 'Medium' | 'Low';

export interface Ticket {
  id: string;
  title: string;
  status: Status;
  priority: Priority;
}

/** Data needed to create or update a ticket (without its id). */
export type TicketInput = Omit<Ticket, 'id'>;