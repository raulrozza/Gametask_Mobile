// Types
import { IAchievement } from '../../../../../interfaces/api/Achievement';
import { IPlayer } from '../../../../../interfaces/api/Player';

export function addObtainedFieldToAchievements(
  data: IAchievement[] | null,
  player: IPlayer | null,
): IAchievement[] {
  if (!data || !player) return [];

  const mappedAchievements = data.map(achievement => {
    return {
      ...achievement,
      obtained: player.achievements.includes(achievement._id) || false,
    };
  });

  return mappedAchievements;
}
