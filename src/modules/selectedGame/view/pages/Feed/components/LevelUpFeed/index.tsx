import IFeedPost from 'modules/selectedGame/domain/entities/IFeedPost';
import FeedText from '../FeedText';
import RankTag from '../RankTag';
import React from 'react';

interface LevelUpFeedProps {
  post: IFeedPost;
}

const LevelUpFeed: React.FC<LevelUpFeedProps> = ({ post }) => (
  <FeedText.Text>
    <RankTag rank={post.player.rank} />{' '}
    <FeedText.Name>
      {post.player.user.firstname}
      {post.player.user.lastname && ` ${post.player.user.lastname}`}
    </FeedText.Name>{' '}
    atingiu o{' '}
    {post.level.title ? (
      <>
        nível <FeedText.Activity>{post.level.title}</FeedText.Activity>!
      </>
    ) : (
      <>
        <FeedText.Activity>{post.level.level}º nível</FeedText.Activity>!
      </>
    )}
  </FeedText.Text>
);

export default LevelUpFeed;
