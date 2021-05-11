import AchievementsRepository from 'modules/selectedGame/infra/repositories/AchievementsRepository';
import IAchievementsRepository from 'modules/selectedGame/repositories/IAchievementsRepository';

export default function makeAchievementsRepository(): IAchievementsRepository {
  return new AchievementsRepository();
}
