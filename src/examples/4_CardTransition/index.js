import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, View, Button, SafeAreaView} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import useSpringTransition from './hooks/useSpringTransition';
import Card from './components/Card';

const {width} = Dimensions.get('window');

const origin = {x: -(width / 2 - 16 * 2), y: 0};
const cards = ['blue', 'green', 'red', 'orange', 'black'];

const CardTransition = () => {
  const [toggled, setToggle] = useState(false);
  const transition = useSpringTransition(toggled);
  return (
    <SafeAreaView style={styles.container}>
      {cards.map((card, index) => (
        <Card
          key={card}
          backgroundColor={card}
          cards={cards}
          index={index}
          transition={transition}
          origin={origin}
        />
      ))}
      <Button
        title={toggled ? 'Reset' : 'Start'}
        onPress={() => setToggle(prev => !prev)}
        primary
      />
    </SafeAreaView>
  );
};

export default CardTransition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
});
