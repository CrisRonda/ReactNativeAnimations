import React, {useRef} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CustomStatusBar from '../../components/CustomStatusBar';
import VideoPlayer from './components/VideoPlayer';
import Suggestions from './components/Suggestions';

const Details = () => {
  const videoRef = useRef();
  const {params = {}} = useRoute();
  const {playlist, selectedVideo} = params;

  return (
    <>
      <CustomStatusBar />
      <SafeAreaView style={styles.container}>
        <VideoPlayer
          selectedVideo={selectedVideo}
          playlist={playlist}
          ref={videoRef}
        />
        <Suggestions selectedVideo={selectedVideo} playlist={playlist} />
      </SafeAreaView>
    </>
  );
};

export default Details;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
