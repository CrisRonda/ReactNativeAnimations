import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {MAX_HEIGHT, MIN_HEIGHT} from '../../lib';
import Text from '@components/Text';
const AnimatedImage = Animated.createAnimatedComponent(FastImage);
const CardImage = ({
  coverImage,
  title,
  subtitile,
  animatedY,
  index,
  lengthItems,
}) => {
  const inputRange = [index * MIN_HEIGHT, (index + 1) * MIN_HEIGHT];

  const firstAnimatedStyle = useAnimatedStyle(() => {
    if (animatedY.value - lengthItems * MIN_HEIGHT >= 0) {
      return {};
    }
    const height = interpolate(
      animatedY.value,
      inputRange,
      [102, 0],
      Extrapolate.CLAMP,
    );
    const top = interpolate(
      animatedY.value,
      inputRange,
      [0, -MAX_HEIGHT],
      Extrapolate.CLAMP,
    );
    return {
      top,
      height: `${height}%`,
    };
  });
  const textAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      animatedY.value,
      [(index - 1) * MIN_HEIGHT, index * MIN_HEIGHT, (index + 1) * MIN_HEIGHT],
      [100, 0, -100],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{translateY}],
    };
  });
  return (
    <Animated.View
      style={[styles.container, {zIndex: 15 - index}, firstAnimatedStyle]}>
      <AnimatedImage
        source={{uri: coverImage}}
        style={[styles.image]}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text
        animated
        color="grey.light"
        variant="h3"
        ml={64}
        style={textAnimatedStyle}>
        {title}
      </Text>
      <Text
        animated
        color="primary.dark"
        variant="button1"
        ml={64}
        mb={16}
        style={textAnimatedStyle}>
        {subtitile}
      </Text>
    </Animated.View>
  );
};

export default CardImage;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    top: 0,
    left: 0,
    backgroundColor: 'gray',
    width: '100%',
    height: MAX_HEIGHT + 12,
    justifyContent: 'flex-end',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '101%',
  },
});
