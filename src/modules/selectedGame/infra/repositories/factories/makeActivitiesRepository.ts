import IActivitiesRepository from 'modules/selectedGame/domain/repositories/IActivitiesRepository';
import ActivitiesRepository from 'modules/selectedGame/infra/repositories/ActivitiesRepository';

export default function makeActivitiesRepository(): IActivitiesRepository {
  return new ActivitiesRepository();
}
