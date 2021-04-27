// Types
import { defaultTheme } from 'config/defaultTheme';
import { DefaultTheme } from 'styled-components';
import { fillTheme } from '../../../../../utils/theme/fillTheme';

export const getGameTheme = (theme: {
  primary: string;
  secondary: string;
}): DefaultTheme => {
  const gameTheme: DefaultTheme = {
    ...defaultTheme,
    palette: fillTheme(theme),
  };

  return gameTheme;
};
