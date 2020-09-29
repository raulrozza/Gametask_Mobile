import { RouteProp } from '@react-navigation/native';

type ParamList = {
  Lobby: {
    newGame?: string;
  };
};

export type LobbyParams = RouteProp<ParamList, 'Lobby'>;
