import React, { useCallback } from 'react';

// Components
import { FlatList } from 'react-native-gesture-handler';
import { EmptyList, RankingPosition } from './components';

// Hooks
import useGetCurrentLeaderboardController from 'modules/selectedGame/infra/controllers/useGetCurrentLeaderboardController';

// Styles
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

  return (
    <Container>
      <FlatList
        refreshing={loading}
        style={{ width: '100%' }}
        contentContainerStyle={{
          width: '100%',
        }}
        data={leaderboard?.position}
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
