import ILeaderboardsRepository from 'modules/selectedGame/domain/repositories/ILeaderboardsRepository';
import LeaderboardsRepository from 'modules/selectedGame/infra/repositories/LeaderboardsRepository';

export default function makeLeaderboardsRepository(): ILeaderboardsRepository {
  return new LeaderboardsRepository();
}
