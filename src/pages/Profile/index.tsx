import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import PlayerProfile from '../../components/PlayerProfile';

const Stack = createStackNavigator();

const Profile: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="playerProfile" component={PlayerProfile} />
    </Stack.Navigator>
  );
};

export default Profile;
