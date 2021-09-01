import IActivity from 'modules/selectedGame/domain/entities/IActivity';
import IActivitiesRepository from 'modules/selectedGame/repositories/IActivitiesRepository';

interface IExecute {
  activities?: IActivity[];
  shouldLogout?: boolean;
  error?: string;
}

export default class GetActivitiesService {
  constructor(private activitesRepository: IActivitiesRepository) {}

  public async execute(): Promise<IExecute> {
    try {
      const activities = await this.activitesRepository.findAll();

      return { activities };
    } catch (error) {
      return {
        error: error.message,
        shouldLogout: error.shouldLogout,
      };
    }
  }
}
