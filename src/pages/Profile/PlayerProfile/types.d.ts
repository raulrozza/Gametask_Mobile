import { ILevelInfo } from '../../interfaces/api/LevelInfo';
import { IRank } from '../../interfaces/api/Rank';

export interface IUserMeta {
  rank: IRank | undefined;
  nextLevel: ILevelInfo | undefined;
}

export interface AchievementContainerProps {
  obtained: boolean;
}

export interface BottomOptionTextProps {
  thin?: boolean;
}
