import React, { useMemo } from 'react';

// Components
/* import ActivityFeed from '../ActivityFeed';
import LevelUpFeed from '../LevelUpFeed';
import RankFeed from '../RankFeed';
import AchievementFeed from '../AchievementFeed'; */

// Entities
import IFeedPost from 'modules/selectedGame/entities/IFeedPost';

// Styles
import { Container, Content, Image, Meta, Row } from './styles';
import { formatDate } from 'modules/selectedGame/view/helpers';

const FeedType = {
  activity: React.Fragment,
  achievement: React.Fragment,
  title: React.Fragment,
  rank: React.Fragment,
  level: React.Fragment,
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
          <FeedTextContent /* item={post} */ />
        </Row>
      </Content>

      <Meta.Container>
        <Meta.Text>{formatDate(post.date)}</Meta.Text>
      </Meta.Container>
    </Container>
  );
};

export default FeedItem;
