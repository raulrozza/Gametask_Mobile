declare module 'authorization' {
  import { IAchievement } from 'game';

  export interface IUser {
    _id: string;
    token: string;
    firstname: string;
    lastname: string;
    email: string;
    image?: string;
    profile_url: string;
    [key: string]: string;
  }

  export interface IAuth {
    user: IUser;
    logged: boolean;
    loading: boolean;
    signIn: (user: IUser) => void;
    signOut: () => void;
  }
}
