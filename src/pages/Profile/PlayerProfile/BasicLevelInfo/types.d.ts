import { DefaultTheme } from 'styled-components';
import { ILevelInfo } from '../../../../interfaces/api/LevelInfo';
import { IPlayer } from '../../../../interfaces/api/Player';
import { IUser } from '../../../../interfaces/api/User';
import { IThemedComponent } from '../../../../interfaces/theme/ThemedComponent';

export interface BasicLevelInfoProps extends IThemedComponent {
  rankTheme: DefaultTheme;
  user: IUser;
  player: IPlayer;
  levelInfo: ILevelInfo[];
}
