// Types
import { DefaultTheme } from 'styled-components';
import { fillTheme } from '../../utils/theme/fillTheme';

// Utils
import { getStatusBarColor } from '../../utils/theme/getStatusBarColor';

export const getGameTheme = (theme: {
  primary: string;
  secondary: string;
}): DefaultTheme => {
  const gameTheme: DefaultTheme = {
    ...fillTheme('primary', theme.primary),
    ...fillTheme('secondary', theme.secondary),
    statusBar: getStatusBarColor(theme.primary),
  };

  return gameTheme;
};
