declare module 'game' {
  import { IUser } from 'authorization';
  import { colorPallete } from '../contexts/Theme';

  export interface UnknownObject {
    [key: string]: unknown;
  }

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
    theme: colorPallete;
  }

  export interface IPlayer {
    _id: string;
    experience: number;
    level: number;
    currentTitle: {
      name: string;
    };
    achievements: IAchievement[];
    rank: IRank;
    user: IUser;
    game: IGame;
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
    achievements: IAchievement[];
    switchGame: (player?: IPlayer) => void;
  }
}
