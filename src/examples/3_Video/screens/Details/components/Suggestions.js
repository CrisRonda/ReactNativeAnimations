import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import Text from '@components/Text';
import FastImage from 'react-native-fast-image';
import {IMAGE_SIZE, suggestionStyles} from './styles';
import IconButton from '@components/Icon/Button';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Suggestions = ({selectedVideo, playlist}) => {
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const adjustHeight = useDerivedValue(() => {
    return isOpenDetails ? withSpring(IMAGE_SIZE) : withTiming(0);
  }, [isOpenDetails]);
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(adjustHeight.value, [IMAGE_SIZE, 0], [1, 0]);
    return {
      opacity,
      height: adjustHeight.value,
    };
  });
  return (
    <ScrollView
      style={suggestionStyles.container}
      showsVerticalScrollIndicator={false}>
      <View>
        <View style={suggestionStyles.containerTitle}>
          <Text variant="h1">{selectedVideo.title}</Text>
          <IconButton
            set="Ionicons"
            size={84}
            name={
              isOpenDetails
                ? 'chevron-up-circle-outline'
                : 'chevron-down-circle-outline'
            }
            onPress={() => setIsOpenDetails(bef => !bef)}
          />
        </View>

        <Animated.View style={[suggestionStyles.containerCard, animatedStyle]}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            source={{uri: selectedVideo.poster}}
            style={suggestionStyles.image}
          />
          <Text
            variant="button1"
            mt={46}
            mb={62}
            style={suggestionStyles.description}>
            {selectedVideo.description}
          </Text>
        </Animated.View>
      </View>
      <Text variant="h1" color="warning.main" mb={24}>
        Suggestions
      </Text>
      <View style={suggestionStyles.divider} />
      {playlist.map(item => (
        <View key={item.id} style={suggestionStyles.containerCard}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            source={{uri: item.poster}}
            style={suggestionStyles.image}
          />
          <View style={suggestionStyles.containerDetails}>
            <Text variant="button1" color="primary.main">
              {item.title}
            </Text>
            <Text
              variant="button2"
              mt={16}
              mb={32}
              style={suggestionStyles.description}>
              {item.description}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Suggestions;
