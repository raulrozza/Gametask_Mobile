import { ILevelInfo } from './LevelInfo';
import { IRank } from './Rank';
import { IRankingItem } from './RankingItem';

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
