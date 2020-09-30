import { ImageStyle, StyleProp } from 'react-native';
import { IUser } from '../../interfaces/api/User';

export interface UserImageProps {
  user: IUser;
  style?: StyleProp<ImageStyle>;
}
