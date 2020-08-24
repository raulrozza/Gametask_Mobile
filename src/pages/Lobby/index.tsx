import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

// Contexts
import { useAuth } from '../../contexts/Authorization';

// Services
import api from '../../services/api';

// Types
import { IPlayer } from 'game';

// Style
import { Container, Title, Game, Footer } from './styles';
import { useGame } from '../../contexts/Game';

const Lobby: React.FC = () => {
  const [createdPlayers, setCreatedPlayers] = useState<IPlayer[]>([]);

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
      }
    })();
  }, []);

  return (
    <Container>
      <Title>LOBBY</Title>
      <FlatList
        data={createdPlayers}
        keyExtractor={item => item._id}
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
        <Footer.Button>
          <Footer.ButtonIcon name="sign-out" onPress={signOut} />
          <Footer.ButtonText>Sair</Footer.ButtonText>
        </Footer.Button>
      </Footer.Row>
    </Container>
  );
};

export default Lobby;
