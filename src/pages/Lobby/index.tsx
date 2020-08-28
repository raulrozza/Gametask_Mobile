import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

// Contexts
import { useAuth } from '../../contexts/Authorization';

// Services
import api from '../../services/api';

// Types
import { IPlayer } from 'game';

// Style
import { Container, Title, Game, Footer, EmptyList } from './styles';
import { useGame } from '../../contexts/Game';
import { Modal } from 'react-native';
import ModalContent from './ModalContent';

const Lobby: React.FC = () => {
  const [createdPlayers, setCreatedPlayers] = useState<IPlayer[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const { signOut } = useAuth();
  const { switchGame } = useGame();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/gameplay');

        setCreatedPlayers(data);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          signOut();
        }
        console.error(error);
      } finally {
        setLoadingData(false);
      }
    })();
  }, []);

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
