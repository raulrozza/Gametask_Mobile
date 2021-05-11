import IGame from 'shared/entities/IGame';
import IUser from 'shared/entities/IUser';

export interface IActivityLog {
  version: number;
  log: Date;
  changes: unknown;
  userId: string | IUser;
}

export interface IHistory {
  user: string | IUser;
  log: Date;
}

export default interface IActivity {
  id: string;
  name: string;
  description?: string;
  experience: number;
  dmRules?: string;
  history: IHistory[];
  changelog: IActivityLog[];
  game: string | IGame;
}
