import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

// Contexts
import Game from '../contexts/Game';

// Hooks
import { useAuth } from '../hooks/contexts/useAuth';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

// Routes
import DefaultRoutes from './default.routes';
import LoggedRoutes from './logged.routes';

const Routes: React.FC = () => {
  const { logged, loading } = useAuth();
  const { theme } = useThemeContext();

  if (loading) return <AppLoading />;

  return (
    <>
      <StatusBar
        barStyle={theme.palette.statusBar}
        backgroundColor={theme.palette.primary.main}
      />
      {logged ? (
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
