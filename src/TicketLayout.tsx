import { Outlet } from 'react-router-dom';
import LanguageToggle from './components/LanguageToggle';
import ThemeToggle from './components/ThemeToggle';

export default function TicketLayout() {
  return (
    <div className="min-h-screen w-full p-6 flex items-center justify-center">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
}