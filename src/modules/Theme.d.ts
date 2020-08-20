declare module 'theme' {
  import { DefaultTheme } from 'styled-components';

  export interface IColorPallete extends DefaultTheme {
    statusBar: 'light-content' | 'dark-content' | 'default';
    [key: string]: string;
  }

  export interface IThemedComponent {
    theme: IColorPallete;
  }

  export interface ChangeThemeProps {
    primary?: string;
    secondary?: string;
  }

  export interface ITheme {
    changeTheme: (theme: ChangeThemeProps) => void;
  }
}
