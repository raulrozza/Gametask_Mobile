import React from 'react';

// Components
import { Image } from 'react-native';

// Types
import { AchievementImageProps } from './types';

const AchievementImage: React.FC<AchievementImageProps> = ({
  achievement,
  style,
}) => {
  return (
    <Image
      style={style}
      source={
        achievement.image
          ? {
              uri: achievement.image_url,
            }
          : require('../../assets/img/achievements/placeholder.png')
      }
    />
  );
};

export default AchievementImage;
