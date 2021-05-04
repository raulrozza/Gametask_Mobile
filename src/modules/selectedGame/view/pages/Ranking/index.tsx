import React from 'react';

// Components
import EmptyList from './EmptyList';
import RankingItem from './RankingItem';

// Libs
import { FlatList } from 'react-native-gesture-handler';

// Styles
import { Container } from './styles';

const Ranking: React.FC = () => {
  return (
    <Container>
      {/* <FlatList
        style={{ width: '100%' }}
        contentContainerStyle={{
          width: '100%',
        }}
        data={game.weeklyRanking}
        keyExtractor={item =>
          typeof item.player === 'string' ? item.player : item.player._id
        }
        ListEmptyComponent={() => <EmptyList />}
        renderItem={({ item, index }) => (
          <RankingItem item={item} index={index} />
        )}
      /> */}
    </Container>
  );
};

export default Ranking;
