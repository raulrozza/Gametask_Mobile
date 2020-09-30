import React from 'react';

// Styles
import { withTheme } from 'styled-components';
import Rank from '../../../../styles/Rank';
import { FeedText } from '../styles';

// Types
import { FeedProps } from '../types';
import { IThemedComponent } from '../../../../interfaces/theme/ThemedComponent';

// Utils
import { getTextColor } from '../../../../utils/theme/getTextColor';

const RankFeed: React.FC<FeedProps & IThemedComponent> = ({ item, theme }) => {
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
