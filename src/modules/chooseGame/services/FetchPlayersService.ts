import IPlayersRepository from 'modules/chooseGame/domain/repositories/IPlayersRepository';
import IPlayer from 'shared/domain/entities/IPlayer';

interface IExecute {
  players?: IPlayer[];
  shouldLogout?: boolean;
  error?: string;
}

export default class FetchPlayersService {
  constructor(private playersRepository: IPlayersRepository) {}

  public async execute(): Promise<IExecute> {
    try {
      const players = await this.playersRepository.findAll();

      return { players };
    } catch (error) {
      return {
        error: error.message,
        shouldLogout: error.shouldLogout,
      };
    }
  }
}
