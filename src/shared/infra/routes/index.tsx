import React from 'react';
import { StatusBar } from 'react-native';

import { AppLoading } from 'expo';

// Hooks
import LoggedRoutes from 'shared/infra/routes/logged';
import PublicRoutes from 'shared/infra/routes/public';
import { useSessionContext, useThemeContext } from 'shared/view/contexts';

// Routes

const Routes: React.FC = () => {
  const { userToken, loading } = useSessionContext();
  const { theme } = useThemeContext();

  if (loading) return <AppLoading />;

  return (
    <>
      <StatusBar
        barStyle={theme.palette.statusBar}
        backgroundColor={theme.palette.primary.main}
      />
      {userToken ? <LoggedRoutes /> : <PublicRoutes />}
    </>
  );
};

export default Routes;
