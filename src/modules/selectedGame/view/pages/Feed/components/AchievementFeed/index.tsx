import IFeedPost from 'modules/selectedGame/entities/IFeedPost';
import React from 'react';

// Components
import { FeedText, RankTag } from '../';

interface FeedProps {
  post: IFeedPost;
}

const AchievementFeed: React.FC<FeedProps> = ({ post }) => (
  <FeedText.Text>
    <RankTag rank={post.player.rank} />{' '}
    <FeedText.Name>
      {post.player.user.firstname}
      {post.player.user.lastname && ` ${post.player.user.lastname}`}
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
