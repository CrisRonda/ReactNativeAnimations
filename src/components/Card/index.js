import React, {useMemo, useRef, useState} from 'react';
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from '@theme';
import Text from '../Text';
import Avatar from '../Avatar';
import IconButton from '../Icon/Button';
import styles from './style';

const Card = ({
  title,
  subtitle,
  imageURL,
  avatarImage,
  avatarTitle,
  enableRandomColorAvatar,
  options,
  onLike,
  onDislike,
  onShare,
  ...rest
}) => {
  const {spacing, colors, pxToDp} = useTheme();
  const opacity = useRef(new Animated.Value(0)).current;
  const [showOptions, setShowOptions] = useState(false);
  const styleScreen = useMemo(
    () => styles({spacing, colors, pxToDp}),
    [spacing, colors, pxToDp],
  );
  const toogleOptions = () => {
    setShowOptions(bef => !bef);
    Animated.timing(opacity, {
      toValue: showOptions ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const onHideOptions = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        setShowOptions(false);
      }
    });
  };
  return (
    <TouchableWithoutFeedback onPress={onHideOptions}>
      <View style={[styleScreen.container]}>
        <View style={[styleScreen.row, styleScreen.spaceBetween]}>
          <View style={[styleScreen.row]}>
            <Avatar
              title={avatarTitle}
              imageURL={avatarImage}
              enableRandomColor={enableRandomColorAvatar}
            />
            <View style={styleScreen.header}>
              <Text ml={16} variant="h5">
                {title}
              </Text>
              <Text ml={16} variant="body1">
                {subtitle}
              </Text>
            </View>
          </View>
          <IconButton
            name="more-vertical"
            set="Feather"
            onPress={toogleOptions}
          />
          {showOptions ? (
            <Animated.FlatList
              style={[styleScreen.options, {opacity}]}
              data={options}
              nestedScrollEnabled
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    onHideOptions();
                    item.onPress({title, subtitle, imageURL, ...rest});
                  }}>
                  <View style={styleScreen.optionItem}>
                    <Text variant="button1">{item.title}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          ) : (
            <></>
          )}
        </View>
        <FastImage
          style={[styleScreen.image]}
          source={{
            uri: imageURL,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={[styleScreen.row, styleScreen.spaceBetween]}>
          <View style={[styleScreen.row]}>
            <IconButton
              set="AntDesign"
              size={64}
              name="hearto"
              style={styleScreen.icon}
              onPress={onLike}
            />
            <IconButton
              set="FontAwesome"
              size={64}
              name="comment-o"
              style={styleScreen.icon}
              onPress={onDislike}
            />
            <IconButton
              set="Ionicons"
              size={64}
              name="paper-plane-outline"
              onPress={onShare}
            />
          </View>
          <IconButton set="Feather" size={64} name="bookmark" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
