import {StyleSheet} from 'react-native';
import {pxToDp} from './lib';
const bold = 'System';
const medium = 'System';
const semiBold = 'System';
const regular = 'System';
const light = 'System';

const typography = StyleSheet.create({
  h1: {
    fontFamily: bold,
    fontSize: pxToDp(120),
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: 'bold',
    letterSpacing: 0,
  },
  h2: {
    fontFamily: medium,
    fontSize: pxToDp(90),
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: '500',
    letterSpacing: 0,
  },
  h3: {
    fontFamily: medium,
    fontSize: pxToDp(80),
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: '500',
    letterSpacing: 0,
  },
  h4: {
    fontFamily: medium,
    fontSize: pxToDp(70),
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: '500',
    letterSpacing: 0,
  },
  h5: {
    fontFamily: semiBold,
    fontSize: pxToDp(60),
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: '600',
    letterSpacing: 0,
  },
  button1: {
    fontFamily: bold,
    fontSize: pxToDp(38),
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: '700',
    letterSpacing: 0,
  },
  button2: {
    fontFamily: regular,
    fontSize: pxToDp(32),
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: '400',
    lineHeight: pxToDp(47),
    letterSpacing: 0,
  },
  body1: {
    fontFamily: medium,
    fontSize: pxToDp(32),
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: '500',
  },
  body2: {
    fontFamily: light,
    fontSize: pxToDp(28),
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: '300',
  },
  body3: {
    fontFamily: light,
    fontSize: pxToDp(24),
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: '300',
    textDecorationLine: 'line-through',
  },
  body4: {
    fontFamily: light,
    fontSize: pxToDp(24),
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: '300',
  },
});

export default typography;
