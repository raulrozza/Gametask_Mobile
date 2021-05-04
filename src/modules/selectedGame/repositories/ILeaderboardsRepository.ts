import ILeaderboard from 'modules/selectedGame/entities/ILeaderboard';

export default interface ILeaderboardsRepository {
  findCurrent(): Promise<ILeaderboard | null>;
}
