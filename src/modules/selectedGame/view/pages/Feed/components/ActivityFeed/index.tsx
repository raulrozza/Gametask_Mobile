import React from 'react';
import IFeedPost from 'modules/selectedGame/entities/IFeedPost';
import FeedText from '../FeedText';
import RankTag from '../RankTag';

interface ActivityFeedProps {
  post: IFeedPost;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ post }) => (
  <FeedText.Text>
    <RankTag rank={post.player.rank} />{' '}
    <FeedText.Name>
      {post.player.user.firstname}
      {post.player.user.lastname && ` ${post.player.user.lastname}`}
    </FeedText.Name>{' '}
    ganhou <FeedText.Bold>{post.activity?.experience} XP</FeedText.Bold> por{' '}
    <FeedText.Activity>{post.activity?.name}</FeedText.Activity>!
  </FeedText.Text>
);

export default ActivityFeed;
