import React from 'react';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { useTheme } from '../../contexts/Theme';
import { Achievement } from 'game';

import {
  Container,
  Picture,
  Name,
  Title,
  Description,
  BackButton,
} from './styles';

type ParamList = {
  achievementDetails: { achievement: Achievement };
};

type AchievementRouteProps = RouteProp<ParamList, 'achievementDetails'>;

const AchievementDetails: React.FC = () => {
  const {
    params: { achievement },
  } = useRoute<AchievementRouteProps>();
  const { goBack } = useNavigation();
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <Picture
        source={
          achievement.image
            ? {
                uri: achievement.image_url,
              }
            : require('../../assets/img/achievements/placeholder.png')
        }
      />
      <Name theme={theme}>{achievement.name}</Name>
      {achievement.title && (
        <Title theme={theme}>Garante o Título: {achievement.title.name}</Title>
      )}
      <Description theme={theme}>{achievement.description}</Description>
      <BackButton.Button onPress={() => goBack()}>
        <BackButton.Text theme={theme}>Voltar</BackButton.Text>
      </BackButton.Button>
    </Container>
  );
};

export default AchievementDetails;
