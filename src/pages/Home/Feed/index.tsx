import React, { useState, useEffect, useCallback } from 'react';
import { RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// Contexts
import { getTextColor } from '../../../contexts/Theme';

// Types
import { IFeed } from '../types';
import { IThemedComponent } from 'theme';
import { themeProps } from '../../../modules/PropTypes';

// Services
import api from '../../../services/api';

// Utils
import showDate from '../../../utils/showDate';

// Styles
import Rank from '../../../styles/Rank';
import { Container, FeedItem, FeedText } from './styles';

const Feed: React.FC<IThemedComponent> = ({ theme }) => {
  const [feed, setFeed] = useState<IFeed[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const updateFeed = async () => {
    try {
      const response = await api.get('/feed');

      setFeed(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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

                          <FeedText.Text> ganhou </FeedText.Text>

                          <FeedText.Bold>
                            {item.activity?.experience} XP
                          </FeedText.Bold>

                          <FeedText.Text> por </FeedText.Text>

                          <FeedText.Activity>
                            {item.activity?.name}
                          </FeedText.Activity>

                          <FeedText.Text>!</FeedText.Text>
                        </FeedItem.Row>
                      );

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
  theme: themeProps,
};

export default Feed;
