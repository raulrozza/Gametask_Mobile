import React, { useCallback, useState } from 'react';

// Config
import defaultTheme from 'config/theme';

// Contexts
import { ThemeContext } from './rawContexts';

// Libs
import { DefaultTheme, ThemeProvider } from 'styled-components';

// Types
import { ChangeThemeProps } from '../interfaces/hooks/UseTheme';

// Utils
import { fillTheme } from '../utils/theme/fillTheme';

const Theme: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);

  const changeTheme = useCallback(
    ({ primary, secondary }: ChangeThemeProps) => {
      let newTheme = defaultTheme;

      if (primary && secondary) {
        newTheme = {
          typography: defaultTheme.typography,
          layout: defaultTheme.layout,
          palette: fillTheme({
            primary,
            secondary,
          }),
        };
      }

      setTheme(newTheme);
    },
    [],
  );

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
