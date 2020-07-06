import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { GameRank, GameLevelInfo } from 'game';
import { ColorPallete } from 'theme';

// Styles
import {
  Container,
  Header,
  Title,
  UserImage,
  LevelInfo,
  LevelInfoText,
  LevelInfoExp,
  BarContainer,
  NextLevelContainer,
  NextLevelText,
  AchievementsContainer,
  Achievement,
} from './styles';

// Contexts
import { useGame } from '../../contexts/Game';
import { useTheme } from '../../contexts/Theme';
import { useAuth } from '../../contexts/Authorization';

// Components
import ProgressBar from '../ProgressBar';

interface UserMeta {
  rank: GameRank | undefined;
  nextLevel: GameLevelInfo | undefined;
}

const PlayerProfile: React.FC = () => {
  const { user, signOut } = useAuth();
  const { theme, defaultTheme, fillPallete } = useTheme();
  const { game, achievements: defaultAchievements } = useGame();

  const [rankPallete, setRankPallete] = useState<ColorPallete>(defaultTheme);
  const [userMeta, setUserMeta] = useState<UserMeta>({
    rank: undefined,
    nextLevel: undefined,
  });
  const [achievements, setAchievements] = useState(defaultAchievements);

  useEffect(() => {
    const { ranks, levelInfo } = game;
    const nextLevel = levelInfo
      .sort((a, b) => a.level - b.level)
      .find(info => user.level <= info.level);
    const currentRank = ranks
      .sort((a, b) => b.level - a.level)
      .find(info => user.level >= info.level);

    if (currentRank) setRankPallete(fillPallete('primary', currentRank.color));

    setAchievements(
      achievements.map(achievement => {
        return {
          ...achievement,
          obtained: user.achievements.includes(achievement),
        };
      }),
    );

    setUserMeta({
      rank: currentRank,
      nextLevel: nextLevel,
    });
  }, [game]);

  return (
    <SafeAreaView>
      <Container theme={rankPallete}>
        <Header theme={rankPallete}>
          <Title theme={rankPallete}>{user.firstname}</Title>
        </Header>
        {user.currentTitle && (
          <Text>
            {user.currentTitle && `${user.currentTitle} `}
            {user.currentTitle.name}
          </Text>
        )}

        <UserImage
          theme={rankPallete}
          source={
            user.profile_url
              ? {
                  uri: user.profile_url,
                }
              : require('../../assets/img/users/placeholder.png')
          }
        />

        <LevelInfo>
          <LevelInfoText>{user.level}</LevelInfoText>
          <LevelInfoExp>{user.experience} XP</LevelInfoExp>
        </LevelInfo>

        <BarContainer>
          <ProgressBar
            unfilledColor={theme.primary}
            fillColor={theme.secondary}
            borderColor={rankPallete.primaryShade}
            progress={
              userMeta.nextLevel &&
              user.experience / userMeta.nextLevel.requiredExperience
            }
          />
        </BarContainer>
        {userMeta.nextLevel && (
          <NextLevelContainer>
            <NextLevelText theme={rankPallete}>
              Faltam {userMeta.nextLevel.requiredExperience - user.experience}{' '}
              XP
            </NextLevelText>
          </NextLevelContainer>
        )}

        <AchievementsContainer theme={theme}>
          {achievements.map(achievement => (
            <Achievement.Container key={achievement.id}>
              <Achievement.Image
                source={
                  achievement.image
                    ? {
                        uri: achievement.image_url,
                      }
                    : require('../../assets/img/users/placeholder.png')
                }
              />
            </Achievement.Container>
          ))}
        </AchievementsContainer>

        <TouchableOpacity onPress={() => signOut()}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  );
};

export default PlayerProfile;
