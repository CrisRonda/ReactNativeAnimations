import React, {useMemo} from 'react';
import {Keyboard, SafeAreaView, ScrollView} from 'react-native';
import styles from './style';
import {useTheme} from '@theme';

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
      <ScrollView style={[styleScreen.content, style]} {...props}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SwipeContainer;
