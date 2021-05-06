import React, { useMemo } from 'react';

// Components
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { BasicLevelInfo, Header, Options } from './components';
import AchievementList from './AchievementList';
import { Container } from './styles';

// Containers
import PlayerProfileContext from 'modules/selectedGame/container/contexts/PlayerProfileContext';
import { ThemeProvider } from 'styled-components';

// Hooks
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';
import useFindPlayerController from 'modules/selectedGame/infra/controllers/useFindPlayerController';

const PlayerProfile: React.FC = () => {
  const { loading, player } = useFindPlayerController();
  const { theme, createPallete } = useThemeContext();

  const rankTheme = useMemo(
    () =>
      loading || !player?.rank?.color
        ? theme
        : {
            ...theme,
            palette: createPallete({
              primary: player.rank.color,
              secondary: theme.palette.primary.main,
            }),
          },
    [player, createPallete, theme, loading],
  );

  if (loading) return <ActivityIndicator />;

  return (
    <SafeAreaView>
      <ThemeProvider theme={rankTheme}>
        <PlayerProfileContext player={player}>
          <Container>
            <Header />

            <BasicLevelInfo />

            {/* <AchievementList player={player} /> */}

            <Options />
          </Container>
        </PlayerProfileContext>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default PlayerProfile;
