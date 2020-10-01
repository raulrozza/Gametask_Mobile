import React from 'react';

// Hooks
import { useRoute, useNavigation } from '@react-navigation/native';

// Types
import { AchievementParams } from './types';

// Styles
import {
  Container,
  Picture,
  Name,
  Title,
  Description,
  BackButton,
  RequestButton,
} from './styles';

const AchievementDetails: React.FC = () => {
  const {
    params: { achievement },
  } = useRoute<AchievementParams>();
  const { goBack, navigate } = useNavigation();

  return (
    <Container>
      <Picture achievement={achievement} obtained={achievement.obtained} />

      <Name>{achievement.name}</Name>

      {achievement.title && (
        <Title>Garante o Título: {achievement.title.name}</Title>
      )}

      <Description>{achievement.description}</Description>

      {!achievement.obtained && (
        <RequestButton
          onPress={() =>
            navigate('achievementRegister', {
              achievement,
            })
          }
        >
          Requisitar desbloqueio
        </RequestButton>
      )}

      <BackButton.Button onPress={() => goBack()}>
        <BackButton.Text>Voltar</BackButton.Text>
      </BackButton.Button>
    </Container>
  );
};

export default AchievementDetails;
