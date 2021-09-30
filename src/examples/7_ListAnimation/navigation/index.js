import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const StackAnimations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen component={Home} name="HomeList" />
      <Stack.Screen component={Details} name="DetailsList" />
    </Stack.Navigator>
  );
};

export default StackAnimations;
