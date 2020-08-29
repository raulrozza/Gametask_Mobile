import { RouteProp } from '@react-navigation/native';

type ParamList = {
  Lobby: {
    newGame?: string;
  };
};

export type ILobbyRoute = RouteProp<ParamList, 'Lobby'>;

export interface IModalContent {
  closeModal: () => void;
}
