import React from 'react';

// Styles
import { Container, Name, Title } from './styles';

// Types
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ theme, firstname, title, rank }) => (
  <Container theme={theme}>
    <Name theme={theme}>
      {rank?.name ? `${rank?.name} ` : ''}
      {firstname}
      {title && <Title>{`, ${title.name}`}</Title>}
    </Name>
  </Container>
);

export default Header;
