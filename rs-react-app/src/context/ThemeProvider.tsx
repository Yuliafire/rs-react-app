import { useState, useEffect, type ReactNode } from 'react';
import { ThemeContext, type Theme } from './themeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
      data-testid="theme-provider"
    >
      {children}
    </ThemeContext.Provider>
  );
};

export type { Theme };
