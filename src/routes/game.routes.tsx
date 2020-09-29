import React from 'react';
import { AppLoading } from 'expo';

// Hooks
import { useGameData } from '../hooks/contexts/useGameData';

// Icons
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import GameInvite from '../pages/GameInvite';
import Home from '../pages/Home/index.routes';
import Lobby from '../pages/Lobby';
import Profile from '../pages/Profile/index.routes';
import Register from '../pages/Register/index.routes';

// Styles
import { withTheme } from 'styled-components';

// Types
import { IThemedComponent } from '../interfaces/theme/ThemedComponent';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const GameRoutes: React.FC<IThemedComponent> = ({ theme }) => {
  const { game, loading } = useGameData();

  if (loading) return <AppLoading />;

  if (game)
    return (
      <>
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
      </>
    );

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Lobby" component={Lobby} />
        <Stack.Screen name="GameInvite" component={GameInvite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withTheme(GameRoutes);
