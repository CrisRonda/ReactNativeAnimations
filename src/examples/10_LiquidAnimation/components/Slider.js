import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {snapPoint} from 'react-native-redash';
import {HEIGHT, MARGIN_WIDTH, MIN_LEDGE, Side, WIDTH} from '../lib';
import Wave from './Wave';
const PREV = WIDTH;
const NEXT = 0;
const LEFT_SNAP_POINTS = [MARGIN_WIDTH, PREV];
const RIGHT_SNAP_POINTS = [NEXT, WIDTH - MARGIN_WIDTH];

const Slider = ({
  index,
  children: current,
  prev,
  next,
  setIndex,
  left,
  right,
  activeSlide,
}) => {
  const hasPrev = !!prev;
  const hasNext = !!next;
  const zIndex = useSharedValue(0);
  const isTransitioningLeft = useSharedValue(false);
  const isTransitioningRight = useSharedValue(false);

  const eventEventHandler = useAnimatedGestureHandler({
    onStart: ({x}) => {
      if (x < MARGIN_WIDTH && hasPrev) {
        zIndex.value = 100;
        activeSlide.value = Side.LEFT;
      } else if (x > WIDTH - MARGIN_WIDTH && hasNext) {
        activeSlide.value = Side.RIGHT;
      } else {
        activeSlide.value = Side.NONE;
      }
    },
    onActive: ({x, y}) => {
      if (activeSlide.value === Side.LEFT) {
        left.x.value = Math.max(x, MARGIN_WIDTH);
        left.y.value = y;
      } else if (activeSlide.value === Side.RIGHT) {
        right.x.value = Math.max(WIDTH - x, MARGIN_WIDTH);
        right.y.value = y;
      }
    },
    onEnd: ({velocityY, velocityX, x}) => {
      if (activeSlide.value === Side.LEFT) {
        const dest = snapPoint(x, velocityX, LEFT_SNAP_POINTS);
        isTransitioningLeft.value = dest === PREV;
        left.y.value = withSpring(HEIGHT / 2, {velocity: velocityY});
        left.x.value = withSpring(
          dest,
          {
            velocity: velocityX,
            overshootClamping: isTransitioningLeft.value ? true : false,
            restSpeedThreshold: isTransitioningLeft.value ? 100 : 0.01,
            restDisplacementThreshold: isTransitioningLeft.value ? 100 : 0.01,
          },
          () => {
            if (isTransitioningLeft.value) {
              right.x.value = 0;
              left.x.value = 0;
              runOnJS(setIndex)(index - 1);
            } else {
              zIndex.value = 0;
              activeSlide.value = Side.NONE;
            }
          },
        );
      } else if (activeSlide.value === Side.RIGHT) {
        const dest = snapPoint(x, velocityX, RIGHT_SNAP_POINTS);
        isTransitioningRight.value = dest === NEXT;
        right.y.value = withSpring(HEIGHT / 2, {velocity: velocityY});
        right.x.value = withSpring(
          WIDTH - dest,
          {
            velocity: velocityX,
            overshootClamping: isTransitioningRight.value ? true : false,
            restSpeedThreshold: isTransitioningRight.value ? 100 : 0.01,
            restDisplacementThreshold: isTransitioningRight.value ? 100 : 0.01,
          },
          () => {
            if (isTransitioningRight.value) {
              left.x.value = 0;
              right.x.value = 0;
              runOnJS(setIndex)(index + 1);
            } else {
              activeSlide.value = Side.NONE;
            }
          },
        );
      }
    },
  });

  useEffect(() => {
    left.x.value = withSpring(MIN_LEDGE);
    right.x.value = withSpring(MIN_LEDGE);
  }, [left, right, index]);

  const leftAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      left.x.value,
      LEFT_SNAP_POINTS,
      activeSlide.value === Side.LEFT ? [0, 1] : [1, 0],
    );
    return {
      opacity,
      zIndex: zIndex.value,
    };
  });

  return (
    <PanGestureHandler onGestureEvent={eventEventHandler}>
      <Animated.View style={StyleSheet.absoluteFill}>
        {current}
        {prev && (
          <Wave
            side={Side.LEFT}
            position={left}
            style={leftAnimatedStyle}
            isTransitioning={isTransitioningLeft}>
            {prev}
          </Wave>
        )}
        {next && (
          <Wave
            side={Side.RIGHT}
            position={right}
            isTransitioning={isTransitioningRight}>
            {next}
          </Wave>
        )}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Slider;
