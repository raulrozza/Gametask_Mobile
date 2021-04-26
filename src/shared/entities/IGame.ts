import IRank from 'shared/entities/IRank';

export default interface IGame {
  id: string;
  name: string;
  description: string;
  image?: string;
  image_url: string;
  ranks: IRank[];
  theme: {
    primary: string;
    secondary: string;
  };
}
