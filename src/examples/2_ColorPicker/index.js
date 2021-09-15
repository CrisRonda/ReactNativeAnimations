import React, {useCallback} from 'react';
import Container from '@components/Container';
import {StyleSheet, View, Dimensions} from 'react-native';
import Picker from './components/Picker';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const {width} = Dimensions.get('window');
const colors = [
  'red',
  'purple',
  'blue',
  'cyan',
  'green',
  'yellow',
  'orange',
  'black',
  'white',
];
const PICKER_WIDTH = width * 0.8;
const CIRCLE_SIZE = width * 0.8;
const ColorPicker = () => {
  const pickColor = useSharedValue(Colors[0]);
  const onColorChange = useCallback(
    color => {
      'worklet';
      pickColor.value = color;
    },
    [pickColor],
  );
  const animatedCircleStyle = useAnimatedStyle(() => {
    return {backgroundColor: pickColor.value};
  });
  return (
    <Container>
      <View style={[style.topContent]}>
        <Animated.View style={[style.circle, animatedCircleStyle]} />
      </View>
      <View style={[style.bottomContent]}>
        <Picker
          colors={colors}
          style={style.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          width={PICKER_WIDTH}
          onColorChange={onColorChange}
        />
      </View>
    </Container>
  );
};

export default ColorPicker;

const style = StyleSheet.create({
  topContent: {
    flex: 5,
    justifyContent: 'center',
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: 'red',
    alignSelf: 'center',
  },
  gradient: {
    height: 50,
    borderRadius: 35,
  },
});
