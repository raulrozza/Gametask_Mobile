import { DefaultTheme } from 'styled-components';
import { ILevelInfo } from '../../../../../../interfaces/api/LevelInfo';
import { IPlayer } from '../../../../../../interfaces/api/Player';

export interface BasicLevelInfoProps {
  rankTheme: DefaultTheme;
  player: IPlayer;
  levelInfo: ILevelInfo[];
}
