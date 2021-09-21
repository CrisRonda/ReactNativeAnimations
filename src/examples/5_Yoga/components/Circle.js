import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {clamp, mix, polar2Canvas} from 'react-native-redash';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');
const SIZE = width / 2;
// function that transform
const transform = (theta, value) => {
  'worklet';
  // convert in f(theta, r) = [r*Cos(theta) , r*sin(theta)] in fucntion center
  // r is the limit of the screen
  const {x, y} = polar2Canvas({theta, radius: SIZE / 2}, {x: 0, y: 0});
  // smooth the animation
  const translateX = mix(value, 0, x);
  const translateY = mix(value, 0, y);
  // translation to the new coordinates in x and y, we also add an increase in the scale
  return [{translateX}, {translateY}, {scale: mix(value, 0.2, 1)}];
};

const Circle = ({progress, goesDown, index, totalCicles}) => {
  // divide the canvas in 2PI/N, where N is total of elements
  const theta = (index * (2 * Math.PI)) / totalCicles;

  const style = useAnimatedStyle(() => {
    return {
      transform: transform(theta, progress.value),
    };
  });
  const style1 = useAnimatedStyle(() => {
    //   clamp => value, lowerValue, upperValue
    const value = goesDown.value
      ? clamp(progress.value + 0.1, 0, 1)
      : progress.value;
    // show when the circle is up when progress > .6
    // translation to the new coordinates in x and y, we also add an descrese in the scale
    return {
      opacity: interpolate(value, [0.6, 1], [0, 1], Extrapolate.CLAMP),
      transform: transform(theta, value),
    };
  });
  return (
    <>
      <Animated.View style={[styles.container, style1]}>
        <LinearGradient colors={['#425511', '#9E9518']} style={styles.circle} />
      </Animated.View>
      <Animated.View style={[styles.container, style]}>
        <LinearGradient colors={['#AC4A09', '#529CA0']} style={styles.circle} />
      </Animated.View>
    </>
  );
};

export default Circle;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    opacity: 0.5,
  },
});
