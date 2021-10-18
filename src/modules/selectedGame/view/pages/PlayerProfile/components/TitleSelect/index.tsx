import React, { useState } from 'react';

import useUpdateTitleController from 'modules/selectedGame/infra/controllers/useUpdateTitleController';
import { usePlayerProfileContext } from 'modules/selectedGame/view/contexts';

import { Container, Select } from './styles';

const TitleSelect: React.FC = () => {
  const { player } = usePlayerProfileContext();

  const { updateTitle } = useUpdateTitleController();

  const [currentTitle, setCurrentTitle] = useState<string | undefined>(
    player.currentTitle?.id,
  );

  const onTitleUpdate = (value: unknown) => {
    const newValue = typeof value === 'string' ? value : undefined;

    setCurrentTitle(newValue);

    updateTitle({ playerId: player.id, titleId: newValue });
  };

  if (!player.titles) return null;

  return (
    <Container>
      <Select selectedValue={currentTitle} onValueChange={onTitleUpdate}>
        <Select.Item label="Escolha um título..." value={null} />
        {player.titles.map(title => (
          <Select.Item key={title.id} label={title.name} value={title.id} />
        ))}
      </Select>
    </Container>
  );
};

export default TitleSelect;
