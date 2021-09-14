import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackAnimations from './1_Animations';
import SinkScreen from '@sink';
const MainStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          header: () => null,
        }}>
        <MainStack.Screen component={SinkScreen} name="SinkScreen" />
        <MainStack.Screen component={StackAnimations} name="StackAnimations" />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
