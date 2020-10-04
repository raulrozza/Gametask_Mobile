import React from 'react';

// Components
import FeedItem from './FeedItem';
import EmptyList from './EmptyList';
import RefreshControl from '../../../components/RefreshControl';

// Hooks
import { useApiFetch } from '../../../hooks/api/useApiFetch';

// Libs
import { FlatList } from 'react-native-gesture-handler';

// Styles
import { Container } from './styles';

// Types
import { IFeedItem } from '../../../interfaces/api/FeedItem';

const Feed: React.FC = () => {
  const { data: feed, loading: refreshing, fetch } = useApiFetch<IFeedItem[]>(
    '/feed',
  );

  return (
    <Container>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetch} />
        }
        data={feed || []}
        keyExtractor={feedItem => feedItem._id}
        ListEmptyComponent={() => <EmptyList />}
        renderItem={({ item }) => <FeedItem item={item} />}
      />
    </Container>
  );
};

export default Feed;
