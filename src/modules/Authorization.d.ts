declare module 'authorization' {
  import { ReactElement, ReactChild, ReactNode } from 'react';

  export interface User {
    token: string;
    [key: string]: string;
  }

  export interface AuthorizationProps {
    children: ReactChild | ReactElement | ReactNode;
  }

  export interface colorPallete {
    primary: string;
    primaryIntense: string;
    primaryExtraIntense: string;
    primaryLowShade: string;
    primaryShade: string;
    primaryContrast: string;
    secondary: string;
    secondaryTransparent: string;
    secondaryIntense: string;
    secondaryExtraIntense: string;
    secondaryLowShade: string;
    secondaryShade: string;
    secondaryContrast: string;
    [key: string]: string;
  }

  export interface Auth {
    user: User;
    logged: boolean;
    loading: boolean;
    signIn: Function;
    signOut: Function;
    appTheme: colorPallete;
  }
}
