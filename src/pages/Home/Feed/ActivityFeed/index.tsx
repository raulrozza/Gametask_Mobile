import React from 'react';

// Contexts
import { getTextColor } from '../../../../contexts/Theme';

// Styles
import Rank from '../../../../styles/Rank';
import { FeedText } from '../styles';

// Types
import { IFeedItem } from '../../types';

const ActivityFeed: React.FC<IFeedItem> = ({ item }) => {
  return (
    <FeedText.Text>
      {item.player.rank && (
        <Rank
          background={item.player.rank.color}
          text={getTextColor(item.player.rank.color)}
        >
          {' '}
          {item.player.rank.tag}{' '}
        </Rank>
      )}{' '}
      <FeedText.Name>
        {item.player.user.firstname}
        {item.player.user.lastname && ` ${item.player.user.lastname}`}
      </FeedText.Name>{' '}
      ganhou <FeedText.Bold>{item.activity?.experience} XP</FeedText.Bold> por{' '}
      <FeedText.Activity>{item.activity?.name}</FeedText.Activity>!
    </FeedText.Text>
  );
};

export default ActivityFeed;
