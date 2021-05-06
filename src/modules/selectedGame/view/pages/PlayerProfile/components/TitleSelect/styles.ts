import { TextStyle } from 'react-native';
import { DefaultTheme } from 'styled-components';

export const inputStyles = (theme: DefaultTheme): TextStyle => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrast,
  marginHorizontal: 'auto',
  marginVertical: 0,
  width: '80%',
});
