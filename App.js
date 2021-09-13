import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello world</Text>
      <Icon name="rocket" size={30} color="#900" />
      <Icon name="rocket" size={30} color="#900" />
    </SafeAreaView>
  );
};

export default App;
