import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@theme';
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Dot = ({index, styleScreen, width, scrollX, onPressIndicator}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];
    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.7, 1.5, 0.7],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.7, 1, 0.7],
      Extrapolate.CLAMP,
    );
    return {
      opacity,
      transform: [{scale}],
    };
  }, []);

  return (
    <TouchableOpacity onPress={() => onPressIndicator(index)}>
      <Animated.View style={[styleScreen.indicator, animatedStyle]} />
    </TouchableOpacity>
  );
};

const Dots = ({scrollX, data, onPressIndicator}) => {
  const {dimensions, pxToDp, spacing, colors} = useTheme();
  const {width} = dimensions;
  const styleScreen = useMemo(
    () => styles({pxToDp, dimensions, spacing, colors}),
    [pxToDp, dimensions, spacing, colors],
  );

  return (
    <View style={styleScreen.root}>
      <View flexDirection="row">
        {data.map(({id}, index) => (
          <Dot
            key={`dot-${id}`}
            index={index}
            styleScreen={styleScreen}
            width={width}
            scrollX={scrollX}
            onPressIndicator={onPressIndicator}
          />
        ))}
      </View>
    </View>
  );
};

const styles = ({colors, spacing, pxToDp}) =>
  StyleSheet.create({
    root: {
      position: 'absolute',
      justifyContent: 'flex-start',
      top: pxToDp(120),
      right: pxToDp(36),
      zIndex: 3,
    },
    indicator: {
      width: spacing.large,
      height: spacing.large,
      borderRadius: spacing.large / 2,
      backgroundColor: colors.white.dark,
      marginHorizontal: 8,
    },
  });

export default Dots;
