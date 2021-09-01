import IGamesRepository from 'modules/chooseGame/domain/repositories/IGamesRepository';
import IGame from 'shared/domain/entities/IGame';
import makeHttpProvider from 'shared/infra/providers/factories/makeHttpProvider';

export default class GamesRepository implements IGamesRepository {
  private httpProvider = makeHttpProvider();

  public async findById(id: string): Promise<IGame> {
    const response = await this.httpProvider.get<IGame>('games/details', {
      headers: {
        'x-game-id': id,
      },
    });

    return response;
  }
}
