import { RectButtonProperties } from 'react-native-gesture-handler';
import { ReactNode } from 'react';
import { ReactNativeStyledInterface } from 'styled-components/native';

export interface IStyledButton {
  outline: boolean;
  disabled?: boolean;
}

export interface IButton extends RectButtonProperties {
  outline?: boolean;
  style?: ReactNativeStyledInterface;
  disabled?: boolean;
  children: ReactNode;
}
