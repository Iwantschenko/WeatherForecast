import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import type { ReactNode } from 'react';
import type { ThemeType } from '@models/ThemeType';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [activeTheme, setActiveTheme] = useState<ThemeType | undefined>();

  const switchTheme = () => {
    if (activeTheme === 'dark') {
      setActiveTheme('light');

      return;
    }

    setActiveTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ activeTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
