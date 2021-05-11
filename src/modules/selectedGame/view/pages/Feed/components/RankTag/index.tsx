import React from 'react';

// Components
import { RankChip } from 'modules/selectedGame/view/components';

// Entities
import IRank from 'shared/entities/IRank';

// Helpers
import { getTextColor } from 'shared/view/helpers';

interface RankTagProps {
  rank?: IRank;
}

const RankTag: React.FC<RankTagProps> = ({ rank }) => {
  if (rank)
    return (
      <RankChip backgroundColor={rank.color} color={getTextColor(rank.color)}>
        {' '}
        {rank.tag}{' '}
      </RankChip>
    );

  return null;
};

export default RankTag;
