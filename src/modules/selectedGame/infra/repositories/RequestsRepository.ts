import IRequestActivityDTO from 'modules/selectedGame/dtos/IRequestActivityDTO';
import IRequestsRepository from 'modules/selectedGame/repositories/IRequestsRepository';
import { makeHttpProvider } from 'shared/container/providers';

export default class RequestsRepository implements IRequestsRepository {
  private httpProvider = makeHttpProvider();

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
