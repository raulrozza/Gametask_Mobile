import IPlayerProfileContext from 'modules/selectedGame/container/contexts/PlayerProfileContext/models/IPlayerProfileContext';
import { createContext, useContext } from 'react';

export const PlayerProfileContextProvider = createContext<IPlayerProfileContext>(
  {} as IPlayerProfileContext,
);

const usePlayerProfileContext = (): IPlayerProfileContext => {
  const playerProfileProvider = useContext(PlayerProfileContextProvider);

  if (!playerProfileProvider)
    throw new Error(
      'usePlayerProfileContext should be called inside a PlayerProfileContextProvider',
    );

  return playerProfileProvider;
};

export default usePlayerProfileContext;
