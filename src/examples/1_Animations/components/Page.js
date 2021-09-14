import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {useTheme} from '@theme';
import {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import Text from '@components/Text';

const randomColor = colors => {
  const randomIndex = Math.floor(Math.random() * (colors.length - 0 + 1) + 0);
  return colors[randomIndex];
};
const {width, height} = Dimensions.get('window');
const SIZE = width * 0.7;

const buildInterpolate = ({value, index, outputRange}) => {
  'worklet';
  return interpolate(
    value,
    [(index - 1) * width, index * width, (index + 1) * width],
    outputRange,
    Extrapolate.CLAMP,
  );
};

const Page = ({title, index, translateX}) => {
  const {colors} = useTheme();
  const animatedStyle = useAnimatedStyle(() => {
    const scale = buildInterpolate({
      value: translateX.value,
      index,
      outputRange: [0, 1, 0],
    });
    const borderRadius = buildInterpolate({
      value: translateX.value,
      index,
      outputRange: [0, SIZE / 2, 0],
    });
    return {
      borderRadius,
      transform: [{scale}],
    };
  }, []);
  const animatedTextStyle = useAnimatedStyle(() => {
    const translateY = buildInterpolate({
      value: translateX.value,
      index,
      outputRange: [height / 2, 1, -height / 2],
    });
    const opacity = buildInterpolate({
      value: translateX.value,
      index,
      outputRange: [0, 1, 0],
    });
    return {
      opacity,
      transform: [{translateY}],
    };
  });
  const backgroundColor = randomColor(colors.avatarBackgrounds);
  return (
    <View style={[style.container, {backgroundColor}]}>
      <Animated.View style={[style.square, animatedStyle]} />
      <Animated.View style={[style.wordContainer, animatedTextStyle]}>
        <Text variant="h1" textSize={293}>
          {title}
        </Text>
      </Animated.View>
    </View>
  );
};

export default Page;
const style = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {height: SIZE, width: SIZE, backgroundColor: '#25A8CF'},
  wordContainer: {
    position: 'absolute',
  },
});
