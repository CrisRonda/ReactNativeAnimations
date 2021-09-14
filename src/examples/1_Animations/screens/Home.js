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
