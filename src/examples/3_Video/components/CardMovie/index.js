import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from '@theme';
const CardMovie = ({backdrop, title}) => {
  const {dimensions} = useTheme();

  const styleScreen = useMemo(() => styles({dimensions}), [dimensions]);
  return (
    <View style={styleScreen.container}>
      <FastImage
        style={styleScreen.image}
        source={{uri: backdrop}}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

export default CardMovie;

const styles = ({dimensions}) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'black',
      width: dimensions.width,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      width: '100%',
      height: 556,
    },
  });
