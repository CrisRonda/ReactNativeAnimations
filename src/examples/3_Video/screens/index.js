import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Tabs from '../components/Tabs';
import Section from '../components/Section';
import CustomStatusBar from '../components/CustomStatusBar';

const Video = () => {
  return (
    <>
      <CustomStatusBar />
      <View style={{backgroundColor: 'black', flex: 1}}>
        <Tabs />
        <Section />
      </View>
    </>
  );
};

export default Video;
