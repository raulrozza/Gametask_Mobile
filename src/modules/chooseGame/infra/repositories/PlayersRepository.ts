import IPlayersRepository from 'modules/chooseGame/repositories/IPlayersRepository';
import { makeHttpProvider } from 'shared/container/providers';
import IPlayer from 'shared/entities/IPlayer';

export default class PlayersRepository implements IPlayersRepository {
  private httpProvider = makeHttpProvider();

  public async findAll(): Promise<IPlayer[]> {
    return this.httpProvider.get('players');
  }
}
