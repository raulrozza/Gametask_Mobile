import { TextStyle } from 'react-native';
import { DefaultTheme } from 'styled-components';

export const generalInputStyles = (theme: DefaultTheme): TextStyle => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrast,
});
