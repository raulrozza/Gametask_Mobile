import React from 'react';

// Entities
import IPlayer from 'shared/entities/IPlayer';

// Hooks
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';

// Styles
import { Button, Container, Description, Info, Image, Title } from './styles';

interface GameInfoProps {
  player: IPlayer;
}

const GameInfo: React.FC<GameInfoProps> = ({ player }) => {
  const { switchGame } = useSessionContext();

  return (
    <Container>
      <Image url={player.game.image_url} />

      <Info>
        <Title>{player.game.name} </Title>

        <Description.Container>
          <Description.Text>{player.game.description}</Description.Text>
        </Description.Container>

        <Button
          outline
          onPress={() =>
            switchGame(player.game.id, player.game.theme, player.id)
          }
        >
          Entrar
        </Button>
      </Info>
    </Container>
  );
};

export default GameInfo;
