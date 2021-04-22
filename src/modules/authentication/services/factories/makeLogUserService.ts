import makeUsersRepository from 'modules/landing/providers/factories/makeUsersRepository';
import LogUserService from '../LogUserService';

export default function makeLogUserService(): LogUserService {
  const usersRepository = makeUsersRepository();
  const logUserService = new LogUserService(usersRepository);

  return logUserService;
}
