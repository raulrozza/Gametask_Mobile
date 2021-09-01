import IUser from 'shared/domain/entities/IUser';

export interface IUpdateParams {
  firstname: string;
  lastname?: string;
  image?: string;
}

export default interface IUsersRepository {
  findById(id: string): Promise<IUser>;

  update(data: IUpdateParams): Promise<void>;
}
