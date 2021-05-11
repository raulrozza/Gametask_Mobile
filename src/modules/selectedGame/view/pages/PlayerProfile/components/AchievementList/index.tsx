import React, { useCallback, useMemo } from 'react';

// Components
import { Container, Title } from './styles';
import { ActivityIndicator } from 'react-native';
import AchievementCard from '../AchievementCard';

// Helpers
import { addObtainedFieldToAchievements } from './helpers';

// Hooks
import useGetAchievementsController from 'modules/selectedGame/infra/controllers/useGetAchievementsController';
import usePlayerProfileContext from 'modules/selectedGame/container/contexts/PlayerProfileContext/contexts/usePlayerProfileContext';
import { useFocusEffect } from '@react-navigation/core';

const AchievementList: React.FC = () => {
  const { player } = usePlayerProfileContext();
  const {
    loading,
    achievements,
    getAchievements,
  } = useGetAchievementsController();

  const achievementsWithObtainedFlag = useMemo(
    () => addObtainedFieldToAchievements(achievements, player),
    [player, achievements],
  );

  useFocusEffect(
    useCallback(() => {
      getAchievements();
    }, [getAchievements]),
  );

  if (loading) return <ActivityIndicator />;

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
