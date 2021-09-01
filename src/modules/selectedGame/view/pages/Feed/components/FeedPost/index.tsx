import React, { useMemo } from 'react';

import IFeedPost from 'modules/selectedGame/domain/entities/IFeedPost';
import { formatDate } from 'modules/selectedGame/view/helpers';

import AchievementFeed from '../AchievementFeed';
import ActivityFeed from '../ActivityFeed';
import LevelUpFeed from '../LevelUpFeed';
import RankFeed from '../RankFeed';
import { Container, Content, Image, Meta, Row } from './styles';

const FeedType = {
  achievement: AchievementFeed,
  activity: ActivityFeed,
  level: LevelUpFeed,
  rank: RankFeed,
};

interface FeedPostProps {
  post: IFeedPost;
}

const FeedItem: React.FC<FeedPostProps> = ({ post }) => {
  const FeedTextContent = useMemo(() => FeedType[post.type], [post]);

  return (
    <Container>
      <Content>
        <Image image={post.player.user.profile_url} />

        <Row>
          <FeedTextContent post={post} />
        </Row>
      </Content>

      <Meta.Container>
        <Meta.Text>{formatDate(post.date)}</Meta.Text>
      </Meta.Container>
    </Container>
  );
};

export default FeedItem;
