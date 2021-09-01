import React from 'react';

import ChooseGameLoggedRoutes from 'modules/chooseGame/infra/routes/logged';
import GameRoutes from 'shared/infra/routes/game';
import { useSessionContext } from 'shared/view/contexts';

// Routes

const LoggedRoutes: React.FC = () => {
  const { selectedGame } = useSessionContext();

  if (selectedGame) return <GameRoutes />;

  return <ChooseGameLoggedRoutes />;
};

export default LoggedRoutes;
