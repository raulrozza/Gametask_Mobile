export interface IUser {
  _id: string;
  token: string;
  firstname: string;
  lastname: string;
  email: string;
  image?: string;
  profile_url: string;
  [key: string]: string;
}
