import React from 'react';


import IActivity from 'modules/selectedGame/domain/entities/IActivity';


import { useNavigation } from '@react-navigation/native';


import {
  Container,
  Description,
  Experience,
  InfoContainer,
  Title,
} from './styles';

interface ActivityCardProps {
  activity: IActivity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const { navigate } = useNavigation();

  return (
    <Container onTouchEnd={() => navigate('requestActivity', { activity })}>
      <InfoContainer>
        <Title variant="title">{activity.name}</Title>

        <Description>{activity.description}</Description>
      </InfoContainer>

      <Experience.Container>
        <Experience.Text>{activity.experience} XP</Experience.Text>
      </Experience.Container>
    </Container>
  );
};

export default ActivityCard;
