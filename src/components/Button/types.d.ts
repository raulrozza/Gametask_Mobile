import { RectButtonProperties } from 'react-native-gesture-handler';
import { ReactNode } from 'react';
import { ReactNativeStyledInterface } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { IColorPallete } from 'theme';

export interface StyledButtonProps {
  outline: boolean;
  enabled?: boolean;
}

export interface ButtonProps extends RectButtonProperties {
  as?: typeof TouchableOpacity;
  outline?: boolean;
  style?: ReactNativeStyledInterface;
  disabled?: boolean;
  children: ReactNode;
  theme: IColorPallete;
}
