import React from 'react';


import { Image, ImageStyle, StyleProp } from 'react-native';

interface AchievementImageProps {
  image?: string;
  style?: StyleProp<ImageStyle>;
}

const AchievementImage: React.FC<AchievementImageProps> = ({
  image,
  style,
}) => {
  return (
    <Image
      style={style}
      source={
        image
          ? {
              uri: image,
            }
          : require('assets/img/achievements/placeholder.png')
      }
    />
  );
};

export default AchievementImage;
