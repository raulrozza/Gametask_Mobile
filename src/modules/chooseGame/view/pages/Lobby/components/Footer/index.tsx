import React from 'react';


import { useNavigation } from '@react-navigation/native';
import { useSessionContext } from 'shared/view/contexts';


import { Row, Button } from './styles';

interface FooterProps {
  showModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ showModal }) => {
  const { logout } = useSessionContext();
  const { navigate } = useNavigation();

  return (
    <Row>
      <Button.Wrapper onPress={() => navigate('Profile')}>
        <Button.Icon name="gear" />

        <Button.Text>Usuário</Button.Text>
      </Button.Wrapper>

      <Button.Wrapper onPress={showModal}>
        <Button.Icon name="plus" />

        <Button.Text>Novo</Button.Text>
      </Button.Wrapper>

      <Button.Wrapper>
        <Button.Icon name="sign-out" onPress={logout} />

        <Button.Text>Sair</Button.Text>
      </Button.Wrapper>
    </Row>
  );
};

export default Footer;
