import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@1_Animations/screens/Home';
import InfiniteAnimation from '@1_Animations/screens/InfiniteAnimation';
import ScrollAnimation from '@1_Animations/screens/ScrollAnimation';

const Stack = createStackNavigator();

const StackAnimations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen component={HomeScreen} name="1HomeScreen" />
      <Stack.Screen component={InfiniteAnimation} name="InfiniteAnimation" />
      <Stack.Screen component={ScrollAnimation} name="ScrollAnimation" />
    </Stack.Navigator>
  );
};

export default StackAnimations;
