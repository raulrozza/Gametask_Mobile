import React, { useCallback } from 'react';

// Hooks
import { useApiFetch } from '../../../../../hooks/api/useApiFetch';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import useGameGameController from 'modules/chooseGame/infra/controllers/useGameGameController';
import useCreatePlayerController from 'modules/chooseGame/infra/controllers/useCreatePlayerController';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';

// Styles
import { Container, InviteTitle, GameContainer } from './styles';

// Types
import { IUser } from '../../../../../interfaces/api/User';

// Utils
import { getGameTheme } from './utils';
import { defaultTheme } from 'config/defaultTheme';

type ParamList = {
  GameInvite: {
    id: string;
  };
};

type IGameInviteRoute = RouteProp<ParamList, 'GameInvite'>;

const GameInvite: React.FC = () => {
  // Hooks
  const { params } = useRoute<IGameInviteRoute>();

  const {game, loading} = useGameGameController({gameId: params.id})

  const {createPlayer, loading: loadingCreate} = useCreatePlayerController()

  const { goBack, navigate } = useNavigation();
  const { data: inviter, errors } = useApiFetch<IUser>(
    `/user/${params.id}`,
  );
  const toast = useToastContext();

  // Data
  const gameTheme = defaultTheme; /* useMemo(() => getGameTheme(params.gameData.theme), []); */

  const handleAcceptInvitation = useCallback(async () => {
    const success = await createPlayer(game.id);

    if (success) {
      toast.showSuccess('Jogo adicionado!');

      navigate('Lobby', { newGame: game.id });
    }
  }, [createPlayer, navigate, game.id, toast]);

  if (loading) return null;

  if (errors) goBack();

  return (
    <Container>
      <InviteTitle.Text>
        Você foi convidado(a) por{' '}
        <InviteTitle.Inviter>{inviter?.firstname}</InviteTitle.Inviter> para
        participar de{' '}
        <InviteTitle.Game>{game.name}</InviteTitle.Game>
      </InviteTitle.Text>

      <GameContainer.Wrapper theme={gameTheme}>
        <GameContainer.Image theme={gameTheme} url={game.image_url} />

        <GameContainer.Description theme={gameTheme}>
          {game.description}
        </GameContainer.Description>

        <GameContainer.Button
          theme={gameTheme}
          onPress={handleAcceptInvitation}
          loading={loadingCreate}
        >
          Aceitar convite
        </GameContainer.Button>
      </GameContainer.Wrapper>
    </Container>
  );
};

export default GameInvite;
