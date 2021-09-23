import {StyleSheet} from 'react-native';

const styles = ({dimensions, colors, pxToDp, spacing}) =>
  StyleSheet.create({
    root: {
      paddingHorizontal: spacing.large,
      height: pxToDp(800),
    },
    container: {
      width: dimensions.width / 2.5,
      height: pxToDp(600),
      backgroundColor: colors.grey.dark,
      borderRadius: spacing.medium,
      overflow: 'hidden',
    },
    margin: {
      marginLeft: spacing.medium,
    },
    triangleLeft: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      borderTopWidth: pxToDp(90),
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: pxToDp(90),
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: colors.grey.dark,
    },
    triangleRight: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 30,
      borderLeftWidth: 30,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: colors.grey.dark,
      borderLeftColor: 'transparent',
    },
    imageContainer: {
      width: '100%',
      height: '60%',
      overflow: 'hidden',
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      height: pxToDp(586),
    },
    details: {
      paddingVertical: spacing.small,
      paddingHorizontal: spacing.large,
    },
  });
export default styles;
