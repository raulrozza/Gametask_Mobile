import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface UserImageProps {
  image?: string;
  style?: StyleProp<ImageStyle>;
}

const UserImage: React.FC<UserImageProps> = ({ image, style }) => (
  <Image
    style={style}
    source={
      image
        ? {
            uri: image,
          }
        : require('assets/img/users/placeholder.png')
    }
  />
);

export default UserImage;
