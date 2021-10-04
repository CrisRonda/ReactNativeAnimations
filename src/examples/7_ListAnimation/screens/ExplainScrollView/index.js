import React from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import Animated from 'react-native-reanimated';

const {height} = Dimensions.get('screen');
const MIN_HEIGHT = height / 5;
const colors = ['green', 'red', 'yellow', 'white', 'purple', 'gray', 'cyan'];

const ExplainScrollView = () => {
  const itemsInScreen = height / MIN_HEIGHT - 1;
  const totalScrollArea = (colors.length + itemsInScreen) * MIN_HEIGHT;

  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      snapToInterval={MIN_HEIGHT}
      indicatorStyle="black"
      contentContainerStyle={{
        height: totalScrollArea,
      }}>
      {colors.map((color, index) => (
        <View
          key={`item-${index}`}
          style={[
            styles.item,
            {
              backgroundColor: color,
            },
          ]}>
          <Text>{`${index + 1} - ${MIN_HEIGHT}`}</Text>
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default ExplainScrollView;

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: MIN_HEIGHT,
  },
});
