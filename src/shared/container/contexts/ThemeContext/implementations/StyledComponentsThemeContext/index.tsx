import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import lodash from 'lodash';

import defaultTheme from 'config/theme';
import { getNewPalette, setMobileThemeColor } from './helpers';
import IThemeContext, {
  ISwitchThemeArgs,
} from 'shared/container/contexts/ThemeContext/models/IThemeContext';
import { ThemeContextProvider } from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';
import { makeStorageProvider } from 'shared/container/providers';

const THEME_STORAGE = '@GameTask/GameTheme';

const StyledComponentsThemeContext: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);

  const storage = useMemo(() => makeStorageProvider(), []);

  const enableTheme = useCallback((newTheme: ISwitchThemeArgs) => {
    const newPalette = getNewPalette(newTheme);

    setTheme(previousTheme => ({
      typography: previousTheme.typography,
      layout: previousTheme.layout,
      palette: newPalette,
    }));

    setMobileThemeColor(newPalette.secondary.main);
  }, []);

  const switchTheme = useCallback<IThemeContext['switchTheme']>(
    async newTheme => {
      if (!newTheme) {
        await storage.delete(THEME_STORAGE);
        return setTheme(defaultTheme);
      }

      if (lodash.isEqual(theme, newTheme)) return;

      await storage.store(THEME_STORAGE, newTheme);

      enableTheme(newTheme);
    },
    [enableTheme, storage, theme],
  );

  useEffect(() => {
    storage.get<ISwitchThemeArgs>(THEME_STORAGE).then(theme => {
      if (theme) enableTheme(theme);
    });
  }, [enableTheme, storage]);

  return (
    <ThemeContextProvider.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContextProvider.Provider>
  );
};

export default StyledComponentsThemeContext;
