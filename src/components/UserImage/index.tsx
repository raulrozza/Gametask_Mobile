import React from 'react';

// Components
import { Image } from 'react-native';

// Types
import { UserImageProps } from './types';

const UserImage: React.FC<UserImageProps> = ({ user, style }) => {
  return (
    <Image
      style={style}
      source={
        user.image
          ? {
              uri: user.profile_url,
            }
          : require('../../assets/img/users/placeholder.png')
      }
    />
  );
};

export default UserImage;
