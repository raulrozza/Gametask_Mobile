import React from 'react';
import { Text } from 'react-native';

// Styles
import { Container, Title } from './styles';
import { withTheme } from 'styled-components';

// Types
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ theme, firstname, title, rank }) => (
  <Container theme={theme}>
    <Title theme={theme}>
      {rank?.name ? `${rank?.name} ` : ''}
      {firstname}
    </Title>

    {title && <Text>{title.name}</Text>}
  </Container>
);

export default withTheme(Header);
