declare module 'theme' {
  import { DefaultTheme } from 'styled-components';
  import PropTypes from 'prop-types';

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

  export const themeProps = PropTypes.shape({
    primary: PropTypes.string.isRequired,
    primaryTransparent: PropTypes.string.isRequired,
    primaryContrast: PropTypes.string.isRequired,
    primaryLowShade: PropTypes.string.isRequired,
    primaryShade: PropTypes.string.isRequired,
    primaryExtraShade: PropTypes.string.isRequired,
    primaryIntense: PropTypes.string.isRequired,
    primaryExtraIntense: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    secondaryTransparent: PropTypes.string.isRequired,
    secondaryContrast: PropTypes.string.isRequired,
    secondaryLowShade: PropTypes.string.isRequired,
    secondaryShade: PropTypes.string.isRequired,
    secondaryExtraShade: PropTypes.string.isRequired,
    secondaryIntense: PropTypes.string.isRequired,
    secondaryExtraIntense: PropTypes.string.isRequired,
    statusBar: PropTypes.oneOf([
      'light-content' as const,
      'dark-content' as const,
      'default' as const,
    ]).isRequired,
  }).isRequired;
}
