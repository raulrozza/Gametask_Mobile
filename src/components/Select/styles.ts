import { TextStyle } from 'react-native';
import { DefaultTheme } from 'styled-components';

export const generalInputStyles = (theme: DefaultTheme): TextStyle => ({
  backgroundColor: theme.primary,
  color: theme.primaryContrast,
});
