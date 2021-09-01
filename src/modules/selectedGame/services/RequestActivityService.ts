import IRequestActivityDTO from 'modules/selectedGame/domain/dtos/IRequestActivityDTO';
import IRequestsRepository from 'modules/selectedGame/repositories/IRequestsRepository';

interface IExecute {
  shouldLogout?: boolean;
  error?: string;
}

export default class RequestActivityService {
  constructor(private requestsRepository: IRequestsRepository) {}

  public async execute(payload: IRequestActivityDTO): Promise<IExecute> {
    try {
      await this.requestsRepository.activity(payload);

      return {};
    } catch (error) {
      return {
        error: error.message,
        shouldLogout: error.shouldLogout,
      };
    }
  }
}
