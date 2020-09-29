import { RouteProp } from '@react-navigation/native';
import { IAchievement } from '../../interfaces/api/Achievement';

type ParamList = {
  achievementRegister: {
    achievement: IAchievement;
  };
};

export type AchievementRegisterParams = RouteProp<
  ParamList,
  'achievementRegister'
>;
