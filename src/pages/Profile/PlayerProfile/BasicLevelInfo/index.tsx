import React, { useMemo, useState } from 'react';

// Components
import ProgressBar from '../../../../components/ProgressBar';

// Recoil
import { useSetRecoilState } from 'recoil';
import playerTitle from '../../../../atoms/playerTitle';

// Styles
import {
  BarContainer,
  Container,
  LevelInfo,
  NextLevel,
  Picture,
  TitleSelect,
} from './styles';

// Types
import { BasicLevelInfoProps } from './types';
import { ITitle } from '../../../../interfaces/api/Title';

// Utils
import { getPlayerNextLevel } from '../utils';
import { useApiPut } from '../../../../hooks/api/useApiPut';

const BasicLevelInfo: React.FC<BasicLevelInfoProps> = ({
  theme,
  rankTheme,
  user,
  player,
  levelInfo,
}) => {
  const apiPut = useApiPut();

  const playerNextLevel = useMemo(
    () => getPlayerNextLevel(player?.level, levelInfo),
    [player],
  );

  // There's a error while using only a Recoil state, so I must use both a useState and a SetRecoilState for the same value
  const [currentTitle, setCurrentTitle] = useState<ITitle | null>(
    player.currentTitle || null,
  );
  const setTitle = useSetRecoilState(playerTitle);

  const handleSelectTitle = (value: ITitle) => {
    setCurrentTitle(value);
    setTitle(value);
    apiPut(`player/${player._id}`, {
      currentTitle: value,
    });
  };

  return (
    <Container>
      <Picture theme={theme} user={user} />

      <LevelInfo.View>
        <LevelInfo.Text>{player.level}</LevelInfo.Text>
        <LevelInfo.Exp>{player.experience} XP</LevelInfo.Exp>
      </LevelInfo.View>

      <BarContainer>
        <ProgressBar
          unfilledColor={theme.palette.primary.main}
          fillColor={theme.palette.secondary.main}
          borderColor={ranktheme.palette.primary.dark}
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

      <TitleSelect
        items={player.titles.map(title => ({
          key: title._id,
          label: title.name,
          value: title,
        }))}
        value={currentTitle}
        onValueChange={handleSelectTitle}
        theme={rankTheme}
        placeholder={{
          label: 'Selecione um título...',
          value: null,
        }}
      />
    </Container>
  );
};

export default BasicLevelInfo;
