import {StyleSheet} from 'react-native';

const styles = ({colors, spacing}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.medium,
    },
  });
export default styles;
