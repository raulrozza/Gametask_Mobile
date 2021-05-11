import IUser from 'shared/entities/IUser';
import IUserSignupDTO from 'modules/authentication/dtos/IUserSignupDTO';
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
