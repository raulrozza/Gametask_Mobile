import React from 'react';

// Hooks
import { useAuth } from '../../../hooks/contexts/useAuth';
import { useNavigation } from '@react-navigation/native';

// styles
import { Row, Button } from './styles';

// Types
import { FooterProps } from './types';

const Footer: React.FC<FooterProps> = ({ showModal }) => {
  const { signOut } = useAuth();
  const { navigate } = useNavigation();

  return (
    <Row>
      <Button.Wrapper onPress={() => navigate('UserProfile')}>
        <Button.Icon name="gear" />

        <Button.Text>Usuário</Button.Text>
      </Button.Wrapper>

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
