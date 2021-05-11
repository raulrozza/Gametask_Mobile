import React from 'react';

// Components
import { Image, ImageStyle, StyleProp } from 'react-native';

interface GameImageProps {
  url?: string;
  style?: StyleProp<ImageStyle>;
}

const GameImage: React.FC<GameImageProps> = ({ url, style }) => {
  return (
    <Image
      style={style}
      source={
        url
          ? {
              uri: url,
            }
          : require('assets/img/games/placeholder.png')
      }
    />
  );
};

export default GameImage;
