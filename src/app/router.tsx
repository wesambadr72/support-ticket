import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TicketList from '../pages/TicketList';
import TicketCreate from '../pages/TicketCreate';
import TicketEdit from '../pages/TicketEdit';
import TicketView from '../pages/TicketView';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tickets" element={<TicketList />} />
      <Route path="/tickets/new" element={<TicketCreate />} />
      <Route path="/tickets/:id/edit" element={<TicketEdit />} />
      <Route path="/tickets/:id" element={<TicketView />} />
    </Routes>
  );
}