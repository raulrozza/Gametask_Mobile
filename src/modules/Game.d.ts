declare module 'game' {
  import { colorPallete } from '../contexts/Theme';

  export interface GameRank {
    color: string;
    level: number;
    name: string;
    tag: string;
  }

  export interface GameLevelInfo {
    level: number;
    requiredExperience: number;
    title: string;
  }

  export interface GameObject {
    id: string;
    name: string;
    description: string;
    image_url: string;
    weeklyRanking: Array;
    ranks: GameRank[];
    levelInfo: GameLevelInfo[];
    theme: colorPallete;
  }

  export interface Title {
    _id: string;
    name: string;
  }

  export interface Achievement {
    id: string;
    name: string;
    description: string;
    image: string | undefined;
    image_url: string;
    title?: Title;
    obtained?: boolean;
  }

  export interface GameHook {
    game: GameObject;
    loading: boolean;
    achievements: Achievement[];
  }
}
