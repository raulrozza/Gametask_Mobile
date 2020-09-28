import { RouteProp } from '@react-navigation/native';
import { IInvitationData } from '../../interfaces/api/InvitationData';

type ParamList = {
  GameInvite: {
    inviteData: IInvitationData;
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
