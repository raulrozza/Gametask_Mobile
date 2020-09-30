import React, { useEffect, useState } from 'react';

// Components
import { FlatList } from 'react-native-gesture-handler';
import EmptyList from './EmptyList';
import Footer from './Footer';
import GameInfo from './GameInfo';
import ModalContent from './ModalContent';

// Hooks
import { useApiFetch } from '../../hooks/api/useApiFetch';
import { useRoute } from '@react-navigation/native';

// Libs
import { Modal } from 'react-native';

// Style
import { Container, Title } from './styles';

// Types
import { IPlayer } from '../../interfaces/api/Player';
import { LobbyParams } from './types';

const Lobby: React.FC = () => {
  const { params } = useRoute<LobbyParams>();
  const { data: createdPlayers, loading, fetch } = useApiFetch<IPlayer[]>(
    '/gameplay',
  );

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch();
  }, [params]);

  return (
    <Container>
      <Title>LOBBY</Title>

      <FlatList
        data={createdPlayers || []}
        keyExtractor={item => item._id}
        refreshing={loading}
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
