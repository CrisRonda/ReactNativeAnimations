import React from 'react';
import {View} from 'react-native';
import CardOption from '../CardOption';

const Section = ({genres = [], movies = [], onPress}) => {
  return (
    <View>
      {genres.map(item => (
        <CardOption key={item} genre={item} movies={movies} onPress={onPress} />
      ))}
    </View>
  );
};

export default Section;
