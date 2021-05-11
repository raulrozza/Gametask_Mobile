import IAchievement from 'modules/selectedGame/entities/IAchievement';
import IAchievementsRepository from 'modules/selectedGame/repositories/IAchievementsRepository';
import { makeHttpProvider } from 'shared/container/providers';

export default class AchievementsRepository implements IAchievementsRepository {
  private httpProvider = makeHttpProvider();

  public async findAll(): Promise<IAchievement[]> {
    return this.httpProvider.get('achievements');
  }
}
