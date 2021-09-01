import React, { useCallback, useMemo } from 'react';

import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import useCreatePlayerController from 'modules/chooseGame/infra/controllers/useCreatePlayerController';
import useGetGameController from 'modules/chooseGame/infra/controllers/useGetGameController';
import useGetUserController from 'modules/chooseGame/infra/controllers/useGetUserController';
import Button from 'shared/view/components/Button';
import { useThemeContext, useToastContext } from 'shared/view/contexts';

import { Container, InviteTitle, GameContainer } from './styles';

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

          <Button
            onPress={handleAcceptInvitation}
            loading={loadingCreate}
            textStyle={GameContainer.buttonTextStyle}
          >
            Aceitar convite
          </Button>
        </GameContainer.Wrapper>
      </ThemeProvider>
    </Container>
  );
};

export default GameInvite;
