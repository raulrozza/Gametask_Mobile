import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

// Contexts
import { useAuth } from '../contexts/Authorization';
import Game from '../contexts/Game';

// Styles
import { withTheme } from 'styled-components';

// Routes
import DefaultRoutes from './default.routes';
import GameRoutes from './game.routes';

// Types
import { IThemedComponent, themeProps } from 'theme';

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

Routes.propTypes = {
  theme: themeProps,
};

export default withTheme(Routes);
