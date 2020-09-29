import 'styled-components';
import { defaultTheme } from '../config/defaultTheme';

declare module 'styled-components' {
  type MyDefaultTheme = typeof defaultTheme;

  export interface DefaultTheme extends MyDefaultTheme {
    statusBar: 'light-content' | 'dark-content' | 'default';
    [key: string]: string;
  }
}
