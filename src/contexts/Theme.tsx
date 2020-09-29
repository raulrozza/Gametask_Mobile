import React, { useCallback, useState } from 'react';

// Config
import { defaultTheme } from '../config/defaultTheme';

// Contexts
import { ThemeContext } from './rawContexts';

// Libs
import { DefaultTheme, ThemeProvider } from 'styled-components';

// Types
import { ChangeThemeProps } from '../interfaces/hooks/UseTheme';

// Utils
import { getStatusBarColor } from '../utils/theme/getStatusBarColor';
import { fillTheme } from '../utils/theme/fillTheme';

const Theme: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);

  const changeTheme = useCallback(
    ({ primary, secondary }: ChangeThemeProps) => {
      let newTheme = defaultTheme;

      if (primary && secondary) {
        newTheme = {
          ...fillTheme('primary', primary),
          ...fillTheme('secondary', secondary),
          statusBar: getStatusBarColor(primary),
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
