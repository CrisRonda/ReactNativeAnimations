import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Tabs from '../components/Tabs';
import Section from '../components/Section';
import CustomStatusBar from '../components/CustomStatusBar';
import useMovies from '../hooks/useMovies';

const Video = () => {
  const {movies, genres} = useMovies();
  const data = movies.slice(0, 4);
  return (
    <>
      <CustomStatusBar />
      <ScrollView style={styles.container}>
        <Tabs data={data} />
        <Section genres={genres} movies={movies} />
      </ScrollView>
    </>
  );
};

export default Video;
const styles = StyleSheet.create({
  container: {backgroundColor: 'black', flex: 1},
});
