import React from 'react';
import Container from '@components/Container';
import data, {MAX_HEIGHT} from '../../lib';
import CategoryTile from '../../components/CategoryTile';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const Home = () => {
  const animatedY = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {y}}) => {
      animatedY.value = y;
    },
  });
  return (
    <>
      <Container disablePadding>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          snapToInterval={MAX_HEIGHT}
          decelerationRate="fast"
          contentContainerStyle={{height: (data.length + 2.7) * MAX_HEIGHT}}
          scrollEventThrottle={16}
          onScroll={onScrollHandler}>
          {data.map((item, index) => (
            <CategoryTile
              key={item.id}
              index={index}
              animatedY={animatedY}
              {...item}
            />
          ))}
        </Animated.ScrollView>
      </Container>
    </>
  );
};

export default Home;
