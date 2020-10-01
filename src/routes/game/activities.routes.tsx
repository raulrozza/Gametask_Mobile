import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import ActivityList from '../../pages/Activities/ActivityList';
import ActivityRegister from '../../pages/Activities/ActivityRegister';

const Stack = createStackNavigator();

const RegisterRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="activityList" component={ActivityList} />
      <Stack.Screen name="activityRegister" component={ActivityRegister} />
    </Stack.Navigator>
  );
};

export default RegisterRoutes;
