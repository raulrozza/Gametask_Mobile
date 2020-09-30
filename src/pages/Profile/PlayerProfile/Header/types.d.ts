import { IRank } from '../../../../interfaces/api/Rank';
import { ITitle } from '../../../../interfaces/api/Title';
import { IThemedComponent } from '../../../../interfaces/theme/ThemedComponent';

export interface HeaderProps extends IThemedComponent {
  firstname: string;
  title?: ITitle;
  rank?: IRank;
}
