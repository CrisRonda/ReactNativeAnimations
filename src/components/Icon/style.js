import {StyleSheet} from 'react-native';
import {pxToDp} from '@theme/lib';

const styles = StyleSheet.create({
  container: {
    height: pxToDp(78),
    width: pxToDp(78),
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.25,
  },
});
export default styles;
