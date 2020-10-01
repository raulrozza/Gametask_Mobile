import React from 'react';

// Hooks
import { useAuth } from '../../../../hooks/contexts/useAuth';
import { useGameData } from '../../../../hooks/contexts/useGameData';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styles
import { Button, Container, Icon, ThinText } from './styles';

const Options: React.FC = () => {
  const { signOut } = useAuth();
  const { switchGame } = useGameData();

  return (
    <Container>
      <Button onPress={() => switchGame()}>
        <Icon as={MaterialCommunityIcons} name="swap-horizontal-bold" />
        <ThinText> Trocar Jogo</ThinText>
      </Button>

      <Button onPress={() => signOut()}>
        <Icon name="log-out" />
        <ThinText> Sair</ThinText>
      </Button>
    </Container>
  );
};

export default Options;
