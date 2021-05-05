import React from 'react';

// Hooks
import { useNavigation } from '@react-navigation/native';

// Styles
import {
  Container,
  Description,
  Experience,
  InfoContainer,
  Title,
} from './styles';

// Types
import { ActivityCardProps } from './types';

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const { navigate } = useNavigation();

  return (
    <Container onTouchEnd={() => navigate('activityRegister', { activity })}>
      <InfoContainer>
        <Title>{activity.name}</Title>

        <Description>{activity.description}</Description>
      </InfoContainer>

      <Experience.Container>
        <Experience.Text>{activity.experience} XP</Experience.Text>
      </Experience.Container>
    </Container>
  );
};

export default ActivityCard;
