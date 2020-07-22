import React, { useState, useEffect, useCallback } from 'react';
import { RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// Contexts
import { useGame } from '../../contexts/Game';
import { useTheme } from '../../contexts/Theme';

// Types
import { IUser } from 'authorization';
import { IActivity, IAchievement, ILevelInfo, IRank } from 'game';

// Services
import api from '../../services/api';

// Utils
import getUserRanks from '../../utils/getUserRank';
import showDate from '../../utils/showDate';

import { Container, FeedItem, FeedText } from './styles';

interface IFeed {
  _id: string;
  user: IUser;
  type: 'achievement' | 'activity' | 'level' | 'rank';
  activity?: IActivity;
  achievement?: IAchievement;
  level?: ILevelInfo;
  rank?: IRank;
  date: Date;
}

const Feed: React.FC = () => {
  const [feed, setFeed] = useState<IFeed[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  // Hooks
  const { theme, getTextColor } = useTheme();
  const {
    game: { ranks },
  } = useGame();

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
    <Container theme={theme}>
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
          <FeedItem.Container theme={theme}>
            <FeedItem.Content>
              <FeedItem.Image
                source={
                  item.user.image
                    ? {
                        uri: item.user.profile_url,
                      }
                    : require('../../assets/img/users/placeholder.png')
                }
              />
              <FeedItem.Info>
                {(() => {
                  const userRank = getUserRanks(ranks, item.user);

                  switch (item.type) {
                    case 'activity':
                      return (
                        <FeedItem.Row>
                          {userRank && (
                            <FeedText.Rank
                              background={userRank.color}
                              text={getTextColor(userRank.color)}
                            >
                              {userRank.tag}
                            </FeedText.Rank>
                          )}

                          <FeedText.Name theme={theme}>
                            {item.user.firstname}
                            {item.user.lastname && ` ${item.user.lastname}`}
                          </FeedText.Name>

                          <FeedText.Text theme={theme}> ganhou </FeedText.Text>

                          <FeedText.Bold theme={theme}>
                            {item.activity?.experience} XP
                          </FeedText.Bold>

                          <FeedText.Text theme={theme}> por </FeedText.Text>

                          <FeedText.Activity theme={theme}>
                            {item.activity?.name}
                          </FeedText.Activity>

                          <FeedText.Text theme={theme}>!</FeedText.Text>
                        </FeedItem.Row>
                      );
                    case 'level':
                      return (
                        <FeedItem.Row>
                          {userRank && (
                            <FeedText.Rank
                              background={userRank.color}
                              text={getTextColor(userRank.color)}
                            >
                              {userRank.tag}
                            </FeedText.Rank>
                          )}

                          <FeedText.Name theme={theme}>
                            {item.user.firstname}
                            {item.user.lastname && ` ${item.user.lastname}`}
                          </FeedText.Name>

                          <FeedText.Text theme={theme}>
                            {' '}
                            atingiu o{' '}
                          </FeedText.Text>

                          {item.level?.title ? (
                            <>
                              <FeedText.Text theme={theme}>
                                nível de{' '}
                              </FeedText.Text>
                              <FeedText.Activity theme={theme}>
                                {item.level.title}
                              </FeedText.Activity>
                              <FeedText.Text theme={theme}>!</FeedText.Text>
                            </>
                          ) : (
                            <>
                              <FeedText.Activity theme={theme}>
                                {item.level?.level}º nível
                              </FeedText.Activity>
                              <FeedText.Text theme={theme}>!</FeedText.Text>
                            </>
                          )}
                        </FeedItem.Row>
                      );
                    case 'rank':
                      return (
                        <FeedItem.Row>
                          <FeedText.Name theme={theme}>
                            {item.user.firstname}
                            {item.user.lastname && ` ${item.user.lastname}`}
                          </FeedText.Name>

                          <FeedText.Text theme={theme}>
                            {' '}
                            conseguiu a patente{' '}
                          </FeedText.Text>

                          <FeedText.Rank
                            background={
                              item.rank?.color || theme.primaryContrast
                            }
                            text={getTextColor(
                              item.rank?.color || theme.primary,
                            )}
                          >
                            {item.rank?.tag}
                          </FeedText.Rank>

                          <FeedText.Text theme={theme}>!</FeedText.Text>
                        </FeedItem.Row>
                      );
                    default:
                      return <></>;
                  }
                })()}
              </FeedItem.Info>
            </FeedItem.Content>
            <FeedItem.Meta>
              <FeedItem.MetaText theme={theme}>
                {showDate(new Date(item.date))}
              </FeedItem.MetaText>
            </FeedItem.Meta>
          </FeedItem.Container>
        )}
      />
    </Container>
  );
};

export default Feed;
