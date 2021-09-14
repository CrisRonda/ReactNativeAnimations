import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '@components/Icon';
import styles from './style';

const IconButton = ({style, disabled, onPress, title, ...props}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, disabled ? styles.disabled : null]}
      disabled={disabled}
      onPress={onPress}
      accessibilityLabel={title}
      accessibilityRole={'button'}
      accessibilityState={{
        disabled: disabled,
      }}>
      <Icon {...props} />
    </TouchableOpacity>
  );
};

export default IconButton;
