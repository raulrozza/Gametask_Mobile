import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { ReactNativeStyledInterface } from 'styled-components/native';
import { IThemedComponent } from '../../interfaces/theme/ThemedComponent';

export interface StyledButtonProps {
  outline: boolean;
  enabled?: boolean;
}

export interface ButtonProps extends IThemedComponent {
  as?: typeof TouchableOpacity;
  outline?: boolean;
  style?: ReactNativeStyledInterface;
  disabled?: boolean;
  onPress?: () => void;
  children: ReactNode;
}
