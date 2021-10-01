import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '@components/Text';
import FastImage from 'react-native-fast-image';
import {useTheme} from '@theme';
import {MIN_HEIGHT} from '../../lib';

const CardTileFlatlist = ({title, subtitile, imageUrl}) => {
  const {dimensions, spacing} = useTheme();
  const screenStyle = styles({dimensions, spacing});

  return (
    <View style={[screenStyle.container]}>
      <FastImage
        source={{uri: imageUrl}}
        style={[screenStyle.image]}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text color="grey.light" variant="h3">
        {title}
      </Text>
      <Text color="primary.dark" variant="button1">
        {subtitile}
      </Text>
    </View>
  );
};

export default CardTileFlatlist;

const styles = ({dimensions, spacing}) =>
  StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      width: '100%',
      minHeight: MIN_HEIGHT,
      paddingHorizontal: spacing.extraLarge,
      paddingBottom: spacing.medium,
      overflow: 'hidden',
    },
    image: {...StyleSheet.absoluteFillObject},
  });
