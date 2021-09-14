import React, {useMemo} from 'react';
import {View, Switch as SwitchRN, TouchableWithoutFeedback} from 'react-native';
import Text from '../Text';
import styles from './styles';
import {useTheme} from '@theme';

const Switch = ({
  switchProps = {},
  textProps,
  label,
  setIsEnabled,
  isEnabled,
}) => {
  const {spacing, colors} = useTheme();
  const {disabled} = switchProps;
  const styleScreen = useMemo(
    () => styles({spacing, colors}),
    [spacing, colors],
  );
  const colorText = disabled ? 'grey.light' : isEnabled && 'success.main';

  return (
    <TouchableWithoutFeedback onPress={!disabled ? () => {} : setIsEnabled}>
      <View style={styleScreen.container}>
        <Text variant="button1" color={colorText} {...textProps}>
          {label}
        </Text>
        <SwitchRN
          trackColor={{false: colors.error.main, true: colors.success.main}}
          thumbColor={isEnabled ? colors.grey.dark : colors.grey.light}
          ios_backgroundColor={colors.background}
          onValueChange={!disabled && setIsEnabled}
          value={isEnabled}
          {...switchProps}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Switch;
