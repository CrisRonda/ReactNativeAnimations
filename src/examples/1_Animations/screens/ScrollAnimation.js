import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Page from '../components/Page';
import Container from '@components/SwipeContainer';
import IconButton from '@components/Icon/Button';
import {pxToDp} from '@theme/lib';
import {useNavigation} from '@react-navigation/core';
const WORDS = ['Hello', 'to', 'my', 'demo'];

const ScrollAnimation = () => {
  const {goBack} = useNavigation();
  const translateX = useSharedValue(0);
  const handleScroll = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <>
      <Container
        horizontal
        onScroll={handleScroll}
        scrollEventThrottle={16}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={style.container}>
        <View style={style.backbutton}>
          <IconButton name="back" onPress={goBack} />
        </View>
        {WORDS.map((title, index) => (
          <Page
            key={title}
            title={title}
            index={index}
            translateX={translateX}
          />
        ))}
      </Container>
    </>
  );
};

export default ScrollAnimation;
const style = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingHorizontal: 0,
    position: 'relative',
    zIndex: -1,
  },
  backbutton: {
    position: 'absolute',
    top: pxToDp(16),
    left: pxToDp(16),
    zIndex: 12,
    width: pxToDp(80),
    height: pxToDp(80),
    borderRadius: pxToDp(40),
    backgroundColor: 'grey',
  },
});
