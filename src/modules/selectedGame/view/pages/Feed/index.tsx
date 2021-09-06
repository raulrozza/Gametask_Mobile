import React, { useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import useGetFeedPostsController from 'modules/selectedGame/infra/controllers/useGetFeedPostsController';
import { RefreshControl } from 'shared/view/components';

import { EmptyList, FeedPost } from './components';
import { Container } from './styles';

const Feed: React.FC = () => {
  const { loading, posts, getPosts } = useGetFeedPostsController();

  useFocusEffect(
    useCallback(() => {
      getPosts();
    }, [getPosts]),
  );

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
