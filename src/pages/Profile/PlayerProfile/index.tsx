import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Contexts
import { useGame } from '../../../contexts/Game';
import { fillPallete } from '../../../contexts/Theme';
import { useAuth } from '../../../contexts/Authorization';

// Components
import ProgressBar from '../../../components/ProgressBar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
import { IAchievement } from 'game';
import { IColorPallete, IThemedComponent } from 'theme';
import { IUserMeta } from '../types';

// Utils
import handleApiErrors from '../../../utils/handleApiErrors';
import api from '../../../services/api';

const PlayerProfile: React.FC<IThemedComponent> = ({ theme }) => {
  const { user, signOut } = useAuth();
  const { game, player, switchGame } = useGame();
  const { navigate } = useNavigation();

  const [rankPallete, setRankPallete] = useState<IColorPallete>(theme);
  const [userMeta, setUserMeta] = useState<IUserMeta>({
    rank: undefined,
    nextLevel: undefined,
  });
  const [achievements, setAchievements] = useState<IAchievement[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data: achievements } = await api.get('/achievement');

        setAchievements(
          achievements.map((achievement: IAchievement) => {
            return {
              ...achievement,
              obtained: player.achievements.includes(achievement),
            };
          }),
        );
      } catch (error) {
        handleApiErrors(error);
      }
    })();
  }, []);

  useEffect(() => {
    const { levelInfo } = game;
    const nextLevel = levelInfo
      .sort((a, b) => a.level - b.level)
      .find(info => player.level < info.level);

    if (player.rank && player.rank.color)
      setRankPallete(fillPallete('primary', player.rank.color));

    setUserMeta({
      rank: player.rank,
      nextLevel: nextLevel,
    });
  }, [game]);

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
