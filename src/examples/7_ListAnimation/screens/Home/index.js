import React, {useState} from 'react';
import Container from '@components/Container';
import data, {MAX_HEIGHT} from '../../lib';
import CategoryTile from '../../components/CategoryTile';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const Home = () => {
  const [scrollArea, setscrollArea] = useState(0);
  const animatedY = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {y}}) => {
      animatedY.value = y;
    },
  });
  const itemsInScreen = scrollArea / MAX_HEIGHT - 1;
  const totalScrollArea = (data.length + itemsInScreen) * MAX_HEIGHT;

  const onLayout = ({nativeEvent}) => {
    setscrollArea(nativeEvent.layout.height);
  };
  return (
    <>
      <Container disablePadding>
        <Animated.ScrollView
          onLayout={onLayout}
          showsVerticalScrollIndicator={false}
          bounces={false}
          snapToInterval={MAX_HEIGHT}
          decelerationRate="fast"
          contentContainerStyle={{height: totalScrollArea}}
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
