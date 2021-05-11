import IUsersRepository from 'modules/chooseGame/repositories/IUsersRepository';
import IUser from 'shared/entities/IUser';

interface IExecute {
  user?: IUser;
  shouldLogout?: boolean;
  error?: string;
}

export default class GetUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(id: string): Promise<IExecute> {
    try {
      const user = await this.usersRepository.findById(id);

      return { user };
    } catch (error) {
      return {
        error: error.message,
        shouldLogout: error.shouldLogout,
      };
    }
  }
}
