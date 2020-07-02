import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

// Contexts
import { useAuth } from '../contexts/Authorization';
import { useTheme } from '../contexts/Theme';
import Game from '../contexts/Game';

// Routes
import DefaultRoutes from './default.routes';
import GameRoutes from './game.routes';

const Routes: React.FC = () => {
  const { logged, loading } = useAuth();
  const { theme } = useTheme();

  if (loading) return <AppLoading />;

  return (
    <>
      <StatusBar barStyle={theme.statusBar} backgroundColor={theme.primary} />
      {logged ? (
        <Game>
          <GameRoutes />
        </Game>
      ) : (
        <DefaultRoutes />
      )}
    </>
  );
};

export default Routes;
