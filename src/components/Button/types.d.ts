import { RectButton } from 'react-native-gesture-handler';
import { ReactNode } from 'react';
import {
  DefaultTheme,
  ReactNativeStyledInterface,
} from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export interface StyledButtonProps {
  outline: boolean;
  enabled?: boolean;
}

export interface ButtonProps extends RectButton {
  as?: typeof TouchableOpacity;
  outline?: boolean;
  style?: ReactNativeStyledInterface;
  disabled?: boolean;
  children: ReactNode;
  theme: DefaultTheme;
}
