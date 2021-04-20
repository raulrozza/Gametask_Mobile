import React, { useMemo } from 'react';

// Components
import Header from './Header';
import AchievementList from './AchievementList';
import BasicLevelInfo from './BasicLevelInfo';
import Options from './Options';

// Hooks
import { useAuth } from '../../../hooks/contexts/useAuth';
import { useGameData } from '../../../hooks/contexts/useGameData';
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
  const { user } = useAuth();
  const { game, player } = useGameData();
  const { theme } = useThemeContext();

  const rankTheme = useMemo(() => getRankTheme(theme, player?.rank), [player]);

  const currentTitle = useRecoilValue(playerTitle);

  if (!game || !player || !user) return null;

  return (
    <SafeAreaView>
      <Container theme={rankTheme}>
        <Header
          theme={rankTheme}
          firstname={user.firstname}
          rank={player.rank}
          title={currentTitle}
        />

        <BasicLevelInfo
          theme={theme}
          rankTheme={rankTheme}
          user={user}
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
