import makeRequestsRepository from 'modules/selectedGame/repositories/factories/makeRequestsRepository';
import RequestAchievementUnlockService from 'modules/selectedGame/services/RequestAchievementUnlockService';

export default function makeRequestAchievementUnlockService(): RequestAchievementUnlockService {
  const repository = makeRequestsRepository();

  return new RequestAchievementUnlockService(repository);
}
