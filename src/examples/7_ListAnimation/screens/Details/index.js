import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Container from '@components/Container';
import data, {MAX_HEIGHT, MIN_HEIGHT} from '../../lib';
import CardTileFlatlist from '../../components/CardTileFlatlist';
import CardImage from '../../components/CardImage';

const Details = () => {
  const animatedY = useSharedValue(0);
  const scrollRef = useRef();
  const handleScrollEvent = useAnimatedScrollHandler(event => {
    animatedY.value = event.contentOffset.y;
  });
  return (
    <Container disablePadding>
      <View style={[styles.animatedImageView]}>
        {data.map((item, index) => (
          <CardImage
            key={item.id}
            index={index}
            animatedY={animatedY}
            lengthItems={data.length - 1}
            {...item}
          />
        ))}
      </View>

      <Animated.ScrollView
        bounces={false}
        ref={scrollRef}
        snapToInterval={MIN_HEIGHT}
        decelerationRate="fast"
        contentContainerStyle={{
          height: data.length * 1.4 * MIN_HEIGHT,
        }}
        scrollEventThrottle={16}
        onScroll={handleScrollEvent}>
        {data.slice(1, data.length).map((item, index) => (
          <CardTileFlatlist
            key={item.id}
            index={index}
            animatedY={animatedY}
            {...item}
          />
        ))}
      </Animated.ScrollView>
    </Container>
  );
};

export default Details;

const styles = StyleSheet.create({
  animatedImageView: {
    position: 'relative',
    height: MAX_HEIGHT - 10,
    backgroundColor: 'blue',
    zIndex: 15,
  },
});
