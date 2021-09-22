import React, {useMemo, useRef} from 'react';
import {View, FlatList} from 'react-native';
import {useTheme} from '@theme';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import useMovies from '../../hooks/useMovies';
import CardMovie from '../CardMovie';
import Reanimated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Dots from '../Dots';
import TitleMovie from '../TitleMovie';

const AnimatedFlatList = Reanimated.createAnimatedComponent(FlatList);
const Tabs = () => {
  const {dimensions, pxToDp} = useTheme();
  const {movies} = useMovies();
  const data = movies.slice(0, 4);
  const translateX = useSharedValue(0);

  const styleScreen = useMemo(
    () => styles({pxToDp, dimensions}),
    [pxToDp, dimensions],
  );

  const handleScrollEvent = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  const flatListRef = useRef(null);

  const onPressIndicator = index => {
    if (flatListRef.current) {
      flatListRef.current?.scrollToIndex?.({
        index: index,
        animated: true,
      });
    }
  };

  return (
    <View style={styleScreen.swipe}>
      <LinearGradient
        colors={['black', 'transparent']}
        style={styleScreen.gradientTop}
      />
      <AnimatedFlatList
        onScroll={handleScrollEvent}
        pagingEnabled
        horizontal
        ref={flatListRef}
        data={data}
        scrollEventThrottle={16}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CardMovie {...item} />}
      />
      <LinearGradient
        colors={['transparent', 'black']}
        style={styleScreen.gradient}
      />
      <Dots
        data={data}
        onPressIndicator={onPressIndicator}
        scrollX={translateX}
      />
      <TitleMovie
        data={data}
        onPressIndicator={onPressIndicator}
        scrollX={translateX}
      />
    </View>
  );
};

export default Tabs;
