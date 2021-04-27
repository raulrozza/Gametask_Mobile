import IGamesRepository from 'modules/chooseGame/repositories/IGamesRepository';
import { makeHttpProvider } from 'shared/container/providers';
import IGame from 'shared/entities/IGame';

export default class GamesRepository implements IGamesRepository {
  private httpProvider = makeHttpProvider();

  public async findById(id: string): Promise<IGame> {
    const response = await this.httpProvider.get<IGame>('games/details');

    return response;
  }
}
