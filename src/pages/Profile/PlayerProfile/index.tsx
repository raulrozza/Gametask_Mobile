import React, { useMemo } from 'react';

// Components
import ProgressBar from '../../../components/ProgressBar';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Hooks
import { useAuth } from '../../../hooks/contexts/useAuth';
import { useGameData } from '../../../hooks/contexts/useGameData';
import { useApiFetch } from '../../../hooks/api/useApiFetch';
import { useNavigation } from '@react-navigation/native';

// Libs
import { SafeAreaView, Text } from 'react-native';

// Styles
import { withTheme } from 'styled-components';
import {
  Container,
  Header,
  Title,
  UserImage,
  LevelInfo,
  BarContainer,
  NextLevel,
  AchievementsList,
  Achievement,
  BottomOption,
} from './styles';

// Types
import { IAchievement } from '../../../interfaces/api/Achievement';
import { IUserMeta } from './types';
import { IThemedComponent } from '../../../interfaces/theme/ThemedComponent';

// Utils
import { fillTheme } from '../../../utils/theme/fillTheme';

const PlayerProfile: React.FC<IThemedComponent> = ({ theme }) => {
  const { user, signOut } = useAuth();
  const { game, player, switchGame } = useGameData();
  const { navigate } = useNavigation();
  const { data } = useApiFetch<IAchievement[]>('/achievement');

  const achievements: IAchievement[] = useMemo(() => {
    if (!data || !player) return [];

    return data.map((achievement: IAchievement) => {
      return {
        ...achievement,
        obtained: player.achievements.includes(achievement._id) || false,
      };
    });
  }, [data]);

  const [rankPallete, userMeta] = useMemo(() => {
    let rankPallete = theme;
    let userMeta: IUserMeta = {
      rank: undefined,
      nextLevel: undefined,
    };

    if (game && player) {
      const { levelInfo } = game;
      const nextLevel = levelInfo
        .sort((a, b) => a.level - b.level)
        .find(info => player.level < info.level);

      if (player.rank && player.rank.color)
        rankPallete = fillTheme('primary', player.rank.color);

      userMeta = {
        rank: player.rank,
        nextLevel: nextLevel,
      };
    }

    return [rankPallete, userMeta];
  }, [game]);

  if (!game || !player || !user) return null;

  return (
    <SafeAreaView>
      <Container theme={rankPallete}>
        <Header theme={rankPallete}>
          <Title theme={rankPallete}>
            {userMeta.rank?.name ? `${userMeta.rank?.name} ` : ''}
            {user.firstname}
          </Title>
        </Header>
        {player.currentTitle && <Text>{player.currentTitle.name}</Text>}

        <UserImage
          theme={rankPallete}
          source={
            user.image
              ? {
                  uri: user.profile_url,
                }
              : require('../../../assets/img/users/placeholder.png')
          }
        />

        <LevelInfo.View>
          <LevelInfo.Text>{player.level}</LevelInfo.Text>
          <LevelInfo.Exp>{player.experience} XP</LevelInfo.Exp>
        </LevelInfo.View>

        <BarContainer>
          <ProgressBar
            unfilledColor={theme.primary}
            fillColor={theme.secondary}
            borderColor={rankPallete.primaryShade}
            progress={
              userMeta.nextLevel
                ? player.experience / userMeta.nextLevel.requiredExperience
                : 1
            }
          />
        </BarContainer>

        <NextLevel.Container>
          {userMeta.nextLevel &&
            userMeta.nextLevel.requiredExperience - player.experience !== 0 && (
              <NextLevel.Text theme={rankPallete}>
                Faltam{' '}
                {userMeta.nextLevel.requiredExperience - player.experience} XP
              </NextLevel.Text>
            )}
        </NextLevel.Container>

        {achievements.length > 0 && (
          <AchievementsList.Container>
            <AchievementsList.Text>Conquistas</AchievementsList.Text>
            {achievements.map(achievement => (
              <Achievement.Container
                key={achievement.id}
                obtained={achievement.obtained || false}
                onTouchEnd={() =>
                  navigate('achievementDetails', {
                    achievement,
                  })
                }
              >
                <Achievement.Image
                  source={
                    achievement.image
                      ? {
                          uri: achievement.image_url,
                        }
                      : require('../../../assets/img/achievements/placeholder.png')
                  }
                />
                <Achievement.Text>{achievement.name}</Achievement.Text>
              </Achievement.Container>
            ))}
          </AchievementsList.Container>
        )}

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
