import ILevelInfo from 'shared/domain/entities/ILevelInfo';
import IRank from 'shared/domain/entities/IRank';

export default interface IGame {
  id: string;
  name: string;
  description: string;
  image?: string;
  image_url?: string;
  levelInfo: ILevelInfo[] | null;
  ranks: IRank[];
  theme: {
    primary: string;
    secondary: string;
  };
}
