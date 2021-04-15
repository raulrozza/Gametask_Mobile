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
import LoggedRoutes from './logged.routes';

// Types
import { IThemedComponent } from '../interfaces/theme/ThemedComponent';

const Routes: React.FC<IThemedComponent> = ({ theme }) => {
  const { logged, loading } = useAuth();

  if (loading) return <AppLoading />;

  return (
    <>
      <StatusBar barStyle={theme.statusBar} backgroundColor={theme.palette.primary.main} />
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

export default withTheme(Routes);
