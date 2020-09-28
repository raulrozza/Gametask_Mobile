declare module 'game' {
  import { IUser } from 'authorization';

  export interface IRank {
    color: string;
    level: number;
    name: string;
    tag: string;
  }

  export interface ITitle {
    _id: string;
    name: string;
  }

  export interface IActivity {
    _id: string;
    name: string;
    experience: number;
    description: string;
  }

  export interface IAchievement {
    _id: string;
    id: string;
    name: string;
    description: string;
    image: string | undefined;
    image_url: string;
    title?: ITitle;
    obtained?: boolean;
  }

  export interface ILevelInfo {
    level: number;
    requiredExperience: number;
    title: string;
  }

  export interface IRankingItem {
    currentExperience: number;
    player: IPlayer;
  }

  export interface IGame {
    _id: string;
    id: string;
    name: string;
    description: string;
    image?: string;
    image_url: string;
    weeklyRanking: IRankingItem[];
    ranks: IRank[];
    levelInfo: ILevelInfo[];
    theme: {
      primary: string;
      secondary: string;
    };
  }

  export interface IPlayer {
    _id: string;
    experience: number;
    level: number;
    currentTitle?: ITitle;
    achievements: (IAchievement | string)[];
    rank: IRank;
    user: IUser;
    game: IGame;
    titles: ITitle[];
    [key: string]: string;
  }

  export interface IInviteData {
    gameId: string;
    inviter: string;
  }

  export interface IGameHook {
    game: IGame;
    player: IPlayer;
    loading: boolean;
    switchGame: (player?: IPlayer) => void;
  }
}
