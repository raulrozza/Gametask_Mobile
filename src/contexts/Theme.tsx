import React, { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import tinyColor from 'tinycolor2';
import { IColorPallete, ChangeThemeProps, ITheme } from 'theme';

const ThemeContext = createContext({});

export const defaultTheme: IColorPallete = {
  primary: '#FFFFFF',
  primaryTransparent: '#FFFFFF88',
  primaryIntense: '#FFFFFF',
  primaryExtraIntense: '#FFFFFF',
  primaryLowShade: '#e6e6e6',
  primaryShade: '#cccccc',
  primaryExtraShade: '#999999',
  primaryContrast: '#1F1F1F',
  secondary: '#852c80',
  secondaryTransparent: '#852c8088',
  secondaryIntense: '#5f1f5b',
  secondaryExtraIntense: '#381336',
  secondaryLowShade: '#ab39a5',
  secondaryShade: '#c651bf',
  secondaryExtraShade: '#df9edb',
  secondaryContrast: '#FFFFFF',
  statusBar: 'light-content',
};

export const fillPallete: (key: string, value: string) => IColorPallete = (
  key: string,
  value: string,
) => {
  const color = tinyColor(value);
  const pallete = {} as IColorPallete;

  pallete[`${key}`] = color.toHexString();
  pallete[`${key}Contrast`] = color.isLight() ? '#1F1F1F' : '#FFF';
  pallete[`${key}LowShade`] = color.isLight()
    ? tinyColor(value).darken(10).toHexString()
    : tinyColor(value).lighten(10).toHexString();
  pallete[`${key}Shade`] = color.isLight()
    ? tinyColor(value).darken(20).toHexString()
    : tinyColor(value).lighten(20).toHexString();
  pallete[`${key}ExtraShade`] = color.isLight()
    ? tinyColor(value).darken(40).toHexString()
    : tinyColor(value).lighten(40).toHexString();
  pallete[`${key}Intense`] = color.isDark()
    ? tinyColor(value).darken(10).toHexString()
    : tinyColor(value).lighten(10).toHexString();
  pallete[`${key}ExtraIntense`] = color.isDark()
    ? tinyColor(value).darken(20).toHexString()
    : tinyColor(value).lighten(20).toHexString();
  pallete[`${key}Transparent`] = tinyColor(value).setAlpha(0.53).toHex8String();

  return pallete;
};

export const getTextColor: (color: string) => string = (color: string) => {
  const colorObj = tinyColor(color);

  if (colorObj.isLight()) return '#1F1F1F';
  return '#FFF';
};

export const getStatusBarColor: (
  color: string,
) => 'dark-content' | 'light-content' = (color: string) => {
  const colorObj = tinyColor(color);

  if (colorObj.isLight()) return 'dark-content';
  return 'light-content';
};

const Theme: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<IColorPallete>(defaultTheme);

  const changeTheme = useCallback(
    ({ primary, secondary }: ChangeThemeProps) => {
      let newTheme = defaultTheme;

      if (primary && secondary) {
        newTheme = {
          ...fillPallete('primary', primary),
          ...fillPallete('secondary', secondary),
          statusBar: getStatusBarColor(primary),
        };
      }

      setTheme(newTheme);
    },
    [],
  );

  return (
    <ThemeContext.Provider value={{ changeTheme, fillPallete }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

Theme.propTypes = {
  children: PropTypes.node,
};

export const useTheme: () => ITheme = () => {
  const theme = useContext(ThemeContext) as ITheme;

  return theme;
};

export default Theme;
