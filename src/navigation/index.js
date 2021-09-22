import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackAnimations from './1_Animations';
import SinkScreen from '@sink';
import {useTheme} from '@theme';
import Icon from '@components/Icon';
import ColorPicker from '@2_ColorPicker';
import CardTransition from '@examples/4_CardTransition';
import Yoga from '@examples/5_Yoga';
import DVDAnimation from '@examples/6_DVDAnimation';

const MainDrawer = createDrawerNavigator();
const buildOptions = ({name, icon, set}) => ({
  drawerIcon: () => <Icon name={icon} set={set} />,
  drawerLabel: name,
});
const MainNavigation = () => {
  const {colors, pxToDp} = useTheme();
  const {background, grey, primary, text} = colors;

  return (
    <NavigationContainer>
      <MainDrawer.Navigator
        initialRouteName="DVDAnimation"
        screenOptions={{
          drawerStyle: {
            backgroundColor: background,
          },
          headerStyle: {
            backgroundColor: background,
          },
          headerTitleStyle: {
            color: text,
          },
          drawerLabelStyle: {
            color: text,
          },
          drawerActiveTintColor: primary.main,
          overlayColor: `${primary.light}44`,
          drawerInactiveTintColor: grey.main,
          drawerItemStyle: {
            padding: pxToDp(16),
          },
        }}>
        <MainDrawer.Screen
          component={SinkScreen}
          name="SinkScreen"
          options={buildOptions({
            name: 'Sink',
            icon: 'select1',
            set: 'AntDesign',
          })}
        />
        <MainDrawer.Screen
          component={StackAnimations}
          name="StackAnimations"
          options={buildOptions({
            name: 'Basics',
            icon: 'bulb1',
            set: 'AntDesign',
          })}
        />
        <MainDrawer.Screen
          component={ColorPicker}
          name="ColorPicker"
          options={buildOptions({
            name: 'Color Picker',
            icon: 'ios-color-palette-sharp',
            set: 'Ionicons',
          })}
        />
        <MainDrawer.Screen
          component={CardTransition}
          name="CardTransition"
          options={buildOptions({
            name: 'Card Transition',
            icon: 'ios-color-palette-sharp',
            set: 'Ionicons',
          })}
        />
        <MainDrawer.Screen
          component={Yoga}
          name="Yoga"
          options={buildOptions({
            name: 'Yoga',
            icon: 'ios-color-palette-sharp',
            set: 'Ionicons',
          })}
        />
        <MainDrawer.Screen
          component={DVDAnimation}
          name="DVDAnimation"
          options={buildOptions({
            name: 'DVDAnimation',
            icon: 'ios-color-palette-sharp',
            set: 'Ionicons',
          })}
        />
      </MainDrawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
