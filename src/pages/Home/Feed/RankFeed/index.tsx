import React from 'react';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

// Styles
import Rank from '../../../../styles/Rank';
import { FeedText } from '../styles';

// Types
import { FeedProps } from '../types';

// Utils
import { getTextColor } from '../../../../utils/theme/getTextColor';

const RankFeed: React.FC<FeedProps> = ({ item }) => {
  const { theme } = useThemeContext();

  return (
    <FeedText.Text>
      <FeedText.Name>
        {item.player.user.firstname}
        {item.player.user.lastname && ` ${item.player.user.lastname}`}
      </FeedText.Name>

      <FeedText.Text> conseguiu a patente </FeedText.Text>

      <Rank
        background={item.rank?.color || theme.palette.primary.contrast}
        text={getTextColor(item.rank?.color || theme.palette.primary.main)}
      >
        {' '}
        {item.rank?.tag}{' '}
      </Rank>

      <FeedText.Text>!</FeedText.Text>
    </FeedText.Text>
  );
};

export default RankFeed;
