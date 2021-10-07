import Color from 'color';
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import Svg, {RadialGradient, Defs, Rect, Stop} from 'react-native-svg';
import Text from '@components/Text';
import Animated from 'react-native-reanimated';
const {width, height} = Dimensions.get('screen');
const SIZE = width - 75;

const Slide = ({slide: {picture, color, title, description}, style}) => {
  // const lighterColor = Color(color).lighten(0.5).toString();
  // const darkerColor = Color(color).darken(0.25).toString();
  return (
    <Animated.View style={[StyleSheet.absoluteFill, style]}>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="55%">
            <Stop offset="0%" stopColor={color} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>
      <View style={styles.container}>
        <FastImage source={{uri: picture}} style={styles.image} />
        <View>
          <Text color="white.main" variant="h1">
            {title}
          </Text>
          <Text color="white.main" variant="button-2">
            {description}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: 75,
    paddingTop: 150,
    alignItems: 'center',
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
});
