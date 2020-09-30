import React, { useMemo } from 'react';

// Components
import Header from './Header';
import AchievementList from './AchievementList';
import BasicLevelInfo from './BasicLevelInfo';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Hooks
import { useAuth } from '../../../hooks/contexts/useAuth';
import { useGameData } from '../../../hooks/contexts/useGameData';

// Libs
import { SafeAreaView } from 'react-native';

// Styles
import { withTheme } from 'styled-components';
import { Container, BottomOption } from './styles';

// Types
import { IThemedComponent } from '../../../interfaces/theme/ThemedComponent';

// Utils
import { getRankTheme } from './utils';

const PlayerProfile: React.FC<IThemedComponent> = ({ theme }) => {
  const { user, signOut } = useAuth();
  const { game, player, switchGame } = useGameData();

  const rankTheme = useMemo(() => getRankTheme(theme, player?.rank), [player]);

  if (!game || !player || !user) return null;

  return (
    <SafeAreaView>
      <Container theme={rankTheme}>
        <Header
          theme={rankTheme}
          firstname={user.firstname}
          rank={player.rank}
          title={player.currentTitle}
        />

        <BasicLevelInfo
          theme={theme}
          rankTheme={rankTheme}
          user={user}
          player={player}
          levelInfo={game.levelInfo}
        />

        <AchievementList player={player} />

        <BottomOption.Button onPress={() => switchGame()}>
          <BottomOption.Icon
            as={MaterialCommunityIcons}
            name="swap-horizontal-bold"
          />
          <BottomOption.Text thin> Trocar Jogo</BottomOption.Text>
        </BottomOption.Button>

        <BottomOption.Button onPress={() => signOut()}>
          <BottomOption.Icon name="log-out" />
          <BottomOption.Text> Sair</BottomOption.Text>
        </BottomOption.Button>
      </Container>
    </SafeAreaView>
  );
};

export default withTheme(PlayerProfile);
