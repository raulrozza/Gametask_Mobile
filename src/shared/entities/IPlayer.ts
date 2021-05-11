import IGame from 'shared/entities/IGame';
import IRank from 'shared/entities/IRank';
import ITitle from 'shared/entities/ITitle';
import IUser from 'shared/entities/IUser';

export default interface IPlayer {
  id: string;
  experience: number;
  level: number;
  titles?: ITitle[];
  currentTitle?: ITitle;
  achievements: string[];
  rank?: IRank;
  user: Omit<IUser, 'email'>;
  game: IGame;
}
