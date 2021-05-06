import React, { useMemo } from 'react';

// Components
import TitleSelect from '../TitleSelect';
import ProgressBar from '../../../../../../../components/ProgressBar';

// Hooks
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';
import usePlayerProfileContext from 'modules/selectedGame/container/contexts/PlayerProfileContext/contexts/usePlayerProfileContext';

// Styles
import {
  BarContainer,
  Container,
  LevelInfo,
  NextLevel,
  Picture,
} from './styles';

// Utils
import { getPlayerNextLevel } from '../../utils';

const BasicLevelInfo: React.FC = () => {
  const { theme } = useThemeContext();
  const player = usePlayerProfileContext();

  const playerNextLevel = useMemo(
    () => getPlayerNextLevel(player?.level, [] /* levelInfo */),
    [player],
  );

  return (
    <Container>
      <Picture />

      <LevelInfo.View>
        <LevelInfo.Text>{player.level}</LevelInfo.Text>
        <LevelInfo.Exp>{player.experience} XP</LevelInfo.Exp>
      </LevelInfo.View>

      <BarContainer>
        <ProgressBar
          unfilledColor={theme.palette.primary.main}
          fillColor={theme.palette.secondary.main}
          borderColor={theme.palette.primary.dark}
          progress={
            playerNextLevel
              ? player.experience / playerNextLevel.requiredExperience
              : 1
          }
        />
      </BarContainer>

      <NextLevel.Container>
        {playerNextLevel &&
          playerNextLevel.requiredExperience - player.experience !== 0 && (
            <NextLevel.Text>
              Faltam {playerNextLevel.requiredExperience - player.experience} XP
            </NextLevel.Text>
          )}
      </NextLevel.Container>

      <TitleSelect />
    </Container>
  );
};

export default BasicLevelInfo;
