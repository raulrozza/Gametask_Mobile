import { ImageStyle, StyleProp } from 'react-native';
import { IGame } from '../../interfaces/api/Game';

export interface GameImageProps {
  game: IGame;
  style?: StyleProp<ImageStyle>;
}
