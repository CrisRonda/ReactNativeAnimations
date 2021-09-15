import React, {useCallback, useRef} from 'react';
import {Alert, Share, StyleSheet} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import Container from '@components/Container';
import Card from '@components/Card';

const AnimatedImage = Animated.createAnimatedComponent(FastImage);
const fakeData = {
  id: 60939,
  title: 'Dolores Prohaska',
  subtitle: 'Quito, Ecuador',
  imageURL: 'https://unsplash.it/400/400?image=15',
  avatarImage: 'https://randomuser.me/api/portraits/med/women/67.jpg',
};
const TapGesture = () => {
  const doubleTapRef = useRef();
  const scale = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{scale: Math.max(scale.value, 0)}]};
  });
  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, {}, finished => {
      if (finished) {
        scale.value = withDelay(250, withSpring(0));
      }
    });
  }, [scale]);
  const onShare = async title => {
    try {
      const result = await Share.share({
        message: `Share ${title}`,
      });
      if (result.action === Share.sharedAction) {
        Alert.alert('Ready', 'You rocks when share information');
      }
    } catch (error) {
      Alert.alert('Error', 'We can not open apps to share');
    }
  };
  const options = [
    {
      id: 85213,
      title: 'Remove',
      onPress: ({title}) => Alert.alert('Remove', `Remove ${title}`),
    },
    {
      id: 71659,
      title: 'Edit',
      onPress: ({title}) => Alert.alert('Edit', `Edit ${title}`),
    },
    {
      id: 3747,
      title: 'Share',
      onPress: ({title}) => onShare(title),
    },
  ];
  return (
    <Container>
      <TapGestureHandler
        waitFor={doubleTapRef}
        onActivated={() => {
          console.log('TAP');
        }}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}>
          {/*Its important use View component to avoid errors*/}
          <Animated.View style={style.container}>
            <Card {...fakeData} enableRandomColorAvatar options={options} />
            <AnimatedImage
              style={[style.image, animatedStyle]}
              source={require('@assets/images/heart.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </Container>
  );
};

export default TapGesture;
const style = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: '30%',
    left: '30%',
    width: '40%',
    height: '40%',
    shadowOffset: {width: 0, height: 20},
    shadowRadius: 32,
    shadowColor: 'red',
  },
});
