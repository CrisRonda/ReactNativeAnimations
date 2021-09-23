import React from 'react';
import {View, Platform, StatusBar, StyleSheet} from 'react-native';

const CustomStatusBar = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {Platform.OS === 'ios' && <View style={style.bar} />}
    </>
  );
};

export default CustomStatusBar;

const style = StyleSheet.create({
  bar: {
    backgroundColor: 'black',
    flex: 1,
    position: 'absolute',
    height: 100,
    width: '100%',
  },
});
