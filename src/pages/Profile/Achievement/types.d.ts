import { RouteProp } from '@react-navigation/native';
import { IAchievement } from '../../interfaces/api/Achievement';

type ParamList = {
  achievementDetails: {
    achievement: IAchievement;
  };
};

export type AchievementParams = RouteProp<ParamList, 'achievementDetails'>;
