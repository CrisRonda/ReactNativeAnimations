import React from 'react';
import Container from '@components/Container';
import FastImage from 'react-native-fast-image';
import {StyleSheet, Dimensions} from 'react-native';
import {PinchGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');
const HALF_WIDTH = width / 2;
const HALF_HEIGHT = height / 2;
const AnimatedImage = Animated.createAnimatedComponent(FastImage);

// Docs here: https://docs.swmansion.com/react-native-gesture-handler/docs/api/gesture-handlers/pinch-gh/
const imageUrl =
  'https://res.cloudinary.com/dzh1db41l/image/upload/v1631725161/quito_f4zfqr.jpg';
const PinchGesture = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchHandler = useAnimatedGestureHandler({
    onStart: () => {},
    onActive: event => {
      console.log(event);
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    },
    onEnd: () => {
      scale.value = withTiming(1);
    },
  });
  const animatedScale = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -HALF_WIDTH},
        {translateY: -HALF_HEIGHT},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: HALF_WIDTH},
        {translateY: HALF_HEIGHT},
      ],
    };
  });
  const animatedFocalPointScale = useAnimatedStyle(() => {
    return {
      transform: [{translateX: focalX.value}, {translateY: focalY.value}],
    };
  });
  return (
    <Container style={style.container}>
      <PinchGestureHandler onGestureEvent={pinchHandler}>
        <Animated.View style={[style.image]}>
          <AnimatedImage
            source={{uri: imageUrl}}
            style={[style.image, animatedScale]}
          />
          <Animated.View style={[style.focalPoint, animatedFocalPointScale]} />
        </Animated.View>
      </PinchGestureHandler>
    </Container>
  );
};

export default PinchGesture;
const style = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingHorizontal: 0,
    position: 'relative',
    zIndex: -1,
  },
  image: {flex: 1},
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 30,
    height: 30,
    borderRadius: 60,
    backgroundColor: '#58f212',
  },
});
