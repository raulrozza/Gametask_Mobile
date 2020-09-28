import { IUser } from '../api/User';

export interface IAuth {
  user: IUser | null;
  logged: boolean;
  loading: boolean;
  signIn: (user: IUser) => void;
  signOut: () => void;
}
