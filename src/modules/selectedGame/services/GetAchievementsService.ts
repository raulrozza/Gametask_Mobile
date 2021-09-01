import IAchievement from 'modules/selectedGame/domain/entities/IAchievement';
import IAchievementsRepository from 'modules/selectedGame/domain/repositories/IAchievementsRepository';

interface IExecute {
  achievements?: IAchievement[];
  shouldLogout?: boolean;
  error?: string;
}

export default class GetAchievementsService {
  constructor(private achievementsRepository: IAchievementsRepository) {}

  public async execute(): Promise<IExecute> {
    try {
      const achievements = await this.achievementsRepository.findAll();

      return { achievements };
    } catch (error) {
      return {
        error: error.message,
        shouldLogout: error.shouldLogout,
      };
    }
  }
}
