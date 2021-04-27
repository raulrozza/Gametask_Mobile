import UsersRepository from 'modules/chooseGame/infra/repositories/UsersRepository';
import IUsersRepository from 'modules/chooseGame/repositories/IUsersRepository';

export default function makeUsersRepository(): IUsersRepository {
  return new UsersRepository();
}
