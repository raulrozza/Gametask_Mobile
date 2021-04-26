import React from 'react';

// Hooks
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';

// Routes
import GameRoutes from '../../../routes/game.routes';
import ChooseGameLoggedRoutes from 'modules/chooseGame/infra/routes/logged';

const LoggedRoutes: React.FC = () => {
  const { selectedGame } = useSessionContext();

  if (selectedGame) return <GameRoutes />;

  return <ChooseGameLoggedRoutes />;
};

export default LoggedRoutes;
