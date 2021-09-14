import React, {useMemo} from 'react';
import {View} from 'react-native';
import _ from 'lodash';
import FastImage from 'react-native-fast-image';
import Text from '../Text';
import {useTheme} from '@theme';
import styles, {variantText} from './style';
import {isValidUrl} from '../../lib/validators';

const getInitials = title => {
  if (!title || typeof title !== 'string') {
    return 'U';
  }
  return title
    .split(' ')
    .slice(0, 2)
    .map(item => item.charAt(0))
    .join('');
};
const randomColor = ({colors, enableRandomColor, defaultColor}) => {
  if (!enableRandomColor) {
    return defaultColor;
  }
  const randomIndex = Math.floor(Math.random() * (colors.length - 0 + 1) + 0);
  return colors[randomIndex];
};

const Avatar = ({
  title,
  variant,
  imageURL,
  style,
  children,
  enableRandomColor,
}) => {
  const validUrl = isValidUrl(imageURL);
  const {colors} = useTheme();
  const styleScreen = useMemo(() => styles({colors}), [colors]);
  const sizeCard = _.get(styleScreen, variant, styleScreen.medium);
  const backgroundColor = randomColor({
    colors: colors.avatarBackgrounds,
    defaultColor: colors.primary.dark,
    enableRandomColor,
  });

  if (children) {
    return (
      <View style={[sizeCard, styleScreen.container, {backgroundColor}, style]}>
        {children}
      </View>
    );
  }
  const variantSize =
    !validUrl && _.get(variantText, variant, variantText.medium);
  const firstLetter = !validUrl && getInitials(title);

  return (
    <View style={[sizeCard, styleScreen.container, {backgroundColor}, style]}>
      {validUrl ? (
        <FastImage
          style={sizeCard}
          source={{
            uri: imageURL,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      ) : (
        <Text variant={variantSize}>{firstLetter}</Text>
      )}
    </View>
  );
};

export default Avatar;
