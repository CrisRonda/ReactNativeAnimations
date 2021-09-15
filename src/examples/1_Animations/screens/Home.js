import React from 'react';
import {FlatList, View, TouchableWithoutFeedback} from 'react-native';
import Container from '@components/Container';
import Text from '@components/Text';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    title: 'Infinite Animation',
    route: 'InfiniteAnimation',
  },
  {
    title: 'Scroll Animation',
    route: 'ScrollAnimation',
  },
  {
    title: 'Pan Gesture',
    route: 'PanGesture',
  },
  {
    title: 'Color Interpolate',
    route: 'ColorInterpolate',
  },
  {
    title: 'Tap Gesture',
    route: 'TapGesture',
  },
  {
    title: 'Pinch Gesture',
    route: 'PinchGesture',
  },
];
const Home = () => {
  const {navigate} = useNavigation();
  const onNavigate = route => {
    navigate(route);
  };
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={item => item.route}
        renderItem={({item}) => (
          <TouchableWithoutFeedback onPress={() => onNavigate(item.route)}>
            <View>
              <Text variant="h3">{item.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </Container>
  );
};

export default Home;
