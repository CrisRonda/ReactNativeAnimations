import {useFocusEffect, useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SharedElement} from 'react-navigation-shared-element';

const {width} = Dimensions.get('screen');
const CARD_WIDTH = width * 0.5 - 16;
const CARD_HEIGHT = (CARD_WIDTH * 21) / 9;

const CardStory = props => {
  const {poster, id} = props;
  const {navigate, isFocused} = useNavigation();
  const [opacity, setOpacity] = useState(1);
  useFocusEffect(() => {
    if (isFocused) {
      setOpacity(1);
    }
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate('DetailsGallery', props);
        setOpacity(0);
      }}>
      <View style={[styles.container, {opacity}]}>
        <SharedElement id={`story-${id}.cover`} style={styles.flex}>
          <FastImage
            source={{uri: poster}}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.image}
          />
        </SharedElement>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardStory;
const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  flex: {flex: 1},
});
