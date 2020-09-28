import React from 'react';

// Contexts
import { getTextColor } from '../../../../contexts/Theme';

// Styles
import { withTheme } from 'styled-components';
import Rank from '../../../../styles/Rank';
import { FeedText } from '../styles';

// Types
import { IFeedItem } from '../../types';
import { IThemedComponent } from 'theme';

const RankFeed: React.FC<IFeedItem & IThemedComponent> = ({ item, theme }) => {
  return (
    <FeedText.Text>
      <FeedText.Name>
        {item.player.user.firstname}
        {item.player.user.lastname && ` ${item.player.user.lastname}`}
      </FeedText.Name>

      <FeedText.Text> conseguiu a patente </FeedText.Text>

      <Rank
        background={item.rank?.color || theme.primaryContrast}
        text={getTextColor(item.rank?.color || theme.primary)}
      >
        {' '}
        {item.rank?.tag}{' '}
      </Rank>

      <FeedText.Text>!</FeedText.Text>
    </FeedText.Text>
  );
};

export default withTheme(RankFeed);
