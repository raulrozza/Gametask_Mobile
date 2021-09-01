import IGame from 'shared/domain/entities/IGame';
import IRank from 'shared/domain/entities/IRank';
import ITitle from 'shared/domain/entities/ITitle';
import IUser from 'shared/domain/entities/IUser';

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
