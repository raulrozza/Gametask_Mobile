import React from 'react';

// Components
import { Button, SubmitButton } from 'shared/view/components';
import { Container } from './styles';

// Hooks
import { useNavigation } from '@react-navigation/core';

interface FooterProps {
  loading: boolean;
}

const Footer: React.FC<FooterProps> = ({ loading }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Button outline onPress={navigation.goBack}>
        Voltar
      </Button>

      <SubmitButton loading={loading}>Confirmar</SubmitButton>
    </Container>
  );
};

export default Footer;
