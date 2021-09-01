import React, { useCallback, useMemo } from 'react';

// Components
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { AchievementList, BasicLevelInfo, Header, Options } from './components';
import { Container } from './styles';

// Containers
import PlayerProfileContext from 'modules/selectedGame/container/contexts/PlayerProfileContext';
import { ThemeProvider } from 'styled-components';

// Hooks
import { useThemeContext } from 'shared/view/contexts';
import useFindPlayerController from 'modules/selectedGame/infra/controllers/useFindPlayerController';
import { useFocusEffect } from '@react-navigation/core';
import { isEmpty } from 'lodash';

const PlayerProfile: React.FC = () => {
  const { loading, player, getPlayer } = useFindPlayerController();
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

  useFocusEffect(
    useCallback(() => {
      if (!player.id) return;

      getPlayer(player.id);
    }, [getPlayer]), // eslint-disable-line react-hooks/exhaustive-deps
  );

  if (loading || isEmpty(player)) return <ActivityIndicator />;

  return (
    <SafeAreaView>
      <ThemeProvider theme={rankTheme}>
        <PlayerProfileContext player={player}>
          <Container>
            <Header />

            <BasicLevelInfo />

            <AchievementList />

            <Options />
          </Container>
        </PlayerProfileContext>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default PlayerProfile;
