import React, { useState, useCallback, useMemo } from 'react';

// Hooks
import { useApiFetch } from '../../hooks/api/useApiFetch';
import { useApiPost } from '../../hooks/api/useApiPost';
import { useRoute, useNavigation } from '@react-navigation/native';

// Styles
import { Container, InviteTitle, GameContainer } from './styles';

// Types
import { IGameInviteRoute } from './types';
import { IUser } from '../../interfaces/api/User';

// Utils
import { fillTheme } from '../../utils/theme/fillTheme';
import { getStatusBarColor } from '../../utils/theme/getStatusBarColor';
import displaySuccessMessage from '../../utils/displaySuccessMessage';

const GameInvite: React.FC = () => {
  // Hooks
  const { params } = useRoute<IGameInviteRoute>();
  const { goBack, navigate } = useNavigation();
  const apiPost = useApiPost();
  const { data: inviter, loading, errors } = useApiFetch<IUser>(
    `/user/${params.inviteData.inviter}`,
  );

  // Data
  const gameTheme = useMemo(() => {
    return {
      ...fillTheme('primary', params.gameData.theme.primary),
      ...fillTheme('secondary', params.gameData.theme.secondary),
      statusBar: getStatusBarColor(params.gameData.theme.primary),
    };
  }, []);

  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleAcceptInvitation = useCallback(async () => {
    setBtnDisabled(true);

    const data = await apiPost('/player', {
      game: params.inviteData.gameId,
    });

    setBtnDisabled(false);

    if (data) {
      displaySuccessMessage('Jogo adicionado!');

      navigate('Lobby', { newGame: data });
    }
  }, []);

  if (loading) return null;

  if (errors) goBack();

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
