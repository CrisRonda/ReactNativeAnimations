import React, {useMemo} from 'react';
import {View} from 'react-native';
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
}) => {
  const {spacing, colors, pxToDp} = useTheme();
  const styleScreen = useMemo(
    () => styles({spacing, colors, pxToDp}),
    [spacing, colors, pxToDp],
  );

  return (
    <View style={[styleScreen.container]}>
      <View style={[styleScreen.row, styleScreen.spaceBetween]}>
        <View style={[styleScreen.row]}>
          <Avatar
            title={avatarTitle}
            imageURL={avatarImage}
            enableRandomColor={enableRandomColorAvatar}
          />
          <View>
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
          color={colors.secondary.dark}
        />
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
          <IconButton name="like1" style={styleScreen.icon} onPress={onLike} />
          <IconButton name="dislike1" onPress={onDislike} />
        </View>
        <IconButton name="sharealt" onPress={onShare} />
      </View>
    </View>
  );
};

export default Card;
