import React, { useState, useEffect } from 'react';

// Types
import { IUser } from 'authorization';
import { IActivity, IAchievement, ILevelInfo, IRank } from 'game';

// Services
import api from '../../services/api';

import { Container } from './styles';

interface IFeed {
  user: IUser;
  type: 'achievement' | 'activity' | 'level' | 'rank';
  activity?: IActivity;
  achievement?: IAchievement;
  level?: ILevelInfo;
  rank?: IRank;
  date: Date;
}

const Feed: React.FC = () => {
  const [feed, setFeed] = useState<IFeed[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/feed');

        setFeed(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <Container />;
};

export default Feed;
