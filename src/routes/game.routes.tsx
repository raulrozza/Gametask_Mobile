import React from 'react';

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
import Register from './game/register.routes';

// Styles
import { withTheme } from 'styled-components';

// Types
import { IThemedComponent } from '../interfaces/theme/ThemedComponent';

const Tab = createBottomTabNavigator();

const GameRoutes: React.FC<IThemedComponent> = ({ theme }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: theme.primary,
            borderTopColor: theme.secondaryLowShade,
          },
          activeTintColor: theme.secondaryShade,
          inactiveTintColor: theme.primaryContrast,
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
          name="Register"
          component={Register}
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

export default withTheme(GameRoutes);
