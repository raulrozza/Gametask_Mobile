import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Activity } from 'game';
import {
  Container,
  PageTitle,
  Description,
  ActivityContainer,
  StyledActivity,
} from './styles';

// Contexts
import { useTheme } from '../../contexts/Theme';

// Services
import api from '../../services/api';

const ActivityRegister: React.FC = () => {
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  // States
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/activities');

        setActivities(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Container theme={theme}>
      <PageTitle theme={theme}>Registrar Atividades</PageTitle>
      <Description theme={theme}>
        Completou alguma atividade? Informe aos moderadores para ganhar XP!
      </Description>
      <ActivityContainer.View>
        <ActivityContainer.Title theme={theme}>
          Atividades
        </ActivityContainer.Title>

        <FlatList
          keyExtractor={activity => activity._id}
          data={activities}
          renderItem={({ item: activity }) => (
            <StyledActivity.Container
              theme={theme}
              onTouchEnd={() => navigate('activity', { activity })}
            >
              <StyledActivity.InfoContainer>
                <StyledActivity.Title theme={theme}>
                  {activity.name}
                </StyledActivity.Title>

                <StyledActivity.Description theme={theme}>
                  {activity.description}
                </StyledActivity.Description>
              </StyledActivity.InfoContainer>

              <StyledActivity.ExperienceContainer>
                <StyledActivity.ExperienceText theme={theme}>
                  {activity.experience} XP
                </StyledActivity.ExperienceText>
              </StyledActivity.ExperienceContainer>
            </StyledActivity.Container>
          )}
        />
      </ActivityContainer.View>
    </Container>
  );
};

export default ActivityRegister;
