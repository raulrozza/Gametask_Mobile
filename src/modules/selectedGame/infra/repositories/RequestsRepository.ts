import IRequestAchievementDTO from 'modules/selectedGame/domain/dtos/IRequestAchievementDTO';
import IRequestActivityDTO from 'modules/selectedGame/domain/dtos/IRequestActivityDTO';
import IRequestsRepository from 'modules/selectedGame/repositories/IRequestsRepository';
import makeHttpProvider from 'shared/infra/providers/factories/makeHttpProvider';

export default class RequestsRepository implements IRequestsRepository {
  private httpProvider = makeHttpProvider();

  public async achievement({
    id,
    information,
    playerId,
  }: IRequestAchievementDTO): Promise<void> {
    return this.httpProvider.post(`players/${playerId}/achievements`, {
      information,
      achievement: id,
      requestDate: new Date(),
    });
  }

  public async activity({
    id,
    information,
    playerId,
    completionDate,
  }: IRequestActivityDTO): Promise<void> {
    return this.httpProvider.post(`players/${playerId}/activities`, {
      activity: id,
      completionDate,
      requestDate: new Date(),
      information,
    });
  }
}
