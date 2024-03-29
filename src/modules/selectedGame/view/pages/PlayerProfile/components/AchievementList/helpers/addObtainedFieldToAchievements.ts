import IAchievement from 'modules/selectedGame/domain/entities/IAchievement';
import IPlayer from 'shared/domain/entities/IPlayer';

export default function addObtainedFieldToAchievements(
  achievements: IAchievement[],
  player: IPlayer,
): Array<IAchievement & { obtained: boolean }> {
  if (!achievements || !player) return [];

  const mappedAchievements = achievements.map(achievement => {
    return {
      ...achievement,
      obtained: player.achievements.includes(achievement.id),
    };
  });

  return mappedAchievements;
}
