import React from 'react';

// Components
import EmptyList from './EmptyList';
import { FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Hooks
import { useApiFetch } from '../../../hooks/api/useApiFetch';

// Styles
import { Container, PageTitle, Description, ActivityContainer } from './styles';

// Types
import { IActivity } from '../../../interfaces/api/Activity';
import ActivityCard from './ActivityCard';

const ActivityList: React.FC = () => {
  const { data: activities } = useApiFetch<IActivity[]>('/activity');

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
            data={activities || []}
            ListEmptyComponent={() => <EmptyList />}
            renderItem={({ item }) => <ActivityCard activity={item} />}
          />
        </ActivityContainer.View>
      </Container>
    </SafeAreaProvider>
  );
};

export default ActivityList;
