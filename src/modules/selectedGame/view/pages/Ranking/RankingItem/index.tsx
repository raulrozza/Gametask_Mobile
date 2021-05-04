import React from 'react';

// Styles
import { Container, Icon, Image, Text } from './styles';
import Rank from '../../../../styles/Rank';

// Types
import { RankingItemProps } from './types';

// Utils
import { getTextColor } from '../../../../utils/theme/getTextColor';

const RankingItem: React.FC<RankingItemProps> = ({ item, index }) => (
  <Container>
    <Image user={item.player.user} />

    {index < 3 ? (
      <Icon name="trophy" index={index} />
    ) : (
      <Text.Position>{index + 1}</Text.Position>
    )}

    <Text.Bold>{item.currentExperience} XP</Text.Bold>

    {item.player.rank && (
      <Rank
        background={item.player.rank.color}
        text={getTextColor(item.player.rank.color)}
      >
        {item.player.rank.tag}
      </Rank>
    )}

    <Text.Name>
      {item.player.user.firstname}
      {item.player.user.lastname && ` ${item.player.user.lastname}`}
      {item.player.currentTitle && `, ${item.player.currentTitle.name}`}
    </Text.Name>
  </Container>
);

export default RankingItem;
