import IUsersRepository from 'modules/chooseGame/domain/repositories/IUsersRepository';
import IUser from 'shared/domain/entities/IUser';

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
