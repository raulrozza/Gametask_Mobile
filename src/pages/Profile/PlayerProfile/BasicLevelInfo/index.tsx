import React, { useMemo } from 'react';

// Components
import ProgressBar from '../../../../components/ProgressBar';
import Select from 'react-native-picker-select';

// Styles
import {
  BarContainer,
  Container,
  LevelInfo,
  NextLevel,
  Picture,
} from './styles';

// Types
import { BasicLevelInfoProps } from './types';

// Utils
import { getPlayerNextLevel } from '../utils';

const BasicLevelInfo: React.FC<BasicLevelInfoProps> = ({
  theme,
  rankTheme,
  user,
  player,
  levelInfo,
}) => {
  const playerNextLevel = useMemo(
    () => getPlayerNextLevel(player?.level, levelInfo),
    [player],
  );

  return (
    <Container>
      <Picture theme={theme} user={user} />

      <LevelInfo.View>
        <LevelInfo.Text>{player.level}</LevelInfo.Text>
        <LevelInfo.Exp>{player.experience} XP</LevelInfo.Exp>
      </LevelInfo.View>

      <BarContainer>
        <ProgressBar
          unfilledColor={theme.primary}
          fillColor={theme.secondary}
          borderColor={rankTheme.primaryShade}
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
            <NextLevel.Text theme={rankTheme}>
              Faltam {playerNextLevel.requiredExperience - player.experience} XP
            </NextLevel.Text>
          )}
      </NextLevel.Container>

      {/* <Select
  items={player.titles.map(title => {
    return {
      key: title._id,
      label: title.name,
      value: title.name,
    };
  })}
  onValueChange={() => null}
/> */}
    </Container>
  );
};

export default BasicLevelInfo;
