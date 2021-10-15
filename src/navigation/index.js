import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackAnimations from './1_Animations';
import SinkScreen from '@sink';
import {useTheme} from '@theme';
import Icon from '@components/Icon';
import ColorPicker from '@2_ColorPicker';
import Video from '@examples/3_Video/navigation';
import CardTransition from '@examples/4_CardTransition';
import Yoga from '@examples/5_Yoga';
import DVDAnimation from '@examples/6_DVDAnimation';
import ListAnimation from '@examples/7_ListAnimation/navigation';
import GalleryApp from '@examples/8_GalleryApp/navigation';
import BigList from '@examples/9_BigList';
import Onboarding from '@examples/10_LiquidAnimation/screens/Onboarding';
import WebVideo from '@examples/WebViewVideo';

const MainDrawer = createDrawerNavigator();
const buildOptions = ({name, icon, set}) => ({
  drawerIcon: () => <Icon name={icon} set={set} />,
  drawerLabel: name,
});

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const MainNavigation = () => {
  const {colors, pxToDp} = useTheme();
  const {background, grey, primary, text} = colors;

  return (
    <NavigationContainer theme={navTheme}>
      <MainDrawer.Navigator
        initialRouteName="StackAnimations"
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
          header: ({route}) => {
            if (route.name === 'Video') {
              return null;
            }
          },
        }}>
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
          component={WebVideo}
          name="WebVideo"
          options={buildOptions({
            name: 'Web Video',
            icon: 'select1',
            set: 'AntDesign',
          })}
        />
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
        <MainDrawer.Screen
          component={Video}
          name="Video"
          options={buildOptions({
            name: 'Video',
            icon: 'ios-color-palette-sharp',
            set: 'Ionicons',
          })}
        />
        <MainDrawer.Screen
          component={ListAnimation}
          name="ListAnimation"
          options={buildOptions({
            name: 'List Animation',
            icon: 'ios-color-palette-sharp',
            set: 'Ionicons',
          })}
        />
        <MainDrawer.Screen
          component={GalleryApp}
          name="GalleryApp"
          options={buildOptions({
            name: 'Gallery',
            icon: 'ios-color-palette-sharp',
            set: 'Ionicons',
          })}
        />
        <MainDrawer.Screen
          component={BigList}
          name="BigList"
          options={buildOptions({
            name: 'Big List',
            icon: 'ios-color-palette-sharp',
            set: 'Ionicons',
          })}
        />
        <MainDrawer.Screen
          component={Onboarding}
          name="Onboarding"
          options={buildOptions({
            name: 'Liquid animation',
            icon: 'ios-color-palette-sharp',
            set: 'Ionicons',
          })}
        />
      </MainDrawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
