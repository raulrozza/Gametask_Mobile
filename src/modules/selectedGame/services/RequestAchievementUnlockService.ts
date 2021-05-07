import IRequestAchievementDTO from 'modules/selectedGame/dtos/IRequestAchievementDTO';
import IRequestsRepository from 'modules/selectedGame/repositories/IRequestsRepository';

interface IExecute {
  shouldLogout?: boolean;
  error?: string;
}

export default class RequestAchievementUnlockService {
  constructor(private requestsRepository: IRequestsRepository) {}

  public async execute(payload: IRequestAchievementDTO): Promise<IExecute> {
    try {
      await this.requestsRepository.achievement(payload);

      return {};
    } catch (error) {
      return {
        error: error.message,
        shouldLogout: error.shouldLogout,
      };
    }
  }
}
