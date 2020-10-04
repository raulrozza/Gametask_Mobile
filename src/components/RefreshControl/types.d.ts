import { RefreshControlProps as RNRefreshControlProps } from 'react-native';
import { IThemedComponent } from '../../interfaces/theme/ThemedComponent';

export interface RefreshControlProps
  extends RNRefreshControlProps,
    IThemedComponent {}
