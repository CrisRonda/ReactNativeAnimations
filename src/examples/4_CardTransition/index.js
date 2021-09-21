import React, {useState} from 'react';
import {Dimensions, StyleSheet, Button, SafeAreaView} from 'react-native';

import useSpringTransition from './hooks/useSpringTransition';
import Card from './components/Card';

const {width} = Dimensions.get('window');

const origin = {x: -(width / 2 - 16 * 2), y: 0};
const cards = [
  {
    id: 60939,
    title: 'Mouse',
    subtitle: 'Dolores Prohaska',
    imageURL: 'https://unsplash.it/400/400?image=5',
    avatarImage: 'https://randomuser.me/api/portraits/med/women/4.jpg',
  },
  {
    id: 63317,
    title: 'Gloves',
    subtitle: 'Sherry Roob',
    imageURL: 'https://unsplash.it/400/400?image=9',
    avatarImage: 'https://randomuser.me/api/portraits/med/women/69.jpg',
  },
  {
    id: 41284,
    title: 'Soap',
    subtitle: 'Wendell Hilll',
    imageURL: 'https://unsplash.it/400/400?image=1',
    avatarTitle: 'Wendell Hilll',
  },
  {
    id: 41281,
    title: 'Soap',
    subtitle: 'Wendell Hilll',
    imageURL: 'https://unsplash.it/400/400?image=1',
    avatarTitle: 'Wendell Hilll',
  },
  {
    id: 41584,
    title: 'Soap',
    subtitle: 'Wendell Hilll',
    imageURL: 'https://unsplash.it/400/400?image=1',
    avatarTitle: 'Wendell Hilll',
  },
];

const CardTransition = () => {
  const [toggled, setToggle] = useState(false);
  const transition = useSpringTransition(toggled);
  return (
    <SafeAreaView style={styles.container}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          backgroundColor={card}
          cards={cards}
          index={index}
          transition={transition}
          origin={origin}
          {...card}
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
