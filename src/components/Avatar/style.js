import {StyleSheet} from 'react-native';
import {pxToDp} from '../../theme/lib';
const SMALL_SIZE = pxToDp(80);
const MEDIUM_SIZE = SMALL_SIZE * 1.5;
const LARGE_SIZE = SMALL_SIZE * 2;
export const variantText = {
  small: 'button1',
  medium: 'h4',
  large: 'h2',
};
const style = () =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    small: {
      width: SMALL_SIZE,
      height: SMALL_SIZE,
      borderRadius: SMALL_SIZE / 2,
    },
    medium: {
      width: MEDIUM_SIZE,
      height: MEDIUM_SIZE,
      borderRadius: MEDIUM_SIZE / 2,
    },
    large: {
      width: LARGE_SIZE,
      height: LARGE_SIZE,
      borderRadius: LARGE_SIZE / 2,
    },
  });
export default style;
