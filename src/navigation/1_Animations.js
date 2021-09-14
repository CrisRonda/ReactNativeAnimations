import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@1_Animations/screens/Home';

const Stack = createStackNavigator();

const StackAnimations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen component={HomeScreen} name="1HomeScreen" />
    </Stack.Navigator>
  );
};

export default StackAnimations;
