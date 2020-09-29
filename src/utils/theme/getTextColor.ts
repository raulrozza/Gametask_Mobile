import tinyColor from 'tinycolor2';

export function getTextColor(color: string): string {
  const colorObj = tinyColor(color);

  if (colorObj.isLight()) return '#1F1F1F';
  return '#FFF';
}
