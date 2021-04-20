import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { ReactNativeStyledInterface } from 'styled-components/native';

export interface StyledButtonProps {
  outline: boolean;
  enabled?: boolean;
}

export interface ButtonProps {
  as?: typeof TouchableOpacity;
  outline?: boolean;
  style?: ReactNativeStyledInterface;
  disabled?: boolean;
  activeOpacity?: number;
  onPress?: () => void;
  children: ReactNode;
}
