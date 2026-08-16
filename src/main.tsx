import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TicketList from './pages/TicketList';
import TicketCreate from './pages/TicketCreate';
import TicketEdit from './pages/TicketEdit';
import TicketView from './pages/TicketView';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        button={{ className: 'custom-button-class' }}
        theme={{
          token: {
            colorPrimary: '#ff6200fc',
          },
        }}
      >
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/tickets/new" element={<TicketCreate />} />
          <Route path="/tickets/:id/edit" element={<TicketEdit />} />
          <Route path="/tickets/:id" element={<TicketView />} />
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
)
