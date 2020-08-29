import { RouteProp } from '@react-navigation/native';
import { IInviteData } from 'game';

type ParamList = {
  GameInvite: {
    inviteData: IInviteData;
    gameData: {
      _id: string;
      description: string;
      image?: string;
      image_url: string;
      name: string;
      theme: {
        primary: string;
        secondary: string;
      };
    };
  };
};

export type IGameInviteRoute = RouteProp<ParamList, 'GameInvite'>;
