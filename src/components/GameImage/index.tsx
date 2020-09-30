import React from 'react';

// Components
import { Image } from 'react-native';

// Types
import { GameImageProps } from './types';

const GameImage: React.FC<GameImageProps> = ({ game, style }) => {
  return (
    <Image
      style={style}
      source={
        game.image
          ? {
              uri: game.image_url,
            }
          : require('../../assets/img/games/placeholder.png')
      }
    />
  );
};

export default GameImage;
