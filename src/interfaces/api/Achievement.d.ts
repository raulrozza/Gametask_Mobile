import { ITitle } from './Title';

export interface IAchievement {
  _id: string;
  id: string;
  name: string;
  description: string;
  image: string | undefined;
  image_url: string;
  title?: ITitle;
  obtained?: boolean;
}
