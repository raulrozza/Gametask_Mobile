import tinyColor from 'tinycolor2';

export default function getTextColor(color?: string): string | undefined {
  if (!color) return;

  const colorObj = tinyColor(color);

  if (colorObj.isLight()) return '#1F1F1F';
  return '#FFF';
}
