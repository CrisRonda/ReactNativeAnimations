import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import useMovies from '../../../3_Video/hooks/useMovies';
import CardStory from '../../components/CardStory';

const Home = () => {
  const {movies} = useMovies();
  return (
    <View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={movies}
        renderItem={({item}) => <CardStory {...item} />}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 16,
  },
});
