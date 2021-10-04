import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import ExplainScrollView from '../screens/ExplainScrollView';

const Stack = createStackNavigator();

const StackAnimations = () => {
  return (
    <Stack.Navigator
      initialRouteName="DetailsList"
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen component={Home} name="HomeList" />
      <Stack.Screen component={Details} name="DetailsList" />
      <Stack.Screen component={ExplainScrollView} name="ExplainScrollView" />
    </Stack.Navigator>
  );
};

export default StackAnimations;
