import ITitle from 'shared/domain/entities/ITitle';

export default interface IAchievement {
  id: string;
  name: string;
  description: string;
  title?: ITitle;
  image?: string;
  image_url?: string;
  game: string;
}
