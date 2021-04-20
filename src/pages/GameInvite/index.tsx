import React, { useState, useCallback, useMemo } from 'react';

// Hooks
import { useApiFetch } from '../../hooks/api/useApiFetch';
import { useApiPost } from '../../hooks/api/useApiPost';
import { useRoute, useNavigation } from '@react-navigation/native';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';

// Styles
import { Container, InviteTitle, GameContainer } from './styles';

// Types
import { IGameInviteRoute } from './types';
import { IUser } from '../../interfaces/api/User';

// Utils
import { getGameTheme } from './utils';

const GameInvite: React.FC = () => {
  // Hooks
  const { params } = useRoute<IGameInviteRoute>();
  const { goBack, navigate } = useNavigation();
  const apiPost = useApiPost();
  const { data: inviter, loading, errors } = useApiFetch<IUser>(
    `/user/${params.inviteData.inviter}`,
  );
  const toast = useToastContext();

  // Data
  const gameTheme = useMemo(() => getGameTheme(params.gameData.theme), []);

  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleAcceptInvitation = useCallback(async () => {
    setBtnDisabled(true);

    const data = await apiPost('/player', {
      game: params.inviteData.gameId,
    });

    setBtnDisabled(false);

    if (data) {
      toast.showSuccess('Jogo adicionado!');

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
        <GameContainer.Image theme={gameTheme} game={params.gameData} />

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
