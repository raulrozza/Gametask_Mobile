import makeActivitiesRepository from 'modules/selectedGame/repositories/factories/makeActivitiesRepository';
import GetActivitiesService from 'modules/selectedGame/services/GetActivitiesService';

export default function makeGetActivitiesService(): GetActivitiesService {
  const repository = makeActivitiesRepository();

  return new GetActivitiesService(repository);
}
