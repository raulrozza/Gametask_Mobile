import React from 'react';

import { Container, Text } from './styles';

const EmptyList: React.FC = () => (
  <Container>
    <Text>
      Não há nenhuma atividade cadastrada. Fale com os administradores para que
      você possa começar a pontuar!
    </Text>
  </Container>
);

export default EmptyList;
