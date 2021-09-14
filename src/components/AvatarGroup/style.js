import {StyleSheet} from 'react-native';

const style = ({spacing}) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      marginBottom: spacing.medium,
    },
  });
export default style;
