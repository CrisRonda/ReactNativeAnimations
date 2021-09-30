import React from 'react';
import {StyleSheet} from 'react-native';
import Text from '@components/Text';
import FastImage from 'react-native-fast-image';
import {useTheme} from '@theme';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {MAX_HEIGHT, MIN_HEIGHT} from '../../lib';

const AnimatedImage = Animated.createAnimatedComponent(FastImage);
const CategoryTile = ({
  title,
  subtitile,
  imageUrl,
  coverImage,
  animatedY,
  index,
}) => {
  const {dimensions, spacing} = useTheme();
  const screenStyle = styles({dimensions, spacing});
  const inputRange = [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT];
  const firstAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      animatedY.value,
      inputRange,
      [-MAX_HEIGHT, 0].reverse(),
      Extrapolate.CLAMP,
    );

    return {
      transform: [{translateY}],
    };
  });
  const secondAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animatedY.value,
      inputRange,
      [1, 0.5].reverse(),
      Extrapolate.CLAMP,
    );

    return {
      opacity,
    };
  });
  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        animatedY.value,
        inputRange,
        [MIN_HEIGHT, MAX_HEIGHT],
        Extrapolate.CLAMP,
      ),
    };
  });
  const titleAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(animatedY.value, inputRange, [0, 1]);
    return {
      opacity,
    };
  });
  return (
    <Animated.View style={[screenStyle.container, containerAnimatedStyle]}>
      <AnimatedImage
        source={{uri: imageUrl}}
        style={[screenStyle.image, secondAnimatedStyle]}
        resizeMode={FastImage.resizeMode.cover}
      />
      <AnimatedImage
        source={{uri: coverImage}}
        style={[screenStyle.image, firstAnimatedStyle]}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text color="grey.light" variant="h3">
        {title}
      </Text>
      <Text
        animated
        color="primary.dark"
        variant="button1"
        style={titleAnimatedStyle}>
        {subtitile}
      </Text>
    </Animated.View>
  );
};

export default CategoryTile;

const styles = ({dimensions, spacing}) =>
  StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      width: '100%',
      height: dimensions.height / 2.5,
      paddingHorizontal: spacing.extraLarge,
      paddingBottom: spacing.medium,
      overflow: 'hidden',
    },
    image: {...StyleSheet.absoluteFillObject},
  });
