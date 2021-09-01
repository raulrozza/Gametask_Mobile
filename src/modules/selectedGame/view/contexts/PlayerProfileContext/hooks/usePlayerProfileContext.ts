import { createContext, useContext } from 'react';

import IPlayer from 'shared/domain/entities/IPlayer';

export interface IPlayerProfileContext {
  player: IPlayer;
}

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
