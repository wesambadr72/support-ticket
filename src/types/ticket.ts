export type Status = 'to do' | 'in progress' | 'complete' | 'done';
export type Priority = 'High' | 'Medium' | 'Low';

export interface Ticket {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: Status;
  priority: Priority;
  createdAt: string;
  updatedAt: string;
}

export type CreateTicketInput = Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>;
