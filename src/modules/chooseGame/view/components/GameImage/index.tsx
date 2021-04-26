import React from 'react';

// Components
import { Image, ImageStyle, StyleProp } from 'react-native';

// Types
import IGame from 'shared/entities/IGame';

interface GameImageProps {
  game: IGame;
  style?: StyleProp<ImageStyle>;
}

const GameImage: React.FC<GameImageProps> = ({ game, style }) => {
  return (
    <Image
      style={style}
      source={
        game.image_url
          ? {
              uri: game.image_url,
            }
          : require('assets/img/games/placeholder.png')
      }
    />
  );
};

export default GameImage;
