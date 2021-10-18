import makeLeaderboardsRepository from 'modules/selectedGame/infra/repositories/factories/makeLeaderboardsRepository';
import GetCurrentLeaderboard from 'modules/selectedGame/services/GetCurrentLeaderboard';

export default function makeGetCurrentLeaderboard(): GetCurrentLeaderboard {
  const repository = makeLeaderboardsRepository();

  return new GetCurrentLeaderboard(repository);
}
