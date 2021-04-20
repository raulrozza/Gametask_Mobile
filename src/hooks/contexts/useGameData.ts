import { createContext, useContext } from 'react';
import { IGame } from 'src/interfaces/api/Game';
import { IPlayer } from 'src/interfaces/api/Player';

const GameContext = createContext({} as IGameData);

export interface IGameData {
  game: IGame | null;
  player: IPlayer | null;
  loading: boolean;
  switchGame: (player?: IPlayer) => void;
}

export function useGameData(): IGameData {
  const game = useContext(GameContext);

  return game;
}
