import { createContext, useContext } from 'react';

export type ThemeMode = 'dark' | 'light';

interface ThemeContextValue {
  mode: ThemeMode;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({ mode: 'dark', toggle: () => {} });

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}