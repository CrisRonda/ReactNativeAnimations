import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '@components/Text';
import FastImage from 'react-native-fast-image';
import {CARD_HEIGHT} from './lib';

const CardList = ({avg_color, src, photographer, index, ...rest}) => {
  return (
    <View style={[styles.container, {backgroundColor: `${avg_color}f8`}]}>
      <View style={styles.containerImage}>
        <FastImage source={{uri: src.large}} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text variant="h1">{photographer}</Text>
        <Text>Item: {index + 1}</Text>
      </View>
    </View>
  );
};

export default memo(CardList);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: CARD_HEIGHT * 0.95,
    borderRadius: 15,
    overflow: 'hidden',
  },
  containerImage: {
    width: '100%',
    height: CARD_HEIGHT * 0.6,
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: CARD_HEIGHT,
  },
  content: {
    padding: 12,
  },
});
