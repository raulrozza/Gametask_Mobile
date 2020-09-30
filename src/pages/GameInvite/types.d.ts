import { RouteProp } from '@react-navigation/native';
import { IGame } from '../../interfaces/api/Game';
import { IInvitationData } from '../../interfaces/api/InvitationData';

type ParamList = {
  GameInvite: {
    inviteData: IInvitationData;
    gameData: IGame;
  };
};

export type IGameInviteRoute = RouteProp<ParamList, 'GameInvite'>;
