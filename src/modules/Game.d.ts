declare module 'game' {
  import { IUser } from 'authorization';
  import { colorPallete } from '../contexts/Theme';

  export interface IRank {
    color: string;
    level: number;
    name: string;
    tag: string;
  }

  export interface ILevelInfo {
    level: number;
    requiredExperience: number;
    title: string;
  }

  export interface IRankingItem {
    currentExperience: number;
    user: IUser;
  }

  export interface IGame {
    id: string;
    name: string;
    description: string;
    image_url: string;
    weeklyRanking: IRankingItem[];
    ranks: IRank[];
    levelInfo: ILevelInfo[];
    theme: colorPallete;
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

  export interface GameHook {
    game: IGame;
    loading: boolean;
    achievements: IAchievement[];
  }
}
