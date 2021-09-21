import React, {useEffect} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {mix} from 'react-native-redash';
import Container from '@components/Container';
import Circle from './components/Circle';
import {StyleSheet} from 'react-native';

const NUM_CIRCLES = 8;
const Yoga = () => {
  const progress = useSharedValue(0);
  const goesDown = useSharedValue(false);
  // here use a repeat when the sreen is mounted
  useEffect(() => {
    progress.value = withRepeat(
      withTiming(
        1, // o to 1 progress value
        // {duration: 3000, easing: Easing.bezier(0.5, 0, 0.5, 1)},
        {duration: 3000, easing: Easing.ease}, // animation ease
        () => (goesDown.value = !goesDown.value), // onfinish update state if it is go down
      ),
      -1, //infinite
      true, // reverse
    );
  }, [goesDown, progress]);
  const style = useAnimatedStyle(() => ({
    flex: 1,
    // mix ==> linear interpolation docs: https://wcandillon.gitbook.io/redash/math
    // basically is a worklet
    transform: [{rotate: `${mix(progress.value, -Math.PI, 0)}rad`}],
  }));
  return (
    <Container style={styles.container}>
      <Animated.View style={style}>
        {new Array(NUM_CIRCLES).fill(0).map((_, index) => (
          <Circle
            progress={progress}
            index={index}
            key={index}
            goesDown={goesDown}
            totalCicles={NUM_CIRCLES}
          />
        ))}
      </Animated.View>
    </Container>
  );
};

export default Yoga;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
});
