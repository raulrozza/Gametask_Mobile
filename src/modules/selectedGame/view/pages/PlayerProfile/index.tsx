import React, { useMemo } from 'react';

// Components
import { SafeAreaView } from 'react-native';
import Header from './Header';
import AchievementList from './AchievementList';
import BasicLevelInfo from './BasicLevelInfo';
import Options from './Options';
import { Container } from './styles';

// Hooks
import { useGameData } from '../../../../../hooks/contexts/useGameData';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

const PlayerProfile: React.FC = () => {
  const { userData } = useSessionContext();
  const { game, player } = useGameData();
  const { theme, createPallete } = useThemeContext();

  const rankTheme = useMemo(
    () =>
      createPallete({
        primary: player?.rank.color,
        secondary: theme.palette.primary.main,
      }),
    [player, createPallete, theme],
  );

  return (
    <SafeAreaView>
      <Container>
        {/* <Header
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

        <Options /> */}
      </Container>
    </SafeAreaView>
  );
};

export default PlayerProfile;
