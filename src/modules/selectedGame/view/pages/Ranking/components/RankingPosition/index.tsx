import React from 'react';

import { IPosition } from 'modules/selectedGame/domain/entities/ILeaderboard';
import { RankChip } from 'modules/selectedGame/view/components';
import { getTextColor } from 'shared/view/helpers';

import { Container, Icon, Image, PositionBlock, Text } from './styles';

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
      <PositionBlock>
        <Text.Position>{`${index + 1}º`}</Text.Position>
      </PositionBlock>
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
