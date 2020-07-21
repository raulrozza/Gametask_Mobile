declare module 'authorization' {
  import { IAchievement } from 'game';

  export interface IUser {
    _id: string;
    token: string;
    firstname: string;
    lastname: string;
    experience: number;
    level: number;
    email: string;
    currentTitle: {
      name: string;
    };
    achievements: IAchievement[];
    image?: string;
    profile_url: string;
    [key: string]: string;
  }

  export interface Auth {
    user: IUser;
    logged: boolean;
    loading: boolean;
    signIn: Function;
    signOut: Function;
  }
}
