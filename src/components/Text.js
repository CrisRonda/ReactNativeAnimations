import React from 'react';
import {useTheme} from '@theme';
import {Text as TextRN} from 'react-native';
import _ from 'lodash';
const Text = ({
  children,
  variant,
  color,
  style,
  textSize,
  mb,
  mr,
  ml,
  mt,
  ...props
}) => {
  const {colors, typography, pxToDp} = useTheme();
  const variantStyle = _.get(typography, variant, typography.body1);
  const variantColor = _.get(colors, color, colors.text);
  const customSize = textSize && {fontSize: pxToDp(textSize)};
  const customMb = mb && {marginBottom: pxToDp(mb)};
  const customMr = mr && {marginRight: pxToDp(mr)};
  const customMl = ml && {marginLeft: pxToDp(ml)};
  const customMt = mt && {marginTop: pxToDp(mt)};
  return (
    <TextRN
      style={[
        variantStyle,
        {color: variantColor},
        customSize,
        customMb,
        customMt,
        customMl,
        customMr,
        style,
      ]}
      {...props}>
      {children}
    </TextRN>
  );
};

export default Text;
