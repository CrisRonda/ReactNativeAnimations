import React from 'react';
import Card from '@components/Card';
import {Alert, Share} from 'react-native';
const FAKE = [
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
];
const Cards = () => {
  const onLike = title => {
    Alert.alert(`Like ${title}`, 'You like this card');
  };
  const onDislike = title => {
    Alert.alert(`Dislike ${title}`, 'You dislike this card');
  };
  const onShare = async title => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        Alert.alert('Ready', 'You rocks when share information');
      }
    } catch (error) {
      Alert.alert('Error', 'We can not open apps to share');
    }
  };

  return (
    <>
      {FAKE.map(item => (
        <Card
          key={item.id}
          {...item}
          enableRandomColorAvatar
          onLike={() => onLike(item.title)}
          onDislike={() => onDislike(item.title)}
          onShare={() => onShare(item.title)}
        />
      ))}
    </>
  );
};
export default Cards;
