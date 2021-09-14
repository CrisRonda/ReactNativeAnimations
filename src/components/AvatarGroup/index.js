import React, {useMemo} from 'react';
import {useTheme} from '@theme';
import Avatar from '../Avatar';
import {View} from 'react-native';
import styles from './style';

const AvatarGroup = ({data, variant, margin = 12}) => {
  const {spacing, pxToDp} = useTheme();
  const styleScreen = useMemo(() => styles({spacing}), [spacing]);
  if (!data?.length) {
    return <></>;
  }
  return (
    <View style={styleScreen.row}>
      {data.map((item, index) => {
        const customStyle = index !== 0 && {marginLeft: -pxToDp(margin)};
        return (
          <Avatar
            key={item.id}
            imageURL={item.imageUrl}
            title={item.title}
            style={customStyle}
            variant={variant}
          />
        );
      })}
    </View>
  );
};
export default AvatarGroup;
