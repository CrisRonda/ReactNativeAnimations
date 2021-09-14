import {StyleSheet} from 'react-native';

const style = ({spacing, colors, pxToDp}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      width: '100%',
      minHeight: pxToDp(349),
      height: 'auto',
      borderRadius: spacing.small,
      marginBottom: spacing.medium,
      padding: spacing.small,
      elevation: 4,
      shadowColor: colors.grey.main,
      shadowOffset: {width: 1, height: 3},
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      marginBottom: spacing.small,
    },
    spaceBetween: {
      justifyContent: 'space-between',
    },
    icon: {
      marginRight: spacing.medium,
    },
    image: {
      height: pxToDp(400),
      width: '100%',
      backgroundColor: 'green',
      marginBottom: spacing.medium,
    },
  });
export default style;
