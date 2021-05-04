import IRank from 'shared/entities/IRank';
import IUser from 'shared/entities/IUser';

export interface IPosition {
  player: {
    id: string;
    level: number;
    rank: IRank;
    user: IUser;
    currentTitle?: {
      name: string;
    };
  };
  experience: number;
}

export default interface ILeaderboard {
  id: string;
  game: string;
  position: IPosition[];
  createdAt: Date;
  expiresAt?: Date;
}
