import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../LanguageToggle';
import ThemeToggle from '../ThemeToggle';

interface PageLayoutProps {
  children: ReactNode;
}


export default function PageLayout({ children }: PageLayoutProps) {
  const { t } = useTranslation('tickets');

  return (
    <div className="min-h-screen w-full flex flex-col">
      <header className="sticky top-0 z-10 bg-surface">
        <div className="max-w-7xl mx-auto w-full px-6 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">{t('supportTicket')}</h1>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 min-h-screen w-full max-w-7xl mx-auto p-6">{children}</main>

      <footer className="bg-surface">
        <div className="max-w-7xl mx-auto w-full px-6 py-3 text-center text-sm text-text-muted">
          © {new Date().getFullYear()} {t('supportTicket')}
        </div>
      </footer>
    </div>
  );
}
