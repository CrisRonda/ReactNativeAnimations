import React, {useMemo} from 'react';
import {Keyboard, SafeAreaView, View} from 'react-native';
import styles from './style';
import {useTheme} from '@theme';

const Container = ({children, onRelease, style, disablePadding, ...props}) => {
  const {spacing, colors} = useTheme();

  const styleScreen = useMemo(
    () => styles({spacing, colors}),
    [spacing, colors],
  );

  const onReleaseView = () => {
    if (typeof onRelease === 'function') {
      onRelease();
    }
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView
      style={[styleScreen.container]}
      onResponderRelease={() => true}
      onStartShouldSetResponder={onReleaseView}>
      <View
        style={[
          styleScreen.content,
          disablePadding && styleScreen.disablePadding,
          style,
        ]}
        {...props}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Container;
