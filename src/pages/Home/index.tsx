import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Pages
import Feed from '../../components/Feed';
import Ranking from '../../components/Ranking';

// Contexts
import { useTheme } from '../../contexts/Theme';

const Tab = createMaterialTopTabNavigator();

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.secondary,
        inactiveTintColor: theme.primaryShade,
        pressColor: theme.primaryLowShade,
        indicatorContainerStyle: {
          backgroundColor: theme.primary,
        },
        indicatorStyle: {
          backgroundColor: theme.secondary,
        },
      }}
    >
      <Tab.Screen name="Atividades Recentes" component={Feed} />
      <Tab.Screen name="Ranking" component={Ranking} />
    </Tab.Navigator>
  );
};

export default Home;
