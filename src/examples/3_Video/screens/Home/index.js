import React from 'react';
import {StyleSheet} from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar';
import Tabs from '../../components/Tabs';
import Sections from '../../components/Section';
import useMovies from '../../hooks/useMovies';
import Header from '../../components/Header';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {clamp} from 'react-native-redash';
import {pxToDp} from '@theme/lib';

export const HEIGHT_HEADER = pxToDp(250);

const Home = () => {
  const {genres, movies} = useMovies();
  const data = movies.slice(0, 4);
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event, ctx) => {
      const diff = event.contentOffset.y - ctx.prevY;
      scrollY.value = clamp(diff, 0, HEIGHT_HEADER);
    },
    onBeginDrag: (event, ctx) => {
      ctx.prevY = event.contentOffset.y;
    },
  });

  return (
    <>
      <CustomStatusBar />
      <Header scrollY={scrollY} />
      <Animated.ScrollView
        bounces={false}
        onScroll={scrollHandler}
        style={styles.container}
        scrollEventThrottle={16}>
        <Tabs data={data} />
        <Sections genres={genres} movies={movies} />
      </Animated.ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
