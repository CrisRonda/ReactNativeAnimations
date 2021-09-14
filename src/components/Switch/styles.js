import {StyleSheet} from 'react-native';

const styles = ({colors, spacing}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.medium,
    },
  });
export default styles;
