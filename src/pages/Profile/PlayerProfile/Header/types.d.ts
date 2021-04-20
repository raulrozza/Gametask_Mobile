import { DefaultTheme } from 'styled-components';
import { IRank } from '../../../../interfaces/api/Rank';
import { ITitle } from '../../../../interfaces/api/Title';

export interface HeaderProps {
  firstname: string;
  title?: ITitle | null;
  rank?: IRank;
  theme: DefaultTheme;
}
