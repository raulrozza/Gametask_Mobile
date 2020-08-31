import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import PlayerProfile from './PlayerProfile';
import Achievement from './Achievement';
import AchievementRegister from './AchievementRegister';

const Stack = createStackNavigator();

const Profile: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="playerProfile" component={PlayerProfile} />
      <Stack.Screen name="achievementDetails" component={Achievement} />
      <Stack.Screen
        name="achievementRegister"
        component={AchievementRegister}
      />
    </Stack.Navigator>
  );
};

export default Profile;
