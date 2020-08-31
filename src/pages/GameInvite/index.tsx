import React, { useEffect, useState } from 'react';

// Contexts
import {
  defaultTheme,
  fillPallete,
  getStatusBarColor,
} from '../../contexts/Theme';

// Libs
import { useRoute, useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

// Styles
import { Container, InviteTitle, GameContainer } from './styles';

// Types
import { IGameInviteRoute } from './types';
import { IUser } from 'authorization';
import { IColorPallete } from 'theme';

// Services
import api from '../../services/api';

// Utils
import handleErrors from '../../utils/handleErrors';

const GameInvite: React.FC = () => {
  // Navigation
  const { params } = useRoute<IGameInviteRoute>();
  const { goBack, navigate } = useNavigation();

  // Data
  const [inviter, setInviter] = useState<IUser | null>(null);
  const [gameTheme, setGameTheme] = useState<IColorPallete>(defaultTheme);

  const [loading, setLoading] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    setGameTheme({
      ...fillPallete('primary', params.gameData.theme.primary),
      ...fillPallete('secondary', params.gameData.theme.secondary),
      statusBar: getStatusBarColor(params.gameData.theme.primary),
    });
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/user/${params.inviteData.inviter}`);

        setInviter(data);

        return setLoading(false);
      } catch (error) {
        handleErrors(error);
        goBack();
      }
    })();
  }, []);

  const handleAcceptInvitation = async () => {
    setBtnDisabled(true);

    try {
      const { data } = await api.post('/player', {
        game: params.inviteData.gameId,
      });

      showMessage({ message: 'Jogo adicionado!', type: 'success' });

      setBtnDisabled(false);

      navigate('Lobby', { newGame: data });
    } catch (error) {
      handleErrors(error);
      setBtnDisabled(false);
    }
  };

  if (loading) return null;

  return (
    <Container>
      <InviteTitle.Text>
        Você foi convidado(a) por{' '}
        <InviteTitle.Inviter>{inviter?.firstname}</InviteTitle.Inviter> para
        participar de{' '}
        <InviteTitle.Game>{params.gameData.name}</InviteTitle.Game>
      </InviteTitle.Text>

      <GameContainer.Wrapper theme={gameTheme}>
        <GameContainer.Image
          theme={gameTheme}
          source={
            params.gameData.image
              ? {
                  uri: params.gameData.image_url,
                }
              : require('../../assets/img/games/placeholder.png')
          }
        />

        <GameContainer.Description theme={gameTheme}>
          {params.gameData.description}
        </GameContainer.Description>

        <GameContainer.Button
          theme={gameTheme}
          disabled={btnDisabled}
          onPress={handleAcceptInvitation}
        >
          Aceitar convite
        </GameContainer.Button>
      </GameContainer.Wrapper>
    </Container>
  );
};

export default GameInvite;
