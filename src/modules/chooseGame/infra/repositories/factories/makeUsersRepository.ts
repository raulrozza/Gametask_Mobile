import IUsersRepository from 'modules/chooseGame/domain/repositories/IUsersRepository';
import UsersRepository from 'modules/chooseGame/infra/repositories/UsersRepository';

export default function makeUsersRepository(): IUsersRepository {
  return new UsersRepository();
}
