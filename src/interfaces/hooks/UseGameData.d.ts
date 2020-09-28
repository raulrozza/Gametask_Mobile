import { IGame } from '../api/Game';
import { IPlayer } from '../api/Player';

export interface IGameData {
  game: IGame | null;
  player: IPlayer | null;
  loading: boolean;
  switchGame: (player?: IPlayer) => void;
}
