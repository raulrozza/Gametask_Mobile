interface PaletteOptions {
  light: string;
  main: string;
  dark: string;
  contrast: string;
}

type PaletteKeys = 'primary' | 'secondary' | 'error';

const gray = {
  0: '#FFFFFF',
  100: '#E6E6E6',
  200: '#CCCCCC',
  300: '#B3B3B3',
  400: '#999999',
  500: '#808080',
  600: '#666666',
  700: '#4C4C4C',
  800: '#333333',
  900: '#1A1A1A',
  1000: '#000000',
};

type ScalePallete = typeof gray;
type ScalePalleteKeys = 'gray';

type StatusBarColors = 'light-content' | 'dark-content' | 'default';
type StatusBarPallete = {
  statusBar: StatusBarColors;
};

const palette: Record<PaletteKeys, PaletteOptions> &
  Record<ScalePalleteKeys, ScalePallete> &
  StatusBarPallete = {
  primary: {
    light: '#FFFFFF',
    main: '#FFFFFF',
    dark: '#E6E6E6',
    contrast: '#1F1F1F',
  },
  secondary: {
    light: '#ab39a5',
    main: '#852c80',
    dark: '#5f1f5b',
    contrast: '#F5F5F5',
  },
  error: {
    light: '#DF2935',
    main: '#BF252D',
    dark: '#8E1E20',
    contrast: '#F5F5F5',
  },
  gray,
  statusBar: 'dark-content',
};

export default palette;
