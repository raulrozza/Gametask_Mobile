// Types
import { IAchievement } from '../../../../../interfaces/api/Achievement';
import { ILevelInfo } from '../../../../../interfaces/api/LevelInfo';
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

export function getPlayerNextLevel(
  currentLevel: number,
  levelInfo: ILevelInfo[],
): ILevelInfo | undefined {
  const descSortedLevelInfo = levelInfo.sort((a, b) => a.level - b.level);

  const nextLevelToGain = descSortedLevelInfo.find(
    info => currentLevel < info.level,
  );

  return nextLevelToGain;
}
