import ILevelInfo from 'shared/entities/ILevelInfo';

export default function getPlayerNextLevel(
  currentLevel: number,
  levelInfo: ILevelInfo[],
): ILevelInfo | undefined {
  const descSortedLevelInfo = levelInfo.sort((a, b) => a.level - b.level);

  const nextLevelToGain = descSortedLevelInfo.find(
    info => currentLevel < info.level,
  );

  return nextLevelToGain;
}
