import React, { useMemo } from 'react';

// Components
import usePlayerProfileContext from 'modules/selectedGame/container/contexts/PlayerProfileContext/contexts/usePlayerProfileContext';
import { useSessionContext } from 'shared/view/contexts';

import ProgressBar from '../ProgressBar';
import TitleSelect from '../TitleSelect';

// Helpers
import { getPlayerNextLevel } from './helpers';

// Hooks

// Styles
import {
  BarContainer,
  Container,
  LevelInfo,
  NextLevel,
  Picture,
} from './styles';

const BasicLevelInfo: React.FC = () => {
  const session = useSessionContext();
  const { player } = usePlayerProfileContext();

  const playerNextLevel = useMemo(
    () =>
      player && getPlayerNextLevel(player.level, player.game?.levelInfo || []),
    [player],
  );

  const progressToNextLevel = playerNextLevel
    ? player.experience / playerNextLevel.requiredExperience
    : 1;

  const missingExpToNextLevel = playerNextLevel
    ? playerNextLevel.requiredExperience - player.experience
    : 0;

  return (
    <Container>
      <Picture image={player.user.profile_url} />

      <LevelInfo.View>
        <LevelInfo.Text>{player.level}</LevelInfo.Text>
        <LevelInfo.Exp>{player.experience} XP</LevelInfo.Exp>
      </LevelInfo.View>

      <BarContainer>
        <ProgressBar progress={progressToNextLevel} />
      </BarContainer>

      <NextLevel.Container>
        {missingExpToNextLevel > 0 && (
          <NextLevel.Text>Faltam {missingExpToNextLevel} XP</NextLevel.Text>
        )}
      </NextLevel.Container>

      <TitleSelect />
    </Container>
  );
};

export default BasicLevelInfo;
