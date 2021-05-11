import React from 'react';

// Hooks
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styles
import { Button, Container, Icon, ThinText } from './styles';

const Options: React.FC = () => {
  const { logout, switchGame } = useSessionContext();

  return (
    <Container>
      <Button onPress={() => switchGame()}>
        <Icon as={MaterialCommunityIcons} name="swap-horizontal-bold" />
        <ThinText> Trocar Jogo</ThinText>
      </Button>

      <Button onPress={logout}>
        <Icon name="log-out" />
        <ThinText> Sair</ThinText>
      </Button>
    </Container>
  );
};

export default Options;
