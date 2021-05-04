import React from 'react';

import { Container, Icon, Image, Text } from './styles';

import { IPosition } from 'modules/selectedGame/entities/ILeaderboard';
import { RankChip } from 'modules/selectedGame/view/components';
import { getTextColor } from 'shared/view/helpers';

interface RankingPositionProps {
  item: IPosition;
  index: number;
}

const RankingPosition: React.FC<RankingPositionProps> = ({ item, index }) => (
  <Container>
    <Image image={item.player.user.profile_url} />

    {index < 3 ? (
      <Icon name="trophy" index={index} />
    ) : (
      <Text.Position>{index + 1}</Text.Position>
    )}

    <Text.Bold>{item.experience} XP</Text.Bold>

    {item.player.rank && (
      <RankChip
        backgroundColor={item.player.rank.color}
        color={getTextColor(item.player.rank.color)}
      >
        {item.player.rank.tag}
      </RankChip>
    )}

    <Text.Name>
      {item.player.user.firstname}
      {item.player.user.lastname && ` ${item.player.user.lastname}`}
      {item.player.currentTitle && `, ${item.player.currentTitle.name}`}
    </Text.Name>
  </Container>
);

export default RankingPosition;
