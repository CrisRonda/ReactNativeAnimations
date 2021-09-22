import {StyleSheet} from 'react-native';

const styles = ({pxToDp, dimensions}) =>
  StyleSheet.create({
    swipe: {
      height: (9 / 16) * 2 * dimensions.width,
      width: dimensions.width,
      backgroundColor: 'black',
    },
    gradient: {
      width: '100%',
      height: '20%',
      position: 'absolute',
      bottom: 0,
    },
    gradientTop: {
      width: '100%',
      height: '10%',
      position: 'absolute',
      top: 0,
      zIndex: 3,
    },
  });
export default styles;
