import React from 'react';

// Libs
import { RefreshControl as RNRefresh } from 'react-native';

// Styles
import { withTheme } from 'styled-components';

// Types
import { RefreshControlProps } from './types';

const RefreshControl: React.FC<RefreshControlProps> = ({ theme, ...props }) => (
  <RNRefresh
    colors={[theme.secondary]}
    progressBackgroundColor={theme.primaryIntense}
    {...props}
  />
);

export default withTheme(RefreshControl);
