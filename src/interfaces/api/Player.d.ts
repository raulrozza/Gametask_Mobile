import { IAchievement } from './Achievement';
import { IGame } from './Game';
import { IRank } from './Rank';
import { ITitle } from './Title';
import { IUser } from './User';

export interface IPlayer {
  _id: string;
  experience: number;
  level: number;
  currentTitle?: ITitle;
  achievements: (IAchievement | string)[];
  rank: IRank;
  user: IUser;
  game: IGame;
  titles: ITitle[];
  [key: string]: string;
}
