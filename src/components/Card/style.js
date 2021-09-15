import {StyleSheet} from 'react-native';

const style = ({spacing, colors, pxToDp}) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      width: '100%',
      minHeight: pxToDp(349),
      height: 'auto',
      borderRadius: spacing.small,
      marginBottom: spacing.medium,
      elevation: 4,
      shadowColor: colors.grey.main,
      shadowOffset: {width: 1, height: 3},
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    row: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: spacing.small,
      padding: spacing.small,
    },
    spaceBetween: {
      justifyContent: 'space-between',
    },
    icon: {
      marginRight: spacing.medium,
    },
    image: {
      height: pxToDp(600),
      width: '100%',
      backgroundColor: 'green',
      marginBottom: spacing.medium,
      zIndex: -1,
    },
    options: {
      width: '45%',
      backgroundColor: colors.background,
      padding: spacing.medium,
      height: 'auto',
      minHeight: pxToDp(123),
      maxHeight: pxToDp(350),
      position: 'absolute',
      zIndex: 888,
      right: pxToDp(20),
      top: '70%',
      borderRadius: spacing.large,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.grey.light,
    },
    optionItem: {
      height: pxToDp(120),
      paddingVertical: spacing.small,
    },
    header: {
      marginLeft: spacing.large,
    },
  });
export default style;
