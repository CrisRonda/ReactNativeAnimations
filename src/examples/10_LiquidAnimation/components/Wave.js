import React from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import Svg, {Path} from 'react-native-svg';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {HEIGHT, MARGIN_WIDTH, MIN_LEDGE, Side, WIDTH} from '../lib';
import {clamp, vec2} from 'react-native-redash';

const curve = (c1, c2, to) => {
  'worklet';
  return `C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y}`;
};
const AnimatedPath = Animated.createAnimatedComponent(Path);

const Wave = ({side, children, position, isTransitioning}) => {
  const R = useDerivedValue(() => {
    return Math.min(position.x.value - MIN_LEDGE, WIDTH);
  });
  console.log(children.props);
  const ledge = useDerivedValue(() => {
    const minLedge = interpolate(
      position.x.value,
      [0, MIN_LEDGE],
      [0, MIN_LEDGE],
      Extrapolate.CLAMP,
    );
    const baseLedge =
      minLedge + Math.max(0, position.x.value - MIN_LEDGE - R.value);
    return withSpring(isTransitioning.value ? position.x.value : baseLedge);
  });
  const animatedProps = useAnimatedProps(() => {
    const stepX = R.value / 2;
    const stepY = Math.max(position.x.value, MARGIN_WIDTH - MIN_LEDGE);

    // 0.5522847498 is taken from https://spencermortensen.com/articles/bezier-circle/
    const C = stepY * 0.5522847498;

    const p1 = {x: ledge.value * 2, y: position.y.value - 2 * stepY};
    const p2 = vec2(p1.x + stepX, p1.y + stepY);
    const p3 = vec2(p2.x + stepX, p2.y + stepY);
    const p4 = vec2(p3.x - stepX, p3.y + stepY);
    const p5 = vec2(p4.x - stepX, p4.y + stepY);

    const c11 = vec2(p1.x, p1.y + C);
    const c12 = vec2(p2.x, p2.y);

    const c21 = vec2(p2.x, p2.y);
    const c22 = vec2(p3.x, p3.y - C);

    const c31 = vec2(p3.x, p3.y + C);
    const c32 = vec2(p4.x, p4.y);

    const c41 = vec2(p4.x, p4.y);
    const c42 = vec2(p5.x, p5.y - C);

    const d = [
      'M 0 0',
      `H ${p1.x}`,
      `V ${p1.y}`,
      curve(c11, c12, p2),
      curve(c21, c22, p3),
      curve(c31, c32, p4),
      curve(c41, c42, p5),
      `V ${HEIGHT}`,
      'H 0',
      'Z',
    ];
    return {d: d.join(' ')};
  });
  const maskElement = (
    <Svg
      style={[
        StyleSheet.absoluteFill,
        {
          // zIndex: side === Side.RIGHT ? 12 : side === Side.LEFT ? 11 : 8,
          transform: [{rotateY: side === Side.RIGHT ? '180deg' : '0deg'}],
        },
      ]}>
      <AnimatedPath
        fill={Platform.OS === 'android' ? children.props.slide.color : 'black'}
        animatedProps={animatedProps}
      />
    </Svg>
  );
  const androidStyle = useAnimatedStyle(() => {
    const translateX =
      side === Side.RIGHT ? WIDTH - ledge.value : -WIDTH + ledge.value;
    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  });
  if (Platform.OS === 'android') {
    return (
      <View style={StyleSheet.absoluteFill}>
        {maskElement}
        <Animated.View style={[StyleSheet.absoluteFill, androidStyle]}>
          {children}
        </Animated.View>
      </View>
    );
  }
  return (
    <>
      <MaskedView
        maskElement={maskElement}
        style={StyleSheet.absoluteFillObject}>
        {children}
      </MaskedView>
    </>
  );
};

export default Wave;
