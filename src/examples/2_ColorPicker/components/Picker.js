import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const RADIUS_DOT = 25;
const RADIUS_INTERNAL_DOT = RADIUS_DOT * 0.8;
const Picker = ({colors, style, end, start, width, onColorChange}) => {
  const panRef = useRef();
  const tapRef = useRef();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const adjustX = useDerivedValue(() => {
    return Math.min(
      Math.max(translateX.value, -RADIUS_DOT / 2),
      width - RADIUS_DOT * 2,
    );
  });
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      translateY.value = withSpring(-3 * RADIUS_DOT);
      scale.value = withSpring(1.2);
    },
    onActive: (event, ctx) => {
      translateX.value = event.translationX + ctx.x;
    },
    onEnd: () => {
      translateY.value = withSpring(0);
      scale.value = withSpring(1);
    },
  });
  const tapGestureEvent = useAnimatedGestureHandler({
    onStart: event => {
      translateY.value = withSpring(-3 * RADIUS_DOT);
      scale.value = withSpring(1.2);
      translateX.value = withTiming(event.absoluteX - 2 * RADIUS_DOT);
    },
    onEnd: () => {
      translateY.value = withSpring(0);
      scale.value = withSpring(1);
    },
  });
  const animatedInternalDotStyle = useAnimatedStyle(() => {
    const inputRange = colors.map(
      (_, index) => ((index + 1) / colors.length) * width,
    );
    const backgroundColor = interpolateColor(
      translateX.value,
      inputRange,
      colors,
    );
    onColorChange?.(backgroundColor);
    return {backgroundColor};
  });
  const animatedDotStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: adjustX.value},
        {translateY: translateY.value},
        {scale: scale.value},
      ],
    };
  });
  return (
    <TapGestureHandler
      // maxDelayMs={490}
      // ref={tapRef}
      // simultaneousHandlers={[panRef]}
      onGestureEvent={tapGestureEvent}>
      <Animated.View>
        <PanGestureHandler
          // ref={panRef}
          // simultaneousHandlers={[tapRef]}
          onGestureEvent={gestureHandler}>
          <Animated.View style={styles.container}>
            <LinearGradient
              colors={colors}
              style={[style, {width}]}
              start={start}
              end={end}
            />
            <Animated.View style={[styles.dot, animatedDotStyle]}>
              <Animated.View
                style={[styles.internalPicker, animatedInternalDotStyle]}
              />
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default Picker;
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  dot: {
    position: 'absolute',
    width: 2 * RADIUS_DOT,
    height: 2 * RADIUS_DOT,
    borderRadius: RADIUS_DOT,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  internalPicker: {
    width: 2 * RADIUS_INTERNAL_DOT,
    height: 2 * RADIUS_INTERNAL_DOT,
    borderRadius: RADIUS_INTERNAL_DOT,
  },
});
