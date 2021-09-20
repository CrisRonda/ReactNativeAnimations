import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
const {width} = Dimensions.get('window');
const ratio = 9 / 16;

export const mix = (value, x, y) => {
  'worklet';
  return y * value;
};

export const CARD_WIDTH = width * 0.5;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

const Card = ({transition, cards, index, origin, backgroundColor}) => {
  const style = useAnimatedStyle(() => {
    const rotate =
      (index - 2) * mix(transition.value, 0, Math.PI / cards.length);

    return {
      transform: [
        {translateX: origin.x},
        {rotate: `${rotate}rad`},
        {translateX: -origin.x},
      ],
    };
  });
  return (
    <Animated.View style={[styles.overlay, style]}>
      <View style={[styles.card, {backgroundColor}]} />
    </Animated.View>
  );
};

export default Card;
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 34,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
  },
});
