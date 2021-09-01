import IUsersRepository from 'modules/authentication/domain/repositories/IUsersRepository';
import UsersRepository from 'modules/authentication/infra/repositories/UsersRepository';

export default function makeUsersRepository(): IUsersRepository {
  const usersRepository = new UsersRepository();

  return usersRepository;
}
