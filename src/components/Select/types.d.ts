import { PickerSelectProps } from 'react-native-picker-select';
import { CSSObject } from 'styled-components';

export interface SelectProps extends PickerSelectProps {
  style?: [CSSObject];
}
