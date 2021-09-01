import React from 'react';

import { RankChip } from 'modules/selectedGame/view/components';
import IRank from 'shared/domain/entities/IRank';
import { getTextColor } from 'shared/view/helpers';

interface RankTagProps {
  rank?: IRank;
}

const RankTag: React.FC<RankTagProps> = ({ rank }) => {
  if (rank)
    return (
      <RankChip backgroundColor={rank.color} color={getTextColor(rank.color)}>
        {` ${rank.tag} `}
      </RankChip>
    );

  return null;
};

export default RankTag;
