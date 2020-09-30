import React, { useEffect, useState } from 'react';

// Components
import { FlatList } from 'react-native-gesture-handler';
import ModalContent from './ModalContent';

// Hooks
import { useAuth } from '../../hooks/contexts/useAuth';
import { useGameData } from '../../hooks/contexts/useGameData';
import { useApiFetch } from '../../hooks/api/useApiFetch';
import { useRoute } from '@react-navigation/native';

// Libs
import { Modal } from 'react-native';

// Style
import { Container, Title, Game, Footer, EmptyList } from './styles';

// Types
import { IPlayer } from '../../interfaces/api/Player';
import { LobbyParams } from './types';

const Lobby: React.FC = () => {
  const { signOut } = useAuth();
  const { switchGame } = useGameData();
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
