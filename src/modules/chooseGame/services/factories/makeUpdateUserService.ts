import makeUsersRepository from 'modules/chooseGame/repositories/factories/makeUsersRepository';
import UpdateUserService from 'modules/chooseGame/services/UpdateUserService';

export default function makeUpdateUserService(): UpdateUserService {
  const repository = makeUsersRepository();

  return new UpdateUserService(repository);
}
