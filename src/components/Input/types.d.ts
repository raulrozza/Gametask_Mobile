// Types
import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {}

export interface StyledInputProps {
  focused: boolean;
  multiline?: boolean;
}
