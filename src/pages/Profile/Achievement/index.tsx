import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

// Types
import { AchievementRouteProps } from '../types';

// Styles
import {
  Container,
  Picture,
  Name,
  Title,
  Description,
  BackButton,
} from './styles';

const AchievementDetails: React.FC = () => {
  const {
    params: { achievement },
  } = useRoute<AchievementRouteProps>();
  const { goBack } = useNavigation();

  return (
    <Container>
      <Picture
        source={
          achievement.image
            ? {
                uri: achievement.image_url,
              }
            : require('../../assets/img/achievements/placeholder.png')
        }
      />
      <Name>{achievement.name}</Name>
      {achievement.title && (
        <Title>Garante o Título: {achievement.title.name}</Title>
      )}
      <Description>{achievement.description}</Description>
      <BackButton.Button onPress={() => goBack()}>
        <BackButton.Text>Voltar</BackButton.Text>
      </BackButton.Button>
    </Container>
  );
};

export default AchievementDetails;
