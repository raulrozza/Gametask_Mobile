import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

// Contexts
import Game from '../contexts/Game';

// Hooks
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

// Routes
import DefaultRoutes from './default.routes';
import LoggedRoutes from './logged.routes';

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
      {userToken ? (
        <Game>
          <LoggedRoutes />
        </Game>
      ) : (
        <DefaultRoutes />
      )}
    </>
  );
};

export default Routes;
