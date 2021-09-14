import React, {useMemo} from 'react';
import {Keyboard, SafeAreaView} from 'react-native';
import styles from './style';
import {useTheme} from '@theme';
import Animated from 'react-native-reanimated';

const SwipeContainer = ({children, onRelease, style, ...props}) => {
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
      <Animated.ScrollView style={[styleScreen.content, style]} {...props}>
        {children}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default SwipeContainer;
