import { createContext, useContext } from 'react';
import IThemeContext from 'shared/container/contexts/ThemeContext/models/IThemeContext';

export const ThemeContextProvider = createContext<IThemeContext>(
  {} as IThemeContext,
);

const useThemeContext = (): IThemeContext => {
  const themeProvider = useContext(ThemeContextProvider);

  if (!themeProvider)
    throw new Error(
      'useThemeContext should be called inside a ThemeContextProvider',
    );

  return themeProvider;
};

export default useThemeContext;
