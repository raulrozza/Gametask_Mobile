import React, { useEffect, useState } from 'react';

// Components
import { FlatList } from 'react-native-gesture-handler';
import ModalContent from './ModalContent';

// Hooks
import { useAuth } from '../../hooks/contexts/useAuth';
import { useGameData } from '../../hooks/contexts/useGameData';

// Libs
import { useRoute } from '@react-navigation/native';

// Services
import api from '../../services/api';

// Style
import { Container, Title, Game, Footer, EmptyList } from './styles';
import { Modal } from 'react-native';

// Types
import { IPlayer } from '../../interfaces/api/Player';
import { ILobbyRoute } from './types';

// Utils
import handleApiErrors from '../../utils/handleApiErrors';

const Lobby: React.FC = () => {
  const [createdPlayers, setCreatedPlayers] = useState<IPlayer[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const { signOut } = useAuth();
  const { switchGame } = useGameData();
  const { params } = useRoute<ILobbyRoute>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/gameplay');

        setCreatedPlayers(data);
      } catch (error) {
        handleApiErrors(error, signOut);
      } finally {
        setLoadingData(false);
      }
    })();
  }, [params]);

  return (
    <Container>
      <Title>LOBBY</Title>
      <FlatList
        data={createdPlayers}
        keyExtractor={item => item._id}
        refreshing={loadingData}
        ListEmptyComponent={() => (
          <EmptyList.Container>
            <EmptyList.Text>
              Você ainda não está cadastrado em nenhum jogo.
            </EmptyList.Text>
          </EmptyList.Container>
        )}
        renderItem={({ item: player }) => (
          <Game.Container>
            <Game.Image
              source={
                player.game.image
                  ? {
                      uri: player.game.image_url,
                    }
                  : require('../../assets/img/games/placeholder.png')
              }
            />

            <Game.Info>
              <Game.Title>{player.game.name} </Game.Title>

              <Game.Description>{player.game.description} </Game.Description>

              <Game.Button outline onPress={() => switchGame(player)}>
                Entrar
              </Game.Button>
            </Game.Info>
          </Game.Container>
        )}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
      />
      <Footer.Row>
        <Footer.Button onPress={() => setModalVisible(true)}>
          <Footer.ButtonIcon name="plus" />

          <Footer.ButtonText>Novo</Footer.ButtonText>
        </Footer.Button>

        <Footer.Button>
          <Footer.ButtonIcon name="sign-out" onPress={signOut} />

          <Footer.ButtonText>Sair</Footer.ButtonText>
        </Footer.Button>
      </Footer.Row>

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
