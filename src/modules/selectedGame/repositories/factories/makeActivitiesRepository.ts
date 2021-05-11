import ActivitiesRepository from 'modules/selectedGame/infra/repositories/ActivitiesRepository';
import IActivitiesRepository from 'modules/selectedGame/repositories/IActivitiesRepository';

export default function makeActivitiesRepository(): IActivitiesRepository {
  return new ActivitiesRepository();
}
