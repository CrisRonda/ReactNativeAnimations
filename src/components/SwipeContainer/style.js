import {StyleSheet} from 'react-native';

const style = ({spacing, colors}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      paddingTop: spacing.medium,
      paddingHorizontal: spacing.large,
      backgroundColor: colors.background,
    },
  });
export default style;
