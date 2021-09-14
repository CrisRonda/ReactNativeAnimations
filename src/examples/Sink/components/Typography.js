import React from 'react';
import {View} from 'react-native';
import Text from '@components/Text';
import typography from '@theme/typography';
import _ from 'lodash';

const Typography = () => {
  const variantNames = _.keys(typography);
  const variantValues = _.values(typography);
  return (
    <View>
      {variantNames.map((item, index) => {
        const currentValue = variantValues[index];
        return (
          <View key={item} style={{marginBottom: 16}}>
            <Text variant={item} style={{textTransform: 'capitalize'}}>
              {item}
            </Text>
            <Text variant="body2">{`Typeface: ${currentValue?.fontFamily} Weight: ${currentValue.fontWeight} Size: ${currentValue.fontSize}px`}</Text>
          </View>
        );
      })}
    </View>
  );
};
export default Typography;
