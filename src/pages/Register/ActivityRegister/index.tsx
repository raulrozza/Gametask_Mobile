import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

// Components
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Libs
import { useNavigation } from '@react-navigation/native';

// Styles
import {
  Container,
  PageTitle,
  Description,
  ActivityContainer,
  StyledActivity,
  EmptyList,
} from './styles';

// Services
import api from '../../../services/api';

// Types
import { IActivity } from '../../../interfaces/api/Activity';

// Utils
import handleApiErrors from '../../../utils/handleApiErrors';

const ActivityRegister: React.FC = () => {
  const { navigate } = useNavigation();
  // States
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/activity');

        setActivities(response.data);
      } catch (error) {
        handleApiErrors(error);
      }
    })();
  }, []);

  return (
    <SafeAreaProvider>
      <Container>
        <PageTitle>Registrar Atividades</PageTitle>
        <Description>
          Completou alguma atividade? Informe aos moderadores para ganhar XP!
        </Description>
        <ActivityContainer.View>
          <ActivityContainer.Title>Atividades</ActivityContainer.Title>

          <FlatList
            keyExtractor={activity => activity._id}
            data={activities}
            ListEmptyComponent={() => (
              <EmptyList.Container>
                <EmptyList.Text>
                  Não há nenhuma atividade cadastrada. Fale com os
                  administradores para que você possa começar a pontuar!
                </EmptyList.Text>
              </EmptyList.Container>
            )}
            renderItem={({ item: activity }) => (
              <StyledActivity.Container
                onTouchEnd={() => navigate('activity', { activity })}
              >
                <StyledActivity.InfoContainer>
                  <StyledActivity.Title>{activity.name}</StyledActivity.Title>

                  <StyledActivity.Description>
                    {activity.description}
                  </StyledActivity.Description>
                </StyledActivity.InfoContainer>

                <StyledActivity.ExperienceContainer>
                  <StyledActivity.ExperienceText>
                    {activity.experience} XP
                  </StyledActivity.ExperienceText>
                </StyledActivity.ExperienceContainer>
              </StyledActivity.Container>
            )}
          />
        </ActivityContainer.View>
      </Container>
    </SafeAreaProvider>
  );
};

export default ActivityRegister;
