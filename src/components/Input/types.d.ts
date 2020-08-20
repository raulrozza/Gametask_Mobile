// Types
import { TextInputProps } from 'react-native';
import { IThemedComponent } from 'theme';

export interface IInput extends TextInputProps, IThemedComponent {}

export interface IStyledInput {
  focused: boolean;
  multiline?: boolean;
}
