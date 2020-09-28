import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

// Contexts
import Game from '../contexts/Game';

// Hooks
import { useAuth } from '../hooks/contexts/useAuth';

// Styles
import { withTheme } from 'styled-components';

// Routes
import DefaultRoutes from './default.routes';
import GameRoutes from './game.routes';

// Types
import { IThemedComponent } from 'theme';

const Routes: React.FC<IThemedComponent> = ({ theme }) => {
  const { logged, loading } = useAuth();

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

export default withTheme(Routes);
