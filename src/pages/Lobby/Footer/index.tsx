import React from 'react';

// Hooks
import { useAuth } from '../../../hooks/contexts/useAuth';

// styles
import { Row, Button } from './styles';

// Types
import { FooterProps } from './types';

const Footer: React.FC<FooterProps> = ({ showModal }) => {
  const { signOut } = useAuth();

  return (
    <Row>
      <Button.Wrapper onPress={showModal}>
        <Button.Icon name="plus" />

        <Button.Text>Novo</Button.Text>
      </Button.Wrapper>

      <Button.Wrapper>
        <Button.Icon name="sign-out" onPress={signOut} />

        <Button.Text>Sair</Button.Text>
      </Button.Wrapper>
    </Row>
  );
};

export default Footer;
