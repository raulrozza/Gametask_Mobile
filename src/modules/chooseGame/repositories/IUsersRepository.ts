import IUser from 'shared/entities/IUser';

export default interface IUsersRepository {
  findById(id: string): Promise<IUser>;
}
