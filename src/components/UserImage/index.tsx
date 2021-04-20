import React from 'react';

// Components
import { Image } from 'react-native';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';

// Types
import { UserImageProps } from './types';

const UserImage: React.FC<UserImageProps> = ({ style }) => {
  const { userData } = useSessionContext();

  return (
    <Image
      style={style}
      source={
        userData.profile_img
          ? {
              uri: userData.profile_img,
            }
          : require('../../assets/img/users/placeholder.png')
      }
    />
  );
};

export default UserImage;
