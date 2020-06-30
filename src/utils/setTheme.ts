import tinyColor from 'tinycolor2';
import { colorPallete } from 'authorization';

const fillPallete = (key: string, value: string) => {
  const color = tinyColor(value);
  const pallete = {} as colorPallete;

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

export const defaultTheme = {
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
};

export let appTheme = defaultTheme as colorPallete;

export const getTextColor = (color: string) => {
  const colorObj = tinyColor(color);

  if (colorObj.isLight()) return '#1F1F1F';
  return '#FFF';
};

export default function setTheme(theme = defaultTheme) {
  const { primary, secondary } = theme;

  appTheme = {
    ...fillPallete('primary', primary),
    ...fillPallete('secondary', secondary),
  };
}
