import IAchievement from 'modules/selectedGame/domain/entities/IAchievement';
import IAchievementsRepository from 'modules/selectedGame/repositories/IAchievementsRepository';
import makeHttpProvider from 'shared/infra/providers/factories/makeHttpProvider';

export default class AchievementsRepository implements IAchievementsRepository {
  private httpProvider = makeHttpProvider();

  public async findAll(): Promise<IAchievement[]> {
    return this.httpProvider.get('achievements');
  }
}
