import { IUser } from '../api/User';

export interface UpdatedUser {
  firstname: string;
  lastname?: string;
  image: string | null;
}

export interface IAuth {
  user: IUser | null;
  logged: boolean;
  loading: boolean;
  signIn: (user: IUser) => void;
  signOut: () => void;
  updateUser: (updatedUser: UpdatedUser) => void;
}
