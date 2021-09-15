import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Container from '@components/Container';
const SIZE = 100;
const RADIUS = SIZE * 3;

const PanGesture = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  /*
   ** Reanimated provides hook useAnimatedGestureHandler, it has a context to
   ** save our owns variables for example here save translateX and translateY
   ** values.
   ** More info in docs: https://docs.swmansion.com/react-native-reanimated/docs/2.3.0-alpha.2/api/useAnimatedGestureHandler/
   */
  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      const currentValueX = event.translationX + context.translateX;
      const currentValueY = event.translationY + context.translateY;
      // Pythagoras theoreme
      const distance = Math.sqrt(currentValueX ** 2 + currentValueY ** 2);
      if (distance > RADIUS / 2 - SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        return;
      } else {
        translateX.value = currentValueX;
        translateY.value = currentValueY;
      }
    },
    onEnd: () => {
      //   translateX.value = withSpring(0);
      //   translateY.value = withSpring(0);
    },
  });
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  }, []);
  return (
    <Container style={style.container}>
      <View style={style.circle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[style.square, reanimatedStyle]} />
        </PanGestureHandler>
      </View>
    </Container>
  );
};

export default PanGesture;
const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'cyan',
    borderRadius: 23,
  },
  circle: {
    width: RADIUS,
    height: RADIUS,
    borderRadius: RADIUS / 2,
    borderWidth: 2,
    borderColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
