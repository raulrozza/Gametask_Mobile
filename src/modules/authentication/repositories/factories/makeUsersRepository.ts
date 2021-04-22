import UsersRepository from 'modules/authentication/infra/repositories/UsersRepository';
import IUsersRepository from 'modules/authentication/repositories/IUsersRepository';

export default function makeUsersRepository(): IUsersRepository {
  const usersRepository = new UsersRepository();

  return usersRepository;
}
