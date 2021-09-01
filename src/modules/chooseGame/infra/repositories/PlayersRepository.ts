import IPlayersRepository from 'modules/chooseGame/repositories/IPlayersRepository';
import { makeHttpProvider } from 'shared/container/providers';
import IPlayer from 'shared/domain/entities/IPlayer';

export default class PlayersRepository implements IPlayersRepository {
  private httpProvider = makeHttpProvider();

  public async create(gameId: string): Promise<void> {
    return this.httpProvider.post(
      'players',
      {},
      {
        headers: {
          'x-game-id': gameId,
        },
      },
    );
  }

  public async findAll(): Promise<IPlayer[]> {
    return this.httpProvider.get('players');
  }
}
