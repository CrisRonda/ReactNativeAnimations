import {Dimensions, StyleSheet} from 'react-native';
import spacing from '@theme/spacing';
import {pxToDp} from '@theme/lib';

const {width} = Dimensions.get('window');
export const IMAGE_SIZE = pxToDp(353);
export const playerStyles = StyleSheet.create({
  subContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  playerContainer: {
    height: 300,
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

export const suggestionStyles = StyleSheet.create({
  container: {paddingHorizontal: spacing.medium},
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.extraLarge,
  },
  title: {
    width: '90%',
  },
  containerCard: {flexDirection: 'row', marginBottom: pxToDp(64)},
  image: {
    width: '30%',
    height: IMAGE_SIZE,
    marginRight: pxToDp(16),
    borderRadius: spacing.small,
  },
  containerDetails: {flex: 1, paddingHorizontal: 8},
  description: {textAlign: 'justify', flex: 1},
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'orange',
    marginBottom: spacing.medium,
  },
});
