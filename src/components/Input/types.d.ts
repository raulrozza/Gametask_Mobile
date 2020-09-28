// Types
import { TextInputProps } from 'react-native';
import { IThemedComponent } from 'theme';

export interface InputProps extends TextInputProps, IThemedComponent {}

export interface StyledInputProps {
  focused: boolean;
  multiline?: boolean;
}
