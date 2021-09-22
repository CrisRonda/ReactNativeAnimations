import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@theme';
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Text from '@components/Text';
import Icon from '@components/Icon';

const Title = ({
  index,
  width,
  scrollX,
  title,
  rating,
  styleScreen,
  genres = [],
  ...rest
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];
    const translateY = interpolate(
      scrollX.value,
      inputRange,
      [-50, 0, 50],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    return {
      opacity,
      transform: [{translateY: translateY}],
    };
  }, []);

  return (
    <Animated.View style={[styleScreen.containerText, animatedStyle]}>
      <View style={styleScreen.containerStats}>
        <Text
          color="white.main"
          variant="h1"
          numberOfLines={1}
          adjustsFontSizeToFit
          style={styleScreen.title}>
          {title}
        </Text>
        <View flexDirection="row" justifyContent="center" alignItems="center">
          <Icon name="heart" color="red" />
          <Text
            color="white.main"
            variant="h5"
            numberOfLines={1}
            adjustsFontSizeToFit
            ml={16}>
            {rating}
          </Text>
        </View>
      </View>
      <Text color="white.dark" variant="h5">
        {genres.join(' - ')}
      </Text>
    </Animated.View>
  );
};

const TitleMovie = ({scrollX, data, onPressIndicator}) => {
  const {dimensions, pxToDp, spacing, colors} = useTheme();
  const {width} = dimensions;
  const styleScreen = useMemo(
    () => styles({pxToDp, dimensions, spacing, colors}),
    [pxToDp, dimensions, spacing, colors],
  );

  return (
    <View style={styleScreen.root}>
      {data.map(({title, id, rating = 0, ...rest}, index) => (
        <Title
          key={`title-${id}`}
          index={index}
          styleScreen={styleScreen}
          width={width}
          scrollX={scrollX}
          onPressIndicator={onPressIndicator}
          title={title}
          rating={rating}
          {...rest}
        />
      ))}
    </View>
  );
};

const styles = ({colors, spacing, pxToDp, dimensions}) =>
  StyleSheet.create({
    root: {
      position: 'absolute',
      bottom: 0,
      zIndex: 3,
      width: dimensions.width,
      flexDirection: 'column',
    },
    title: {width: '80%'},
    containerText: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      padding: spacing.medium,
      alignItems: 'center',
    },
    containerStats: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default TitleMovie;
