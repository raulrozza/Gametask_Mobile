import React, { useCallback, useMemo } from 'react';

// Hooks
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import useGetGameController from 'modules/chooseGame/infra/controllers/useGetGameController';
import useCreatePlayerController from 'modules/chooseGame/infra/controllers/useCreatePlayerController';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';
import useGetUserController from 'modules/chooseGame/infra/controllers/useGetUserController';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

// Styles
import { Container, InviteTitle, GameContainer } from './styles';
import { ThemeProvider } from 'styled-components';

type ParamList = {
  GameInvite: {
    gameId: string;
    inviterId: string;
  };
};

type IGameInviteRoute = RouteProp<ParamList, 'GameInvite'>;

const GameInvite: React.FC = () => {
  const { params } = useRoute<IGameInviteRoute>();
  const { game, loading: loadingGame } = useGetGameController({
    gameId: params.gameId,
  });
  const { user, loading: loadingUser } = useGetUserController({
    userId: params.inviterId,
  });

  const { createPlayer, loading: loadingCreate } = useCreatePlayerController();

  const { navigate } = useNavigation();
  const toast = useToastContext();
  const { theme, createPallete } = useThemeContext();

  const gameTheme = useMemo(
    () =>
      game.theme
        ? {
            ...theme,
            palette: createPallete(game.theme),
          }
        : theme,
    [createPallete, game.theme, theme],
  );

  const handleAcceptInvitation = useCallback(async () => {
    const success = await createPlayer(game.id);

    if (success) {
      toast.showSuccess('Jogo adicionado!');

      navigate('Lobby', { newGame: game.id });
    }
  }, [createPlayer, navigate, game.id, toast]);

  if (loadingGame || loadingUser) return null;

  return (
    <Container>
      <InviteTitle.Text>
        Você foi convidado(a) por{' '}
        <InviteTitle.Inviter>{user.firstname}</InviteTitle.Inviter> para
        participar de <InviteTitle.Game>{game.name}</InviteTitle.Game>
      </InviteTitle.Text>

      <ThemeProvider theme={gameTheme}>
        <GameContainer.Wrapper>
          <GameContainer.Image url={game.image_url} />

          <GameContainer.Description>
            {game.description}
          </GameContainer.Description>

          <GameContainer.Button
            onPress={handleAcceptInvitation}
            loading={loadingCreate}
          >
            Aceitar convite
          </GameContainer.Button>
        </GameContainer.Wrapper>
      </ThemeProvider>
    </Container>
  );
};

export default GameInvite;
