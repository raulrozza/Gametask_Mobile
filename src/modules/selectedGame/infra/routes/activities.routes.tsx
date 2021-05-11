import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import Activities from 'modules/selectedGame/view/pages/Activities';
import RequestActivity from 'modules/selectedGame/view/pages/RequestActivity';

const Stack = createStackNavigator();

const ActivitiesRoutes: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="activityList" component={Activities} />
    <Stack.Screen name="requestActivity" component={RequestActivity} />
  </Stack.Navigator>
);

export default ActivitiesRoutes;
