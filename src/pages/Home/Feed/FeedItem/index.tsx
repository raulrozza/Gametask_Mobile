import React, { useMemo } from 'react';

// Components
import ActivityFeed from '../ActivityFeed';
import LevelUpFeed from '../LevelUpFeed';
import RankFeed from '../RankFeed';
import AchievementFeed from '../AchievementFeed';

// Styles
import { Container, Content, Image, Meta, Row } from './styles';

// Types
import { FeedItemProps } from './types';

// Utils
import showDate from '../../../../utils/showDate';

const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  const FeedTextContent = useMemo(() => {
    switch (item.type) {
      case 'activity':
        return ActivityFeed;

      case 'level':
        return LevelUpFeed;

      case 'rank':
        return RankFeed;

      case 'achievement':
        return AchievementFeed;

      default:
        return null;
    }
  }, [item]);

  return (
    <Container>
      <Content>
        <Image user={item.player.user} />

        <Row>{FeedTextContent && <FeedTextContent item={item} />}</Row>
      </Content>

      <Meta.Container>
        <Meta.Text>{showDate(new Date(item.date))}</Meta.Text>
      </Meta.Container>
    </Container>
  );
};

export default FeedItem;
