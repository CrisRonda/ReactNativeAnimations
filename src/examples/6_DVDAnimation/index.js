import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import Logo, {LOGO_WIDTH, LOGO_HEIGHT} from './components/Logo';
import {withBouncing} from './lib/bouncing';

const {width, height} = Dimensions.get('window');
const colors = [
  '#ff0000',
  '#00ff00',
  '#0000ff',
  '#ff00ff',
  '#ffff00',
  '#00ffff',
  '#FF9100',
  '#B006C7',
  '#5FF6EF',
];

const DVDLogo = () => {
  // variables to move the svg
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const color = useSharedValue(colors[0]);

  // change randomly color
  const onBounce = useCallback(() => {
    'worklet';
    color.value = colors[Math.round(Math.random() * (colors.length - 1))];
  }, [color]);
  // start loop animation
  useEffect(() => {
    translateX.value = withBouncing(0, width - LOGO_WIDTH, onBounce);
    translateY.value = withBouncing(0, height - LOGO_HEIGHT * 2, onBounce);
  }, [onBounce, translateX, translateY]);

  // create a new style
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={style}>
        <Logo color={color} />
      </Animated.View>
    </SafeAreaView>
  );
};

export default DVDLogo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
