import LeaderboardsRepository from 'modules/selectedGame/infra/repositories/LeaderboardsRepository';
import ILeaderboardsRepository from 'modules/selectedGame/repositories/ILeaderboardsRepository';

export default function makeLeaderboardsRepository(): ILeaderboardsRepository {
  return new LeaderboardsRepository();
}
