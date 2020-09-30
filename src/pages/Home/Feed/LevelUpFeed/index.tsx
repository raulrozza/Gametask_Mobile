import React from 'react';

// Components
import Rank from '../../../../components/Rank';

// Styles
import { FeedText } from '../styles';

// Types
import { FeedProps } from '../types';

const LevelUpFeed: React.FC<FeedProps> = ({ item }) => (
  <FeedText.Text>
    <Rank player={item.player} />{' '}
    <FeedText.Name>
      {item.player.user.firstname}
      {item.player.user.lastname && ` ${item.player.user.lastname}`}
    </FeedText.Name>{' '}
    atingiu o{' '}
    {item.level?.title ? (
      <>
        nível <FeedText.Activity>{item.level.title}</FeedText.Activity>!
      </>
    ) : (
      <>
        <FeedText.Activity>{item.level?.level}º nível</FeedText.Activity>!
      </>
    )}
  </FeedText.Text>
);

export default LevelUpFeed;
