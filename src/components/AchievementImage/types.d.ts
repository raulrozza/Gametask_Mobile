import { ImageStyle, StyleProp } from 'react-native';
import { IAchievement } from '../../interfaces/api/Achievement';

export interface AchievementImageProps {
  achievement: IAchievement;
  style?: StyleProp<ImageStyle>;
}
