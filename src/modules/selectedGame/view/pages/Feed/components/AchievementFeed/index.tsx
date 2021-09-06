import React from 'react';

import IFeedPost from 'modules/selectedGame/domain/entities/IFeedPost';

import FeedText from '../FeedText';
import RankTag from '../RankTag';

interface AchievementFeedProps {
  post: IFeedPost;
}

const AchievementFeed: React.FC<AchievementFeedProps> = ({ post }) => (
  <FeedText.Text>
    <RankTag rank={post.player.rank} />{' '}
    <FeedText.Name>
      {post.player.user.firstname}
      {post.player.user.lastname && ` ${post.player.user.lastname}`}
      {post.player.currentTitle && `, ${post.player.currentTitle?.name}`}
    </FeedText.Name>{' '}
    desbloqueou a conquista{' '}
    <FeedText.Activity>{post.achievement?.name}</FeedText.Activity>
    {post.achievement?.title?.name && (
      <>
        , recebendo o título{' '}
        <FeedText.Bold>{post.achievement.title.name}</FeedText.Bold>
      </>
    )}
    !
  </FeedText.Text>
);

export default AchievementFeed;
