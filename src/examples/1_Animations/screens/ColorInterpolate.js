import React, {useState} from 'react';
import {StyleSheet, Switch, Dimensions} from 'react-native';
import Text from '@components/Text';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');
const RADIUS = width * 0.7;

const Colors = {
  dark: {
    background: '#FF000081',
    circle: '#253BB9',
    text: '#78D400',
  },
  light: {
    background: '#5900FF',
    circle: '#FF9D00',
    text: '#B30B0B',
  },
};
const ColorInterpolate = () => {
  const [isDark, setDark] = useState(false);
  /*
   ** useDerivedValue is used when we need add logic in our shared value
   ** more info here: https://docs.swmansion.com/react-native-reanimated/docs/2.1.0/api/useDerivedValue/
   */
  const progress = useDerivedValue(() => {
    return isDark
      ? withTiming(1, {duration: 999})
      : withTiming(0, {duration: 999});
  }, [isDark]);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background],
    );
    return {backgroundColor};
  });
  const animatedCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle],
    );
    return {backgroundColor};
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text],
    );
    return {color};
  });
  return (
    <Animated.View style={[style.container, animatedStyle]}>
      <Text variant="h2" mb={62} animated style={animatedTextStyle}>
        Color Interpolate Example
      </Text>
      <Animated.View style={[style.circle, animatedCircleStyle]}>
        <Switch
          value={isDark}
          onChange={toggle => setDark(bef => !bef)}
          trackColor="green"
          thumbColor="orange "
        />
      </Animated.View>
    </Animated.View>
  );
};

export default ColorInterpolate;
const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  circle: {
    width: RADIUS,
    height: RADIUS,
    borderRadius: RADIUS / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 20, height: 20},
    shadowOpacity: 0.3,
    backgroundColor: 'pink',
    shadowRadius: 12,
    elevation: 5,
  },
});
