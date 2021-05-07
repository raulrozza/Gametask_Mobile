import IAchievement from 'modules/selectedGame/entities/IAchievement';

export default interface IAchievementsRepository {
  findAll(): Promise<IAchievement[]>;
}
