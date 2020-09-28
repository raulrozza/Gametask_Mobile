import { RouteProp } from '@react-navigation/native';
import { IAchievement } from '../../interfaces/api/Achievement';
import { ILevelInfo } from '../../interfaces/api/LevelInfo';
import { IRank } from '../../interfaces/api/Rank';

type ParamList = {
  achievementDetails: { achievement: IAchievement };
  achievementRegister: { achievement: IAchievement };
};

export type AchievementRouteProp = RouteProp<ParamList, 'achievementDetails'>;
export type AchievementRegisterRouteProp = RouteProp<
  ParamList,
  'achievementRegister'
>;

export interface IUserMeta {
  rank: IRank | undefined;
  nextLevel: ILevelInfo | undefined;
}

export interface IAchievementStyle {
  obtained: boolean;
}

export interface IBottomOptions {
  thin?: boolean;
}
