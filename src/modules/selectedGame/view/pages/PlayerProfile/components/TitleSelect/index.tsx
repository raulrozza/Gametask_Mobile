import React, { useState } from 'react';

import { usePlayerProfileContext } from 'modules/selectedGame/view/contexts';

import { Container, Select } from './styles';

const TitleSelect: React.FC = () => {
  const { player } = usePlayerProfileContext();

  const [currentTitle, setCurrentTitle] = useState<string | undefined>(
    player.currentTitle?.id,
  );

  if (!player.titles) return null;

  return (
    <Container>
      <Select
        selectedValue={currentTitle}
        onValueChange={value => setCurrentTitle(value as string)}
      >
        <Select.Item label="Escolha um título..." value={null} />
        {player.titles.map(title => (
          <Select.Item key={title.id} label={title.name} value={title.id} />
        ))}
      </Select>
    </Container>
  );
};

export default TitleSelect;
