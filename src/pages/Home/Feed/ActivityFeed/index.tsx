import React from 'react';

// Components
import Rank from '../../../../components/Rank';

// Styles
import { FeedText } from '../styles';

// Types
import { FeedProps } from '../types';

const ActivityFeed: React.FC<FeedProps> = ({ item }) => {
  return (
    <FeedText.Text>
      <Rank player={item.player} />{' '}
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
