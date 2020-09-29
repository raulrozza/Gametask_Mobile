import { useContext } from 'react';

// Context
import { ThemeContext } from '../../contexts/rawContexts';

// Types
import { ITheme } from '../../interfaces/hooks/UseTheme';

export const useTheme: () => ITheme = () => {
  const theme = useContext(ThemeContext);

  return theme;
};
