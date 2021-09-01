import React from 'react';
import IFeedPost from 'modules/selectedGame/domain/entities/IFeedPost';
import { RankChip } from 'modules/selectedGame/view/components';
import FeedText from '../FeedText';
import { getTextColor } from 'shared/view/helpers';

interface RankFeedProps {
  post: IFeedPost;
}

const RankFeed: React.FC<RankFeedProps> = ({ post }) => (
  <FeedText.Text>
    <FeedText.Name>
      {post.player.user.firstname}
      {post.player.user.lastname && ` ${post.player.user.lastname}`}
    </FeedText.Name>

    <FeedText.Text> conseguiu a patente </FeedText.Text>

    <RankChip
      backgroundColor={post.rank?.color}
      color={getTextColor(post.rank?.color)}
    >
      {` ${post.rank?.tag} `}
    </RankChip>

    <FeedText.Text>!</FeedText.Text>
  </FeedText.Text>
);

export default RankFeed;
