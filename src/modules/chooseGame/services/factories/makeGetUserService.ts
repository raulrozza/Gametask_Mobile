import makeUsersRepository from 'modules/chooseGame/infra/repositories/factories/makeUsersRepository';
import GetUserService from 'modules/chooseGame/services/GetUserService';

export default function makeGetUserService(): GetUserService {
  const repository = makeUsersRepository();

  return new GetUserService(repository);
}
