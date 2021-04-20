import React from 'react';
import { AppLoading } from 'expo';

// Hooks
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';

// Routes
import ChooseGameRoutes from './chooseGame.routes';
import GameRoutes from './game.routes';

const LoggedRoutes: React.FC = () => {
  const { selectedGame, loading } = useSessionContext();

  if (loading) return <AppLoading />;

  if (selectedGame) return <GameRoutes />;

  return <ChooseGameRoutes />;
};

export default LoggedRoutes;
