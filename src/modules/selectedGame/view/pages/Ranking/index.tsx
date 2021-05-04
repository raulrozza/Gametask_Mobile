import React from 'react';

// Components
import { FlatList } from 'react-native-gesture-handler';
import { EmptyList, RankingPosition } from './components';

// Hooks
import useGetCurrentLeaderboardController from 'modules/selectedGame/infra/controllers/useGetCurrentLeaderboardController';

// Styles
import { Container } from './styles';

const Ranking: React.FC = () => {
  const { loading, leaderboard } = useGetCurrentLeaderboardController();

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
