import IActivity from 'modules/selectedGame/entities/IActivity';
import IActivitiesRepository from 'modules/selectedGame/repositories/IActivitiesRepository';
import { makeHttpProvider } from 'shared/container/providers';

export default class ActivitiesRepository implements IActivitiesRepository {
  private httpProvider = makeHttpProvider();

  public async findAll(): Promise<IActivity[]> {
    return this.httpProvider.get('activities');
  }
}