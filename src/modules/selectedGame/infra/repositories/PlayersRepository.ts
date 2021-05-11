import IPlayersRepository from 'modules/selectedGame/repositories/IPlayersRepository';
import { makeHttpProvider } from 'shared/container/providers';
import IPlayer from 'shared/entities/IPlayer';

export default class PlayersRepository implements IPlayersRepository {
  private httpProvider = makeHttpProvider();

  public async findById(id: string): Promise<IPlayer> {
    return this.httpProvider.get(`players/${id}`);
  }
}
