import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

// Hooks
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

// Routes
import LoggedRoutes from '../../../routes/logged.routes';
import PublicRoutes from 'shared/infra/routes/public';

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
