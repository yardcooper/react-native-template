import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import SampleScreenOne from './screens/SampleScreenOne';
import SampleScreenTwo from './screens/SampleScreenTwo';

const Stack = createStackNavigator();

export type AppStackParamList = {
  SampleOne: undefined;
  SampleTwo: undefined;
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SampleOne" component={SampleScreenOne} />
        <Stack.Screen name="SampleTwo" component={SampleScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
