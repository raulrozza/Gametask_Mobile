import React from 'react';

// Hooks
import { useGameData } from '../../../hooks/contexts/useGameData';

// Styles
import { Button, Container, Description, Info, Image, Title } from './styles';

// Types
import { GameInfoProps } from './types';

const GameInfo: React.FC<GameInfoProps> = ({ player }) => {
  const { switchGame } = useGameData();

  return (
    <Container>
      <Image game={player.game} />

      <Info>
        <Title>{player.game.name} </Title>

        <Description.Container>
          <Description.Text>{player.game.description}</Description.Text>
        </Description.Container>

        <Button outline onPress={() => switchGame(player)}>
          Entrar
        </Button>
      </Info>
    </Container>
  );
};

export default GameInfo;
