import React from 'react';


import { ActivityCard, EmptyList } from './components';
import { RefreshControl } from 'shared/view/components';
import { FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import useGetActivitiesController from 'modules/selectedGame/infra/controllers/useGetActivitiesController';


import { Container, PageTitle, Description, ActivityContainer } from './styles';
import IActivity from 'modules/selectedGame/domain/entities/IActivity';

const Activities: React.FC = () => {
  const { loading, activities, getActivities } = useGetActivitiesController();

  return (
    <SafeAreaProvider>
      <Container>
        <PageTitle variant="title">Registrar Atividades</PageTitle>

        <Description>
          Completou alguma atividade? Informe aos moderadores para ganhar XP!
        </Description>

        <ActivityContainer.View>
          <ActivityContainer.Title>Atividades</ActivityContainer.Title>

          <FlatList
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={getActivities} />
            }
            keyExtractor={activity => activity.id}
            data={activities}
            ListEmptyComponent={() => <EmptyList />}
            renderItem={({ item }) => <ActivityCard activity={item} />}
          />
        </ActivityContainer.View>
      </Container>
    </SafeAreaProvider>
  );
};

export default Activities;
