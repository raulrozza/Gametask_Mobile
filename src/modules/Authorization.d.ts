declare module 'authorization' {
  import { Achievement } from 'game';

  export interface User {
    token: string;
    firstname: string;
    lastname: string;
    experience: number;
    level: number;
    email: string;
    currentTitle: {
      name: string;
    };
    achievements: Achievement[];
    image?: string;
    profile_url: string;
    [key: string]: string;
  }

  export interface Auth {
    user: User;
    logged: boolean;
    loading: boolean;
    signIn: Function;
    signOut: Function;
  }
}
