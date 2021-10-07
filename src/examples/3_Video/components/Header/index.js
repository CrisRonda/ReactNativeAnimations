import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import Text from '@components/Text';
import {pxToDp} from '@theme/lib';
import LinearGradient from 'react-native-linear-gradient';

export const HEIGHT_HEADER = pxToDp(250);

const Header = ({scrollY}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, HEIGHT_HEADER], [1, 0]);
    return {
      opacity,
      transform: [{translateY: -scrollY.value}],
    };
  });
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <LinearGradient
        colors={['#00000099', 'transparent']}
        style={styles.gradientTop}
      />
      <View style={styles.header}>
        <Text variant="h1" color="white.main">
          MiTV+
        </Text>
      </View>
    </Animated.View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    zIndex: 5,
    height: HEIGHT_HEADER,
    width: '100%',
  },
  header: {
    flex: 1,
    // padding: pxToDp(24),
    paddingTop: pxToDp(112),
    justifyContent: 'center',
  },
  gradientTop: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    top: 0,
    zIndex: 3,
  },
});
