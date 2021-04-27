import IUsersRepository from 'modules/chooseGame/repositories/IUsersRepository';
import { makeHttpProvider } from 'shared/container/providers';
import IUser from 'shared/entities/IUser';

export default class UsersRepository implements IUsersRepository {
  private httpProvider = makeHttpProvider();

  public async findById(id: string): Promise<IUser> {
    return this.httpProvider.get(`users/${id}`);
  }
}
