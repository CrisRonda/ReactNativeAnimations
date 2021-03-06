import React, {forwardRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import JWPlayer from 'react-native-jw-media-player';
import {generateFakeInfoMovie} from '../../../lib';

const {width} = Dimensions.get('window');

const VideoPlayer = forwardRef(({selectedVideo, playlist, ...props}, ref) => {
  const videoHeight = width * 0.5625;

  const playlistItem = generateFakeInfoMovie({
    title: selectedVideo?.title,
    image: selectedVideo?.backdrop,
  });
  const playList = [
    playlistItem,
    ...playlist?.map(item =>
      generateFakeInfoMovie({
        title: item?.title,
        image: item?.backdrop,
      }),
    ),
  ];

  return (
    <View style={[{height: videoHeight}, styles.subContainer]}>
      <View style={styles.playerContainer}>
        <JWPlayer
          ref={ref}
          style={styles.player}
          controls
          autostart
          displayTitle
          nextUpDisplay
          playlist={playList}
          onPlayerError={e => console.log('ERROR PLAYER', e)}
          onSetupPlayerError={e => console.log('ERROR PLAYER', e)}
          image={selectedVideo?.image}
          stretching="uniform"
          colors={{
            icons: 'ffffff',
            timeslider: {
              progress: 'FF000D',
              rail: 'C24F57',
            },
          }}
          {...props}
        />
      </View>
    </View>
  );
});

export default VideoPlayer;

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  playerContainer: {
    height: '100%',
    width: width,
  },
  player: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    margin: 40,
  },
});
