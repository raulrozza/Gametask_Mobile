import tinyColor from 'tinycolor2';

export const getStatusBarColor = (
  color: string,
): 'dark-content' | 'light-content' => {
  const colorObj = tinyColor(color);

  if (colorObj.isLight()) return 'dark-content';
  return 'light-content';
};
