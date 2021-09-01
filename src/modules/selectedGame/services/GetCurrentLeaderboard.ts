import ILeaderboard from 'modules/selectedGame/domain/entities/ILeaderboard';
import ILeaderboardsRepository from 'modules/selectedGame/domain/repositories/ILeaderboardsRepository';

interface IExecute {
  leaderboard?: ILeaderboard | null;
  error?: string;
  shouldLogout?: boolean;
}

export default class GetCurrentLeaderboard {
  constructor(private leaderboardsRepository: ILeaderboardsRepository) {}

  public async execute(): Promise<IExecute> {
    try {
      const leaderboard = await this.leaderboardsRepository.findCurrent();

      return { leaderboard };
    } catch (error) {
      return { error: error.message, shouldLogout: error.shouldLogout };
    }
  }
}
