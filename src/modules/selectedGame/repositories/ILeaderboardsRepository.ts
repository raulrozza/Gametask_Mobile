import ILeaderboard from 'modules/selectedGame/domain/entities/ILeaderboard';

export default interface ILeaderboardsRepository {
  findCurrent(): Promise<ILeaderboard | null>;
}
