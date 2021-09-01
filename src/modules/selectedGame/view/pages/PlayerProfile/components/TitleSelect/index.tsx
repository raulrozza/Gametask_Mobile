import React, { useMemo, useState } from 'react';

// Components
import RNPCSelect from 'react-native-picker-select';

// Entities
import ITitle from 'shared/domain/entities/ITitle';

// Hooks
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';
import usePlayerProfileContext from 'modules/selectedGame/container/contexts/PlayerProfileContext/contexts/usePlayerProfileContext';

import { inputStyles } from './styles';

const TitleSelect: React.FC = () => {
  const { theme } = useThemeContext();
  const { player } = usePlayerProfileContext();

  const [currentTitle, setCurrentTitle] = useState<ITitle | undefined>(
    player.currentTitle,
  );

  const computedInputStyle = useMemo(() => inputStyles(theme), [theme]);

  return (
    <RNPCSelect
      style={{
        inputAndroid: computedInputStyle,
        inputIOS: computedInputStyle,
        placeholder: { color: theme.palette.primary.dark },
      }}
      items={
        player.titles?.map(title => ({
          key: title.id,
          label: title.name,
          value: title,
        })) || []
      }
      value={currentTitle}
      onValueChange={setCurrentTitle}
      placeholder={{
        label: 'Selecione um título...',
        value: null,
      }}
    />
  );
};

export default TitleSelect;
