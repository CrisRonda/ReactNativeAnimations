import React from 'react';
import {CardStyleInterpolators} from '@react-navigation/stack';

import Home from '../screens/Home';
import Details from '../screens/Video';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
const Stack = createSharedElementStackNavigator();

const StackAnimations = () => {
  return (
    <Stack.Navigator
      initialRouteName="DetailsList"
      detachInactiveScreens={false}
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardOverlayEnabled: true,
        cardStyle: {backgroundColor: 'transparent'},
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
      <Stack.Screen component={Home} name="HomeGallery" />
      <Stack.Screen
        component={Details}
        name="DetailsGallery"
        sharedElements={route => {
          const {id = ''} = route.params;
          return [`story-${id}.cover`];
        }}
      />
    </Stack.Navigator>
  );
};

export default StackAnimations;
