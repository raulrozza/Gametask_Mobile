import React from 'react';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

// Icons
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Pages
import Home from './game/home.routes';
import Profile from './game/profile.routes';
import Activities from './game/activities.routes';

const Tab = createBottomTabNavigator();

const GameRoutes: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: theme.palette.primary.main,
            borderTopColor: theme.palette.secondary.dark,
          },
          activeTintColor: theme.palette.secondary.dark,
          inactiveTintColor: theme.palette.primary.contrast,
        }}
      >
        <Tab.Screen
          options={{
            title: 'Principal',
            tabBarIcon: props => <Feather name="list" {...props} />,
          }}
          name="Home"
          component={Home}
        />

        <Tab.Screen
          options={{
            title: 'Atividades',
            tabBarIcon: props => (
              <MaterialCommunityIcons name="trophy-award" {...props} />
            ),
          }}
          name="Activities"
          component={Activities}
        />

        <Tab.Screen
          options={{
            title: 'Perfil',
            tabBarIcon: props => (
              <FontAwesome name="user-circle-o" {...props} />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default GameRoutes;
