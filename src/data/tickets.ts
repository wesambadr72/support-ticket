export interface Ticket {
  id: string;
  title: string;
  status: string;
  priority: string;
}

export const dataSource: Ticket[] = [
  { id: '1', title: 'Bug in login page', status: 'Open', priority: 'High' },
  { id: '2', title: 'Add export button', status: 'In Progress', priority: 'Medium' },
  { id: '3', title: 'UI crash on mobile', status: 'Closed', priority: 'Low' },
];

export const getTicketById = (id: string | undefined): Ticket | undefined =>
  dataSource.find((t) => t.id === id);