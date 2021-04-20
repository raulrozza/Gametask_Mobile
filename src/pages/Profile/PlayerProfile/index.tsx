import React, { useMemo } from 'react';

// Components
import Header from './Header';
import AchievementList from './AchievementList';
import BasicLevelInfo from './BasicLevelInfo';
import Options from './Options';

// Hooks
import { useGameData } from '../../../hooks/contexts/useGameData';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

// Libs
import { SafeAreaView } from 'react-native';

// Styles
import { Container } from './styles';

// Utils
import { getRankTheme } from './utils';
import { useRecoilValue } from 'recoil';
import playerTitle from '../../../atoms/playerTitle';

const PlayerProfile: React.FC = () => {
  const { userData } = useSessionContext();
  const { game, player } = useGameData();
  const { theme } = useThemeContext();

  const rankTheme = useMemo(() => getRankTheme(theme, player?.rank), [player]);

  const currentTitle = useRecoilValue(playerTitle);

  if (!game || !player) return null;

  return (
    <SafeAreaView>
      <Container theme={rankTheme}>
        <Header
          theme={rankTheme}
          firstname={userData.name}
          rank={player.rank}
          title={currentTitle}
        />

        <BasicLevelInfo
          rankTheme={rankTheme}
          player={player}
          levelInfo={game.levelInfo}
        />

        <AchievementList player={player} />

        <Options />
      </Container>
    </SafeAreaView>
  );
};

export default PlayerProfile;
