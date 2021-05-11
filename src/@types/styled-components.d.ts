import 'styled-components';
import theme from 'config/theme';

declare module 'styled-components' {
  type MyDefaultTheme = typeof theme;

  export interface DefaultTheme extends MyDefaultTheme {}
}
