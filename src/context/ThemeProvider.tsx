import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeContext } from './theme';
import type { ThemeMode } from './theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  const toggle = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}