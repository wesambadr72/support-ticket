import type { Ticket, CreateTicketInput } from '../types/ticket';
import axios from 'axios';
import type {AxiosInstance } from 'axios';

const API_URL = import.meta.env.VITE_NEST_API_URL;

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export const AllTickets = async (): Promise<Ticket[]> => {
  const response = await api.get<Ticket[]>('');
  if (!response.data) throw new Error('Failed to get tickets');
  return response.data;
}

export const GetTicketById = async (id: string): Promise<Ticket> => {
  const response = await api.get<Ticket>(`/${id}`);
  if (!response.data) throw new Error('Failed to get ticket');
  return response.data;
}

export const CreateTicket = async (values: CreateTicketInput): Promise<Ticket> => {
  const response = await api.post<Ticket>('', values);
  if (!response.data) throw new Error('Failed to create ticket');
  return response.data;
}

export const UpdateTicket = async (id: string, values: CreateTicketInput): Promise<Ticket> => {
  const response = await api.put<Ticket>(`/${id}`, values);
  if (!response.data) throw new Error('Failed to update ticket');
  return response.data;
}

export const DeleteTicket = async (id: string): Promise<void> => {
  await api.delete(`/${id}`);
}