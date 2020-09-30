import React from 'react';

// Components
import FeedItem from './FeedItem';
import EmptyList from './EmptyList';

// Hooks
import { useApiFetch } from '../../../hooks/api/useApiFetch';

// Libs
import { RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// Styles
import { Container } from './styles';
import { withTheme } from 'styled-components';

// Types
import { IFeedItem } from '../../../interfaces/api/FeedItem';
import { IThemedComponent } from '../../../interfaces/theme/ThemedComponent';

const Feed: React.FC<IThemedComponent> = ({ theme }) => {
  const { data: feed, loading: refreshing, fetch } = useApiFetch<IFeedItem[]>(
    '/feed',
  );

  return (
    <Container>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetch}
            colors={[theme.secondary]}
            progressBackgroundColor={theme.primaryIntense}
          />
        }
        data={feed || []}
        keyExtractor={feedItem => feedItem._id}
        ListEmptyComponent={() => <EmptyList />}
        renderItem={({ item }) => <FeedItem item={item} />}
      />
    </Container>
  );
};

export default withTheme(Feed);
