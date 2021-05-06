import React, { useMemo } from 'react';

// Components
import AchievementCard from './AchievementCard';

// Hooks
import { useApiFetch } from '../../../../../../hooks/api/useApiFetch';

// Styles
import { Container, Title } from './styles';

// Types
import { IAchievement } from '../../../../../../interfaces/api/Achievement';
import { AchievementListProps } from './types';

// Utils
import { addObtainedFieldToAchievements } from '../utils';

const AchievementList: React.FC<AchievementListProps> = ({ player }) => {
  const { data } = useApiFetch<IAchievement[]>('/achievement');

  const achievements = useMemo(
    () => addObtainedFieldToAchievements(data, player),
    [data],
  );

  if (achievements.length <= 0) return null;

  return (
    <Container>
      <Title>Conquistas</Title>
      {achievements.map(achievement => (
        <AchievementCard key={achievement._id} achievement={achievement} />
      ))}
    </Container>
  );
};

export default AchievementList;
