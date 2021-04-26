import React from 'react';

// Libs
import { RefreshControl as RNRefresh, RefreshControlProps } from 'react-native';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

const RefreshControl: React.FC<RefreshControlProps> = ({ ...props }) => {
  const { theme } = useThemeContext();

  return (
    <RNRefresh
      colors={[theme.palette.primary.main]}
      progressBackgroundColor={theme.palette.primary.dark}
      {...props}
    />
  );
};

export default RefreshControl;
