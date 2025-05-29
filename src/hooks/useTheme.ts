import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useThemes = () => {
  const theme = useContext(ThemeContext);

  return theme;
};
