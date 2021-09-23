import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar';
import Tabs from '../../components/Tabs';
import Sections from '../../components/Section';
import useMovies from '../../hooks/useMovies';
const Home = () => {
  const {genres, movies} = useMovies();
  const data = movies.slice(0, 4);
  return (
    <>
      <CustomStatusBar />
      <ScrollView style={styles.container}>
        <Tabs data={data} />
        <Sections genres={genres} movies={movies} />
      </ScrollView>
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
