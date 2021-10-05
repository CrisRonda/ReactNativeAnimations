import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {SharedElement} from 'react-navigation-shared-element';
import {snapPoint} from 'react-native-redash';

const {height} = Dimensions.get('window');
const AnimatedImage = Animated.createAnimatedComponent(FastImage);

const Video = () => {
  const navigation = useNavigation();
  const {params = {}} = useRoute();

  const {poster, id} = params;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: ({translationX, translationY}) => {
      translateX.value = translationX;
      translateY.value = translationY;
    },
    onEnd: ({velocityX, velocityY}) => {
      // check if the gesture value and velocity are between 0 and height
      const canGoBack =
        snapPoint(translateY.value, velocityY, [0, height]) === height;

      if (canGoBack) {
        runOnJS(navigation.goBack)();
      } else {
        translateX.value = withSpring(0, {velocity: velocityX});
        translateY.value = withSpring(0, {velocity: velocityY});
      }
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateY.value,
      [0, height],
      [1, 0.5],
      Extrapolate.CLAMP,
    );
    const borderRadius = interpolate(
      translateY.value,
      [0, height],
      [0, 24],
      Extrapolate.CLAMP,
    );
    return {
      flex: 1,
      overflow: 'hidden',
      borderRadius,
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
        {scale},
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[animatedStyle]}>
        <SharedElement id={`story-${id}.cover`} style={{flex: 1}}>
          <AnimatedImage
            source={{uri: poster}}
            resizeMode={FastImage.resizeMode.cover}
            style={[styles.image]}
          />
        </SharedElement>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Video;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
