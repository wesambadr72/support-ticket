import { Outlet } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import LanguageToggle from './components/LanguageToggle';

export default function TicketLayout() {
  return (
    <LanguageProvider>
      <div className="p-6">
        <div className="flex justify-end mb-4">
          <LanguageToggle />
        </div>
        <Outlet />
      </div>
    </LanguageProvider>
  );
}