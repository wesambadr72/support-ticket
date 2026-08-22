import type { Status, Ticket, TicketInput } from '../types/ticket';
import { dataSource } from '../data/tickets';

export const ticketService = {
  getAll: (): Ticket[] => dataSource,

  getById: (id?: string): Ticket | undefined => dataSource.find((t) => t.id === id),

  create: (values: TicketInput): Ticket => {
    const ticket: Ticket = { id: String(dataSource.length + 1), ...values };
    dataSource.push(ticket);
    return ticket;
  },

  update: (id: string, values: TicketInput): Ticket | undefined => {
    const ticket = dataSource.find((t) => t.id === id);
    if (ticket) Object.assign(ticket, { ...values });
    return ticket;
  },

  updateStatus: (id: string, status: Status): void => {
    const ticket = dataSource.find((t) => t.id === id);
    if (ticket) ticket.status = status;
  },
};