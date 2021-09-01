import IUserSignupDTO from 'modules/authentication/domain/dtos/IUserSignupDTO';
import IUser from 'shared/domain/entities/IUser';

import IUsersRepository from '../repositories/IUsersRepository';

interface IExecute {
  user?: IUser;
  error?: string;
}

export default class SignUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(values: IUserSignupDTO): Promise<IExecute> {
    try {
      const user = await this.usersRepository.create(values);

      return { user };
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  }
}
