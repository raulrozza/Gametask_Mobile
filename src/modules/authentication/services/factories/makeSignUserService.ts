import makeUsersRepository from 'modules/landing/providers/factories/makeUsersRepository';
import SignUserService from '../SignUserService';

export default function makeSignUserService(): SignUserService {
  const usersRepository = makeUsersRepository();
  const signUser = new SignUserService(usersRepository);

  return signUser;
}
