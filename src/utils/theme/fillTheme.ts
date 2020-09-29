import tinyColor from 'tinycolor2';

// Types
import { DefaultTheme } from 'styled-components';

export const fillTheme = (key: string, value: string): DefaultTheme => {
  const color = tinyColor(value);
  const pallete = {} as DefaultTheme;

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
