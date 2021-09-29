import React, {useRef, useState} from 'react';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withTiming,
} from 'react-native-reanimated';
import {
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useTheme} from '@theme';
import {PanGestureHandler} from 'react-native-gesture-handler';
import VideoPlayer from '../Details/components/VideoPlayer';

import Suggestions from '../Details/components/Suggestions';
import IconButton from '@components/Icon/Button';

const PanGestureDetails = ({
  panGestureValue,
  openPlayer,
  videoSelection,
  onClose,
}) => {
  const videoRef = useRef();
  const {playlist, selectedVideo} = videoSelection;
  const {
    dimensions: {width, height},
  } = useTheme();
  const statusBarHeight = StatusBar.currentHeight || 0;

  const videoHeight = width * 0.5625;
  const yOutput =
    height - videoHeight + (videoHeight * 0.5) / 2 - 16 - statusBarHeight;
  const xOutput = (width * 0.5) / 2 - 16;

  const pangestureHandler = useAnimatedGestureHandler({
    onStart: event => {
      panGestureValue.value = event.absoluteY / 3;
    },
    onActive: event => {
      panGestureValue.value = event.absoluteY / 3.5;
    },
    onEnd: event => {
      if (event.absoluteY > height / 2.3) {
        panGestureValue.value = withTiming(300, {duration: 500});
      } else {
        panGestureValue.value = withTiming(0, {duration: 500});
      }
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    const translateYInterpolate = interpolate(
      panGestureValue.value,
      [0, 170],
      [0, yOutput],
      Extrapolate.CLAMP,
    );
    const translateXInterpolate = interpolate(
      panGestureValue.value,
      [0, 170],
      [0, xOutput],
      Extrapolate.CLAMP,
    );
    const scaleInterpolate = interpolate(
      panGestureValue.value,
      [0, 170],
      [1, 0.5],
      Extrapolate.CLAMP,
    );

    return {
      transform: [
        {
          translateY: translateYInterpolate,
        },
        {
          translateX: translateXInterpolate,
        },
        {
          scale: scaleInterpolate,
        },
      ],
    };
  });
  const animatedScrollStyle = useAnimatedStyle(() => {
    const opacityInterpolate = interpolate(
      panGestureValue.value,
      [0, 100],
      [1, 0],
    );
    const heightInterpolate = interpolate(
      panGestureValue.value,
      [0, 300],
      [height - videoHeight, 0],
    );

    return {
      opacity: opacityInterpolate,
      height: heightInterpolate,
      display: heightInterpolate <= 0 ? 'none' : 'flex',
    };
  });
  const animatedButtonStyle = useAnimatedStyle(() => {
    const scale = interpolate(panGestureValue.value, [0, 100], [1.5, 1.8]);
    const top = interpolate(panGestureValue.value, [0, 100], [42, 30]);
    const left = interpolate(panGestureValue.value, [0, 100], [18, 15]);
    return {top, left, transform: [{scale}]};
  });
  if (!selectedVideo) {
    return <></>;
  }
  return (
    <View style={styles.container} pointerEvents="box-none">
      <PanGestureHandler onGestureEvent={pangestureHandler}>
        <Animated.View style={[{width, height: videoHeight}, animatedStyle]}>
          <TouchableWithoutFeedback onPress={openPlayer}>
            <View style={styles.player}>
              <Animated.View style={[styles.back, animatedButtonStyle]}>
                <IconButton
                  name="back"
                  onPress={onClose}
                  color="black"
                  style={styles.backButton}
                />
              </Animated.View>
              <VideoPlayer
                ref={videoRef}
                selectedVideo={selectedVideo}
                playlist={playlist}
              />
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </PanGestureHandler>
      <Animated.ScrollView style={[styles.scrollView, animatedScrollStyle]}>
        <Suggestions selectedVideo={selectedVideo} playlist={playlist} />
      </Animated.ScrollView>
    </View>
  );
};

export default PanGestureDetails;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'transparent',
    zIndex: 12,
  },
  scrollView: {
    backgroundColor: 'black',
  },
  player: {
    position: 'relative',
    flex: 1,
    backgroundColor: 'black',
  },
  back: {position: 'absolute', zIndex: 12},
  backButton: {backgroundColor: 'white', borderRadius: 77},
});
