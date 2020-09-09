import React, { useState, useEffect, useCallback } from 'react';
import { RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// Contexts
import { getTextColor } from '../../../contexts/Theme';

// Services
import api from '../../../services/api';

// Styles
import Rank from '../../../styles/Rank';
import { Container, FeedItem, FeedText } from './styles';
import { withTheme } from 'styled-components';

// Types
import { IFeed } from '../types';
import { IThemedComponent } from 'theme';
import { themeProps } from '../../../modules/PropTypes';

// Utils
import showDate from '../../../utils/showDate';
import handleApiErrors from '../../../utils/handleApiErrors';
import ActivityFeed from './ActivityFeed';

const Feed: React.FC<IThemedComponent> = ({ theme }) => {
  const [feed, setFeed] = useState<IFeed[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const updateFeed = useCallback(async () => {
    try {
      const response = await api.get('/feed');

      setFeed(response.data);
    } catch (error) {
      handleApiErrors(error);
    }
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    await updateFeed();

    setRefreshing(false);
  }, []);

  useEffect(() => {
    updateFeed();
  }, []);

  return (
    <Container>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme.secondary]}
            progressBackgroundColor={theme.primaryIntense}
          />
        }
        data={feed}
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

              <FeedItem.Info>
                {(() => {
                  switch (item.type) {
                    case 'activity':
                      return <ActivityFeed item={item} />;

                    case 'level':
                      return (
                        <FeedItem.Row>
                          {item.player.rank && (
                            <Rank
                              background={item.player.rank.color}
                              text={getTextColor(item.player.rank.color)}
                            >
                              {item.player.rank.tag}
                            </Rank>
                          )}

                          <FeedText.Name>
                            {item.player.user.firstname}
                            {item.player.user.lastname &&
                              ` ${item.player.user.lastname}`}
                          </FeedText.Name>

                          <FeedText.Text> atingiu o </FeedText.Text>

                          {item.level?.title ? (
                            <>
                              <FeedText.Text>nível de </FeedText.Text>
                              <FeedText.Activity>
                                {item.level.title}
                              </FeedText.Activity>
                              <FeedText.Text>!</FeedText.Text>
                            </>
                          ) : (
                            <>
                              <FeedText.Activity>
                                {item.level?.level}º nível
                              </FeedText.Activity>
                              <FeedText.Text>!</FeedText.Text>
                            </>
                          )}
                        </FeedItem.Row>
                      );

                    case 'rank':
                      return (
                        <FeedItem.Row>
                          <FeedText.Name>
                            {item.player.user.firstname}
                            {item.player.user.lastname &&
                              ` ${item.player.user.lastname}`}
                          </FeedText.Name>

                          <FeedText.Text> conseguiu a patente </FeedText.Text>

                          <Rank
                            background={
                              item.rank?.color || theme.primaryContrast
                            }
                            text={getTextColor(
                              item.rank?.color || theme.primary,
                            )}
                          >
                            {item.rank?.tag}
                          </Rank>

                          <FeedText.Text>!</FeedText.Text>
                        </FeedItem.Row>
                      );
                    default:
                      return <></>;
                  }
                })()}
              </FeedItem.Info>
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

Feed.propTypes = {
  theme: themeProps.isRequired,
};

export default withTheme(Feed);
