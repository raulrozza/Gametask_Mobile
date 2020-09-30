import React from 'react';

// Components
import ActivityFeed from './ActivityFeed';
import LevelUpFeed from './LevelUpFeed';
import RankFeed from './RankFeed';
import AchievementFeed from './AchievementFeed';

// Hooks
import { useApiFetch } from '../../../hooks/api/useApiFetch';

// Libs
import { RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// Styles
import { Container, FeedItem, FeedText } from './styles';
import { withTheme } from 'styled-components';

// Types
import { IFeedItem } from '../../../interfaces/api/FeedItem';
import { IThemedComponent } from '../../../interfaces/theme/ThemedComponent';

// Utils
import showDate from '../../../utils/showDate';

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
        ListEmptyComponent={() => (
          <FeedItem.Container>
            <FeedText.Empty>
              Parece que ninguém realizou nenhuma atividade ainda...
            </FeedText.Empty>
          </FeedItem.Container>
        )}
        renderItem={({ item }) => (
          <FeedItem.Container>
            <FeedItem.Content>
              <FeedItem.Image
                source={
                  item.player.user.image
                    ? {
                        uri: item.player.user.profile_url,
                      }
                    : require('../../../assets/img/users/placeholder.png')
                }
              />

              <FeedItem.Row>
                {(() => {
                  switch (item.type) {
                    case 'activity':
                      return <ActivityFeed item={item} />;

                    case 'level':
                      return <LevelUpFeed item={item} />;

                    case 'rank':
                      return <RankFeed item={item} />;

                    case 'achievement':
                      return <AchievementFeed item={item} />;

                    default:
                      return <></>;
                  }
                })()}
              </FeedItem.Row>
            </FeedItem.Content>

            <FeedItem.Meta>
              <FeedItem.MetaText>
                {showDate(new Date(item.date))}
              </FeedItem.MetaText>
            </FeedItem.Meta>
          </FeedItem.Container>
        )}
      />
    </Container>
  );
};

export default withTheme(Feed);
