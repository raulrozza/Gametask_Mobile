import { PlayerProfileContextProvider } from 'modules/selectedGame/container/contexts/PlayerProfileContext/contexts/usePlayerProfileContext';
import IPlayerProfileContext from 'modules/selectedGame/container/contexts/PlayerProfileContext/models/IPlayerProfileContext';
import React from 'react';

const DefaultPlayerProfileContext: React.FC<IPlayerProfileContext> = ({
  player,
  children,
}) => (
  <PlayerProfileContextProvider.Provider value={{ player }}>
    {children}
  </PlayerProfileContextProvider.Provider>
);

export default DefaultPlayerProfileContext;
