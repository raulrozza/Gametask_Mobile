import makeUsersRepository from 'modules/authentication/repositories/factories/makeUsersRepository';
import SignUserService from '../SignUserService';

export default function makeSignUserService(): SignUserService {
  const usersRepository = makeUsersRepository();
  const signUser = new SignUserService(usersRepository);

  return signUser;
}
