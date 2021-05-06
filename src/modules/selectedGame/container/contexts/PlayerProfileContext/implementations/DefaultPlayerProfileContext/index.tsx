import { PlayerProfileContextProvider } from 'modules/selectedGame/container/contexts/PlayerProfileContext/contexts/usePlayerProfileContext';
import React from 'react';
import IPlayer from 'shared/entities/IPlayer';

interface DefaultPlayerProfileContextProps {
  player: IPlayer;
}

const DefaultPlayerProfileContext: React.FC<DefaultPlayerProfileContextProps> = ({
  player,
  children,
}) => (
  <PlayerProfileContextProvider.Provider value={player}>
    {children}
  </PlayerProfileContextProvider.Provider>
);

export default DefaultPlayerProfileContext;
