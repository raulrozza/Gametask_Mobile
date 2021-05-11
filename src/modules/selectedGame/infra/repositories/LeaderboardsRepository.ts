import ILeaderboard from 'modules/selectedGame/entities/ILeaderboard';
import ILeaderboardsRepository from 'modules/selectedGame/repositories/ILeaderboardsRepository';
import { makeHttpProvider } from 'shared/container/providers';

export default class LeaderboardsRepository implements ILeaderboardsRepository {
  private httpProvider = makeHttpProvider();

  public async findCurrent(): Promise<ILeaderboard | null> {
    const response = await this.httpProvider.get<ILeaderboard | undefined>(
      'leaderboards',
    );

    return response || null;
  }
}
