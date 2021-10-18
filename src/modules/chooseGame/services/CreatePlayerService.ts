import IPlayersRepository from 'modules/chooseGame/domain/repositories/IPlayersRepository';

interface IExecute {
  shouldLogout?: boolean;
  error?: string;
}

export default class CreatePlayerService {
  constructor(private playersRepository: IPlayersRepository) {}

  public async execute(gameId: string): Promise<IExecute> {
    try {
      await this.playersRepository.create(gameId);

      return {};
    } catch (error) {
      return {
        error: error.message,
        shouldLogout: error.shouldLogout,
      };
    }
  }
}
