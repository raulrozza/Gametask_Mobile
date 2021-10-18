import React, { useCallback } from 'react';


import IPlayer from 'shared/domain/entities/IPlayer';
import { useSessionContext } from 'shared/view/contexts';


import { Button, Container, Description, Info, Image, Title } from './styles';

interface GameInfoProps {
  player: IPlayer;
}

const GameInfo: React.FC<GameInfoProps> = ({ player }) => {
  const { switchGame } = useSessionContext();

  const handleGoToGame = useCallback(
    () =>
      switchGame({
        gameId: player.game.id,
        theme: player.game.theme,
        playerId: player.id,
      }),
    [switchGame, player],
  );

  return (
    <Container>
      <Image url={player.game.image_url} />

      <Info>
        <Title>{player.game.name} </Title>

        <Description.Container>
          <Description.Text>{player.game.description}</Description.Text>
        </Description.Container>

        <Button outline onPress={handleGoToGame}>
          Entrar
        </Button>
      </Info>
    </Container>
  );
};

export default GameInfo;
