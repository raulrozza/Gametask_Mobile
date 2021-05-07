import React, { useMemo } from 'react';

// Components
import AchievementCard from '../AchievementCard';

// Helpers
import { addObtainedFieldToAchievements } from './helpers';

// Hooks
import usePlayerProfileContext from 'modules/selectedGame/container/contexts/PlayerProfileContext/contexts/usePlayerProfileContext';

// Styles
import { Container, Title } from './styles';

const AchievementList: React.FC = () => {
  const { player } = usePlayerProfileContext();

  const achievementsWithObtainedFlag = useMemo(
    () => addObtainedFieldToAchievements([], player),
    [player],
  );

  if (achievementsWithObtainedFlag.length <= 0) return null;

  return (
    <Container>
      <Title>Conquistas</Title>

      {achievementsWithObtainedFlag.map(achievement => (
        <AchievementCard key={achievement.id} achievement={achievement} />
      ))}
    </Container>
  );
};

export default AchievementList;
