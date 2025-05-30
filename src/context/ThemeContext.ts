import type { ThemeType } from '@models/ThemeType';
import { createContext } from 'react';

export interface ThemeContextType {
  activeTheme: ThemeType | undefined;
  switchTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  activeTheme: undefined,
  switchTheme: () => {},
});
