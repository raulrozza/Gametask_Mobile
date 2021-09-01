import IAchievement from 'modules/selectedGame/domain/entities/IAchievement';

export default interface IAchievementsRepository {
  findAll(): Promise<IAchievement[]>;
}
