import makeUsersRepository from 'modules/authentication/infra/repositories/factories/makeUsersRepository';

import LogUserService from '../LogUserService';

export default function makeLogUserService(): LogUserService {
  const usersRepository = makeUsersRepository();
  const logUserService = new LogUserService(usersRepository);

  return logUserService;
}
