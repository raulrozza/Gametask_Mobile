import React, { useCallback, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';

import { useFocusEffect } from '@react-navigation/core';

import useGetAchievementsController from 'modules/selectedGame/infra/controllers/useGetAchievementsController';
import { usePlayerProfileContext } from 'modules/selectedGame/view/contexts';

import AchievementCard from '../AchievementCard';
import { addObtainedFieldToAchievements } from './helpers';
import { Container, Title } from './styles';

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
