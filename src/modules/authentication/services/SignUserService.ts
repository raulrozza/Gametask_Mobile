import IUserSignupDTO from 'modules/authentication/domain/dtos/IUserSignupDTO';
import IUsersRepository from 'modules/authentication/domain/repositories/IUsersRepository';
import IUser from 'shared/domain/entities/IUser';

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
