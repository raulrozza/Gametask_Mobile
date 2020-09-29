import React from 'react';

// Styles
import StyledRank from '../../styles/Rank';

// Types
import { RankProps } from './types';

// Utils
import { getTextColor } from '../../utils/theme/getTextColor';

const Rank: React.FC<RankProps> = ({ player }) => {
  if (player.rank)
    return (
      <StyledRank
        background={player.rank.color}
        text={getTextColor(player.rank.color)}
      >
        {' '}
        {player.rank.tag}{' '}
      </StyledRank>
    );

  return null;
};

export default Rank;
