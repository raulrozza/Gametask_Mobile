import IAchievementsRepository from 'modules/selectedGame/domain/repositories/IAchievementsRepository';
import AchievementsRepository from 'modules/selectedGame/infra/repositories/AchievementsRepository';

export default function makeAchievementsRepository(): IAchievementsRepository {
  return new AchievementsRepository();
}
