import React from 'react';

import { Container, Text } from './styles';

const EmptyList: React.FC = () => (
  <Container>
    <Text>Você ainda não está cadastrado em nenhum jogo.</Text>
  </Container>
);

export default EmptyList;
