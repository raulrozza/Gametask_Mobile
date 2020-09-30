// Types
import { DefaultTheme } from 'styled-components';
import { IAchievement } from '../../../interfaces/api/Achievement';
import { ILevelInfo } from '../../../interfaces/api/LevelInfo';
import { IPlayer } from '../../../interfaces/api/Player';
import { IRank } from '../../../interfaces/api/Rank';

// Utils
import { fillTheme } from '../../../utils/theme/fillTheme';

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

export function getRankTheme(
  defaultTheme: DefaultTheme,
  rank?: IRank,
): DefaultTheme {
  if (!rank || !rank.color) return defaultTheme;

  const rankTheme = fillTheme('primary', rank.color);

  return rankTheme;
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
