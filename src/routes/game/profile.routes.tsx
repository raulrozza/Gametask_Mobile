import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Components
import PlayerProfile from '../../pages/Profile/PlayerProfile';
import AchievementRegister from '../../pages/Profile/AchievementRegister';
import AchievementDetails from '../../pages/Profile/Achievement';

const Stack = createStackNavigator();

const Profile: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="playerProfile" component={PlayerProfile} />
      <Stack.Screen name="achievementDetails" component={AchievementDetails} />
      <Stack.Screen
        name="achievementRegister"
        component={AchievementRegister}
      />
    </Stack.Navigator>
  );
};

export default Profile;
