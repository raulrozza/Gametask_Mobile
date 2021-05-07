import makeAchievementsRepository from 'modules/selectedGame/repositories/factories/makeAchievementsRepository';
import GetAchievementsService from 'modules/selectedGame/services/GetAchievementsService';

export default function makeGetAchievementsService(): GetAchievementsService {
  const repository = makeAchievementsRepository();

  return new GetAchievementsService(repository);
}
