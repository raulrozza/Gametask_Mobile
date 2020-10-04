import { PickerSelectProps } from 'react-native-picker-select';
import { CSSObject } from 'styled-components';
import { IThemedComponent } from '../../interfaces/theme/ThemedComponent';

export interface SelectProps extends PickerSelectProps, IThemedComponent {
  style?: [CSSObject];
}
