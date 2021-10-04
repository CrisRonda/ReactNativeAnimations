import React, {useState, useRef} from 'react';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Container from '@components/Container';
import data, {MAX_HEIGHT, MIN_HEIGHT} from '../../lib';
import CardTileFlatlist from '../../components/CardTileFlatlist';
import CardImage from '../../components/CardImage';
import Text from '@components/Text';
import {useNavigation} from '@react-navigation/native';
const Details = () => {
  const [scrollArea, setscrollArea] = useState(0);
  const {navigate} = useNavigation();
  const animatedY = useSharedValue(0);
  const scrollRef = useRef();
  const handleScrollEvent = useAnimatedScrollHandler(event => {
    animatedY.value = event.contentOffset.y;
  });
  const itemsInScreen = scrollArea / MIN_HEIGHT - 1;
  const totalScrollArea = (data.length + itemsInScreen) * MIN_HEIGHT;

  const onLayout = ({nativeEvent}) => {
    setscrollArea(nativeEvent.layout.height);
  };

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
        onLayout={onLayout}
        showsVerticalScrollIndicator={false}
        snapToInterval={MIN_HEIGHT}
        decelerationRate="fast"
        contentContainerStyle={{
          height: totalScrollArea,
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
      <Pressable style={styles.button} onPress={() => navigate('HomeList')}>
        <Text variant="button1">Next example</Text>
      </Pressable>
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
  button: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: '30%',
    height: 45,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    minWidth: 90,
  },
});
