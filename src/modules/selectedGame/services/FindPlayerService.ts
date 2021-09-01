import IPlayersRepository from 'modules/selectedGame/domain/repositories/IPlayersRepository';
import IPlayer from 'shared/domain/entities/IPlayer';

interface IExecute {
  player?: IPlayer;
  shouldLogout?: boolean;
  error?: string;
}

export default class FindPlayerService {
  constructor(private playersRepository: IPlayersRepository) {}

  public async execute(id: string): Promise<IExecute> {
    try {
      const player = await this.playersRepository.findById(id);

      return { player };
    } catch (error) {
      return {
        error: error.message,
        shouldLogout: error.shouldLogout,
      };
    }
  }
}
