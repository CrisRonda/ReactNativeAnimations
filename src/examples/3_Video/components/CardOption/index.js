import React, {memo, useMemo} from 'react';
import {View, FlatList, TouchableWithoutFeedback} from 'react-native';
import FastImage from 'react-native-fast-image';
import Text from '@components/Text';
import {useTheme} from '@theme';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Option = ({
  backdrop,
  poster,
  title,
  description,
  style,
  playlist,
  index,
}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigate('Details', {
          selectedVideo: {
            backdrop,
            poster,
            description,
            title,
          },
          playlist,
        })
      }>
      <View style={[style.container, index !== 0 && style.margin]}>
        <View style={style.imageContainer}>
          <FastImage
            style={style.image}
            source={{uri: index % 3 === 0 ? poster : backdrop}}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={style.triangleLeft} />
          <View style={style.triangleRight} />
        </View>
        <View style={style.details}>
          <Text
            variant="h5"
            color="white.main"
            numberOfLines={1}
            ellipsizeMode="clip">
            {title}
          </Text>
          <Text color="white.light" numberOfLines={3} ellipsizeMode="tail">
            {description}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const CardOption = ({genre, movies}) => {
  const {dimensions, colors, pxToDp, spacing} = useTheme();

  const styleScreen = useMemo(
    () => styles({dimensions, colors, pxToDp, spacing}),
    [dimensions, colors, pxToDp, spacing],
  );
  return (
    <View style={styleScreen.root}>
      <Text variant="h2" color="white.dark" mb={12} mt={24}>
        {genre}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={movies}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        renderItem={({item, index}) => (
          <Option
            {...item}
            index={index}
            style={styleScreen}
            playlist={movies.slice(0, 6)}
          />
        )}
      />
    </View>
  );
};

export default memo(CardOption);
