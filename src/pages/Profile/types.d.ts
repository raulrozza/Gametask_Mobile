import { IRank, ILevelInfo } from 'game';

export interface IUserMeta {
  rank: IRank | undefined;
  nextLevel: ILevelInfo | undefined;
}

export interface AchievementProps {
  obtained: boolean;
}
