import React, { useState } from 'react';
import { Modal } from 'react-native';

import { useRoute, RouteProp } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import useFetchPlayersController from 'modules/chooseGame/infra/controllers/useFetchPlayersController';
import { RefreshControl } from 'shared/view/components';

import { EmptyList, Footer, GameInfo, ModalContent } from './components';

// Libs

// Style
import { Container, Title } from './styles';

type ParamList = {
  Lobby: {
    newGame?: string;
  };
};

export type LobbyParams = RouteProp<ParamList, 'Lobby'>;

const Lobby: React.FC = () => {
  const { params } = useRoute<LobbyParams>();
  const { loading, players, fetchPlayers } = useFetchPlayersController(
    params?.newGame,
  );

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Title>LOBBY</Title>

      <FlatList
        data={players}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchPlayers} />
        }
        ListEmptyComponent={() => <EmptyList />}
        renderItem={({ item }) => <GameInfo player={item} />}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
      />

      <Footer showModal={() => setModalVisible(true)} />

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        transparent
      >
        <ModalContent closeModal={() => setModalVisible(false)} />
      </Modal>
    </Container>
  );
};

export default Lobby;
