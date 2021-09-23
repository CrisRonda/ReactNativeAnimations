import React from 'react';
import Text from '@components/Text';
import {View} from 'react-native';
import CardOption from '../CardOption';

const Section = ({genres = [], movies = []}) => {
  return (
    <View>
      {genres.map(item => (
        <CardOption key={item} genre={item} movies={movies} />
      ))}
    </View>
  );
};

export default Section;
