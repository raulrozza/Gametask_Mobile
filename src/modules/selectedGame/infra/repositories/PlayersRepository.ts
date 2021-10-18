import IPlayersRepository from 'modules/selectedGame/domain/repositories/IPlayersRepository';
import IPlayer from 'shared/domain/entities/IPlayer';
import makeHttpProvider from 'shared/infra/providers/factories/makeHttpProvider';

export default class PlayersRepository implements IPlayersRepository {
  private httpProvider = makeHttpProvider();

  public async updateCurrentTitle(id: string, titleId?: string): Promise<void> {
    return this.httpProvider.patch(`/players/${id}/titles`, { titleId });
  }

  public async findById(id: string): Promise<IPlayer> {
    return this.httpProvider.get(`players/${id}`);
  }
}
