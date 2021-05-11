import React from 'react';

// Components
import { EmptyList, FeedPost } from './components';
import { RefreshControl } from 'shared/view/components';

// Hooks
import useGetFeedPostsController from 'modules/selectedGame/infra/controllers/useGetFeedPostsController';

// Libs
import { FlatList } from 'react-native-gesture-handler';

// Styles
import { Container } from './styles';

const Feed: React.FC = () => {
  const { loading, posts, getPosts } = useGetFeedPostsController();

  return (
    <Container>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getPosts} />
        }
        data={posts}
        keyExtractor={post => post.id}
        ListEmptyComponent={() => <EmptyList />}
        renderItem={({ item }) => <FeedPost post={item} />}
      />
    </Container>
  );
};

export default Feed;
