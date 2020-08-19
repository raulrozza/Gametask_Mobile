import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    primaryTransparent: string;
    primaryIntense: string;
    primaryExtraIntense: string;
    primaryLowShade: string;
    primaryShade: string;
    primaryExtraShade: string;
    primaryContrast: string;
    secondary: string;
    secondaryTransparent: string;
    secondaryIntense: string;
    secondaryExtraIntense: string;
    secondaryLowShade: string;
    secondaryShade: string;
    secondaryExtraShade: string;
    secondaryContrast: string;
  }
}
