import React, { useCallback, useMemo } from 'react';


import { FlatList } from 'react-native-gesture-handler';
import { EmptyList, RankingPosition } from './components';


import useGetCurrentLeaderboardController from 'modules/selectedGame/infra/controllers/useGetCurrentLeaderboardController';


import { Container } from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Ranking: React.FC = () => {
  const {
    loading,
    leaderboard,
    getLeaderboard,
  } = useGetCurrentLeaderboardController();

  useFocusEffect(
    useCallback(() => {
      getLeaderboard();
    }, [getLeaderboard]),
  );

  const orderedPositions = useMemo(
    () => leaderboard?.position.sort((a, b) => b.experience - a.experience),
    [leaderboard],
  );

  return (
    <Container>
      <FlatList
        refreshing={loading}
        style={{ width: '100%' }}
        contentContainerStyle={{
          width: '100%',
        }}
        data={orderedPositions}
        keyExtractor={item => item.player.id}
        ListEmptyComponent={() => <EmptyList />}
        renderItem={({ item, index }) => (
          <RankingPosition item={item} index={index} />
        )}
      />
    </Container>
  );
};

export default Ranking;
