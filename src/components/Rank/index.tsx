import React from 'react';

// Contexts
import { getTextColor } from '../../contexts/Theme';

// Styles
import StyledRank from '../../styles/Rank';

// Types
import { RankProps } from './types';

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
