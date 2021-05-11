import IUpdateUserDTO from 'modules/chooseGame/dtos/IUpdateUserDTO';
import IUsersRepository from 'modules/chooseGame/repositories/IUsersRepository';

interface IExecute {
  shouldLogout?: boolean;
  error?: string;
}

export default class UpdateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(data: IUpdateUserDTO): Promise<IExecute> {
    try {
      await this.usersRepository.update(data);

      return {};
    } catch (error) {
      return {
        error: error.message,
        shouldLogout: error.shouldLogout,
      };
    }
  }
}
