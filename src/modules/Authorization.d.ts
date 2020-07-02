declare module 'authorization' {
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
