import React from 'react';

// Components
import Rank from '../../../../components/Rank';

// Styles
import { FeedText } from '../styles';

// Types
import { FeedProps } from '../types';

const AchievementFeed: React.FC<FeedProps> = ({ item }) => {
  return (
    <FeedText.Text>
      <Rank player={item.player} />{' '}
      <FeedText.Name>
        {item.player.user.firstname}
        {item.player.user.lastname && ` ${item.player.user.lastname}`}
      </FeedText.Name>{' '}
      desbloqueou a conquista{' '}
      <FeedText.Activity>{item.achievement?.name}</FeedText.Activity>
      {item.achievement?.title?.name && (
        <>
          , recebendo o título{' '}
          <FeedText.Bold>{item.achievement.title.name}</FeedText.Bold>
        </>
      )}
      !
    </FeedText.Text>
  );
};

export default AchievementFeed;
