export interface IUser {
  _id: string;
  token: string;
  firstname: string;
  lastname: string;
  email: string;
  image?: string | null;
  profile_url: string;
  [key: unknown]: string;
}
