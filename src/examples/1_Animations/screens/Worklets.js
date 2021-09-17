import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import Animated, {
  useSharedValue,
  runOnUI,
  runOnJS,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

// This function can run in UI o JS thread doesn't matter the key work 'worklet'
const formatDatetime = datetime => {
  'worklet'; // ---> This executes this function on UI thread
  return `${datetime.getFullYear()}-${
    datetime.getMonth() + 1
  }-${datetime.getDate()} ${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
};
const calculateOnUIThread = (text, from, cb) => {
  'worklet'; // ---> This executes this function on UI thread
  text.value = `Hello from ${from} at ${formatDatetime(new Date())}`;
  runOnJS(cb)(from);
};

const Worklets = () => {
  const [jsText, setJsText] = useState('');
  const text = useSharedValue('');

  const sayHelloFromTheJSThread = from => {
    Alert.alert('Hello from JS thread from ' + from);
  };
  // This function runs on JSThread
  const calculateOnJSThread = from => {
    sayHelloFromTheJSThread(from);
    setJsText(`Hello world at ${formatDatetime(new Date())}`);
  };

  return (
    <View style={styles.container}>
      <Text>JS thread says:</Text>
      <Text>{jsText}</Text>
      <Text>UI thread says:</Text>
      <Text>{text.value}</Text>
      <Button
        onPress={() =>
          runOnUI(calculateOnUIThread)(
            text,
            'Quito-Ecuador',
            calculateOnJSThread,
          )
        }
        title="Say Hello"
        primary
      />
    </View>
  );
};

export default Worklets;
