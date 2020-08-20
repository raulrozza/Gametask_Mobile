import { RouteProp } from '@react-navigation/native';
import { IRank, ILevelInfo, IAchievement } from 'game';

type ParamList = {
  achievementDetails: { achievement: IAchievement };
};

export type AchievementRouteProps = RouteProp<ParamList, 'achievementDetails'>;

export interface IUserMeta {
  rank: IRank | undefined;
  nextLevel: ILevelInfo | undefined;
}

export interface AchievementProps {
  obtained: boolean;
}
