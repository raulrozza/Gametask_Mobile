import React from 'react';

import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';

import IAchievement from 'modules/selectedGame/domain/entities/IAchievement';

import {
  Container,
  Picture,
  Name,
  Title,
  Description,
  BackButton,
  RequestButton,
} from './styles';

type AchievementParams = RouteProp<
  {
    achievementDetails: {
      achievement: IAchievement & { obtained: boolean };
    };
  },
  'achievementDetails'
>;

const AchievementDetails: React.FC = () => {
  const {
    params: { achievement },
  } = useRoute<AchievementParams>();
  const { goBack, navigate } = useNavigation();

  return (
    <Container>
      <Picture image={achievement.image_url} obtained={achievement.obtained} />

      <Name>{achievement.name}</Name>

      {achievement.title && (
        <Title>Garante o Título: {achievement.title.name}</Title>
      )}

      <Description>{achievement.description}</Description>

      {!achievement.obtained && (
        <RequestButton
          onPress={() =>
            navigate('requestAchievementUnlock', {
              achievement,
            })
          }
        >
          Requisitar desbloqueio
        </RequestButton>
      )}

      <BackButton.Button onPress={goBack}>
        <BackButton.Text>Voltar</BackButton.Text>
      </BackButton.Button>
    </Container>
  );
};

export default AchievementDetails;
