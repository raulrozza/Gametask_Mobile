import React from 'react';

// Hooks
import usePlayerProfileContext from 'modules/selectedGame/container/contexts/PlayerProfileContext/contexts/usePlayerProfileContext';
import { useSessionContext } from 'shared/view/contexts';

// Styles
import { Container, Name, Title } from './styles';

const Header: React.FC = () => {
  const { userData } = useSessionContext();
  const player = usePlayerProfileContext();

  return (
    <Container>
      <Name>
        {player.rank?.name ? `${player.rank.name} ` : ''}
        {userData.name}
        {player.currentTitle && (
          <Title>{`, ${player.currentTitle.name}`}</Title>
        )}
      </Name>
    </Container>
  );
};

export default Header;
