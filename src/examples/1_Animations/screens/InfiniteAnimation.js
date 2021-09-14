import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';
import Container from '@components/Container';
import {StyleSheet} from 'react-native';

const SIZE = 100;
const PI_2 = 2 * Math.PI;

/*
 * If we need a complex calculate function we need specify the
 * functions is a worklet like this
 *
 */

const handleRotate = value => {
  'worklet';
  return `${value * PI_2}rad`;
};

const ScreenMain = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      // opacity: progress.value,
      transform: [{scale: scale.value}, {rotate: handleRotate(progress.value)}],
      borderRadius: (progress.value * SIZE) / 2,
    };
  }, []);
  useEffect(() => {
    progress.value = withRepeat(
      withSpring(0.1, {mass: 20, velocity: 0.5}),
      -1,
      true,
    );
    scale.value = withRepeat(
      withSpring(2, {mass: 20, velocity: 0.5}),
      -1,
      true,
    );
  }, [progress, scale]);
  return (
    <Container style={style.container}>
      <Animated.View style={[style.square, reanimatedStyle]} />
    </Container>
  );
};
export default ScreenMain;

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'red',
  },
});
