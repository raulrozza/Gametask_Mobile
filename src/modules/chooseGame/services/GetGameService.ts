import IGamesRepository from 'modules/chooseGame/repositories/IGamesRepository';
import IGame from 'shared/domain/entities/IGame';

interface IExecute {
  game?: IGame;
  shouldLogout?: boolean;
  error?: string;
}

export default class GetGameService {
  constructor(private gamesRepository: IGamesRepository) {}

  public async execute(id: string): Promise<IExecute> {
    try {
      const game = await this.gamesRepository.findById(id);

      return { game };
    } catch (error) {
      return {
        error: error.message,
        shouldLogout: error.shouldLogout,
      };
    }
  }
}
