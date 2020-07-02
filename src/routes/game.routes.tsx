import React from 'react';
import { AppLoading } from 'expo';
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Contexts
import { useGame } from '../contexts/Game';

// Pages
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

// Utils
import { useTheme } from '../contexts/Theme';

const Tab = createBottomTabNavigator();

const GameRoutes: React.FC = () => {
  const { theme } = useTheme();
  const { loading } = useGame();

  if (loading) return <AppLoading />;

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
};

export default GameRoutes;
