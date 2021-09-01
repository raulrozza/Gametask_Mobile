import { createContext, useContext } from 'react';

import { isEmpty } from 'lodash';

import IThemeContext from 'shared/domain/providers/IThemeContext';

export const ThemeContextProvider = createContext<IThemeContext>(
  {} as IThemeContext,
);

const useThemeContext = (): IThemeContext => {
  const themeProvider = useContext(ThemeContextProvider);

  if (isEmpty(themeProvider))
    throw new Error(
      'useThemeContext should be called inside a ThemeContextProvider',
    );

  return themeProvider;
};

export default useThemeContext;
