import LanguageToggle from '../LanguageToggle';
import ThemeToggle from '../ThemeToggle';

interface TicketToolbarProps {
  children: React.ReactNode;
}

export default function TicketToolbar({ children }: TicketToolbarProps) {
  return (
    <div className="min-h-screen w-full p-6 flex items-center justify-center">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>
      <div className="max-w-7xl mx-auto w-full">{children}</div>
    </div>
  );
}