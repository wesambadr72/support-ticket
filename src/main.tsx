import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider, theme as antTheme } from 'antd';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TicketList from './pages/TicketList';
import TicketCreate from './pages/TicketCreate';
import TicketEdit from './pages/TicketEdit';
import TicketView from './pages/TicketView';
import TicketLayout from './TicketLayout';
import { useTranslation } from 'react-i18next';
import './i18n';

function AppProviders() {
  const { i18n } = useTranslation();
  const { mode } = useTheme();
  return (
    <ConfigProvider
      button={{ className: 'custom-button-class' }}
      direction={i18n.dir(i18n.language)}
      theme={{
        algorithm: mode === 'dark' ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
      }}
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<TicketLayout />}>
         <Route path="/tickets" element={<TicketList />} />
          <Route path="/tickets/new" element={<TicketCreate />} />
          <Route path="/tickets/:id/edit" element={<TicketEdit />} />
          <Route path="/tickets/:id" element={<TicketView />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

function AppWithProviders() {
  return (
    <StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <AppProviders />
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<AppWithProviders />);
