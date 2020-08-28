import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

// Contexts
import { useGame } from '../../../contexts/Game';
import { getTextColor } from '../../../contexts/Theme';

// Styles
import Rank from '../../../styles/Rank';
import { Container, RankingItem, RankingText } from './styles';

const Ranking: React.FC = () => {
  const { game } = useGame();

  return (
    <Container>
      <FlatList
        style={{ width: '100%' }}
        contentContainerStyle={{
          width: '100%',
        }}
        data={game.weeklyRanking}
        keyExtractor={item => item.player._id}
        ListEmptyComponent={() => (
          <RankingItem.Container>
            <RankingText.Empty>
              Opa... parece que não temos nenhum pontuador ainda. Que tal ser o
              primeiro?
            </RankingText.Empty>
          </RankingItem.Container>
        )}
        renderItem={({ item, index }) => (
          <RankingItem.Container>
            <RankingItem.Image
              source={
                item.player.user.image
                  ? {
                      uri: item.player.user.profile_url,
                    }
                  : require('../../../assets/img/users/placeholder.png')
              }
            />

            {index < 3 ? (
              <RankingText.Icon name="trophy" index={index} />
            ) : (
              <RankingText.Position>{index + 1}</RankingText.Position>
            )}

            <RankingText.Bold>{item.currentExperience} XP</RankingText.Bold>

            {item.player.rank && (
              <Rank
                background={item.player.rank.color}
                text={getTextColor(item.player.rank.color)}
              >
                {item.player.rank.tag}
              </Rank>
            )}

            <RankingText.Name>
              {item.player.user.firstname}
              {item.player.user.lastname && ` ${item.player.user.lastname}`}
            </RankingText.Name>
          </RankingItem.Container>
        )}
      />
    </Container>
  );
};

export default Ranking;