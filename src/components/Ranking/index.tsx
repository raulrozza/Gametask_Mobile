import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

// Contexts
import { useGame } from '../../contexts/Game';
import { useTheme } from '../../contexts/Theme';

// Utils
import getUserRanks from '../../utils/getUserRank';

import { Container, RankingItem, RankingText } from './styles';

const Ranking: React.FC = () => {
  const { game } = useGame();
  const { theme, getTextColor } = useTheme();

  return (
    <Container theme={theme}>
      <FlatList
        style={{ width: '100%' }}
        contentContainerStyle={{
          width: '100%',
        }}
        data={game.weeklyRanking}
        keyExtractor={item => item.user._id}
        renderItem={({ item, index }) => {
          const userRank = getUserRanks(game.ranks, item.user);

          return (
            <RankingItem.Container theme={theme}>
              <RankingItem.Image
                source={
                  item.user.image
                    ? {
                        uri: item.user.profile_url,
                      }
                    : require('../../assets/img/users/placeholder.png')
                }
              />

              {index < 3 ? (
                <RankingText.Icon name="trophy" index={index} />
              ) : (
                <RankingText.Position>{index + 1}</RankingText.Position>
              )}

              <RankingText.Bold theme={theme}>
                {item.currentExperience} XP
              </RankingText.Bold>

              {userRank && (
                <RankingText.Rank
                  background={userRank.color}
                  text={getTextColor(userRank.color)}
                >
                  {userRank.tag}
                </RankingText.Rank>
              )}

              <RankingText.Name theme={theme}>
                {item.user.firstname}
                {item.user.lastname && ` ${item.user.lastname}`}
              </RankingText.Name>
            </RankingItem.Container>
          );
        }}
      />
    </Container>
  );
};

export default Ranking;
