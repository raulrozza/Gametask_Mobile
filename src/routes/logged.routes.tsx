import React from 'react';
import { AppLoading } from 'expo';

// Hooks
import { useGameData } from '../hooks/contexts/useGameData';

// Routes
import ChooseGameRoutes from './chooseGame.routes';
import GameRoutes from './game.routes';

const LoggedRoutes: React.FC = () => {
  const { game, loading } = useGameData();

  if (loading) return <AppLoading />;

  if (game) return <GameRoutes />;

  return <ChooseGameRoutes />;
};

export default LoggedRoutes;
