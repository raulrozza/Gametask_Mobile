import IActivity from 'modules/selectedGame/domain/entities/IActivity';
import IActivitiesRepository from 'modules/selectedGame/domain/repositories/IActivitiesRepository';
import makeHttpProvider from 'shared/infra/providers/factories/makeHttpProvider';

export default class ActivitiesRepository implements IActivitiesRepository {
  private httpProvider = makeHttpProvider();

  public async findAll(): Promise<IActivity[]> {
    return this.httpProvider.get('activities');
  }
}
