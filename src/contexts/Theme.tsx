import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import tinyColor from 'tinycolor2';
import { ColorPallete, ThemeHook } from 'theme';

const defaultTheme: ColorPallete = {
  primary: '#FFFFFF',
  primaryIntense: '#FFFFFF',
  primaryExtraIntense: '#FFFFFF',
  primaryLowShade: '#e6e6e6',
  primaryShade: '#cccccc',
  primaryContrast: '#1F1F1F',
  secondary: '#852c80',
  secondaryTransparent: '#852c8088',
  secondaryIntense: '#5f1f5b',
  secondaryExtraIntense: '#381336',
  secondaryLowShade: '#ab39a5',
  secondaryShade: '#c651bf',
  secondaryContrast: '#FFF',
  statusBar: 'dark-content',
};

const ThemeContext = createContext({});

const Theme: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const fillPallete = (key: string, value: string) => {
    const color = tinyColor(value);
    const pallete = {} as ColorPallete;

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
    pallete[`${key}Transparent`] = tinyColor(value)
      .setAlpha(0.53)
      .toHex8String();

    return pallete;
  };

  const getTextColor = (color: string) => {
    const colorObj = tinyColor(color);

    if (colorObj.isLight()) return '#1F1F1F';
    return '#FFF';
  };

  const getStatusBarColor = (color: string) => {
    const colorObj = tinyColor(color);

    if (colorObj.isLight()) return 'dark-content';
    return 'light-content';
  };

  const changeTheme = (theme = defaultTheme) => {
    const { primary, secondary } = theme;

    setTheme({
      ...fillPallete('primary', primary),
      ...fillPallete('secondary', secondary),
      statusBar: getStatusBarColor(primary),
    });
  };

  return (
    <ThemeContext.Provider
      value={{ theme, defaultTheme, changeTheme, fillPallete, getTextColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext) as ThemeHook;

  return theme;
};

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
