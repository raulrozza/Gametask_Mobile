import React from 'react';

import {
  IPlayerProfileContext,
  PlayerProfileContextProvider,
} from 'modules/selectedGame/view/contexts/PlayerProfileContext/hooks/usePlayerProfileContext';

const DefaultPlayerProfileContext: React.FC<IPlayerProfileContext> = ({
  player,
  children,
}) => (
  <PlayerProfileContextProvider.Provider value={{ player }}>
    {children}
  </PlayerProfileContextProvider.Provider>
);

export default DefaultPlayerProfileContext;
