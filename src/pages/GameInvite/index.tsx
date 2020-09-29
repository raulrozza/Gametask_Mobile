import React, { useEffect, useState, useCallback } from 'react';

// Config
import { defaultTheme } from '../../config/defaultTheme';

// Libs
import { useRoute, useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

// Services
import api from '../../services/api';

// Styles
import { Container, InviteTitle, GameContainer } from './styles';

// Types
import { DefaultTheme } from 'styled-components';
import { IGameInviteRoute } from './types';
import { IUser } from '../../interfaces/api/User';

// Utils
import handleApiErrors from '../../utils/handleApiErrors';
import { fillTheme } from '../../utils/theme/fillTheme';
import { getStatusBarColor } from '../../utils/theme/getStatusBarColor';

const GameInvite: React.FC = () => {
  // Navigation
  const { params } = useRoute<IGameInviteRoute>();
  const { goBack, navigate } = useNavigation();

  // Data
  const [inviter, setInviter] = useState<IUser | null>(null);
  const [gameTheme, setGameTheme] = useState<DefaultTheme>(defaultTheme);

  const [loading, setLoading] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    setGameTheme({
      ...fillTheme('primary', params.gameData.theme.primary),
      ...fillTheme('secondary', params.gameData.theme.secondary),
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
        handleApiErrors(error);
        goBack();
      }
    })();
  }, []);

  const handleAcceptInvitation = useCallback(async () => {
    setBtnDisabled(true);

    try {
      const { data } = await api.post('/player', {
        game: params.inviteData.gameId,
      });

      showMessage({ message: 'Jogo adicionado!', type: 'success' });

      setBtnDisabled(false);

      navigate('Lobby', { newGame: data });
    } catch (error) {
      handleApiErrors(error);
      setBtnDisabled(false);
    }
  }, []);

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
