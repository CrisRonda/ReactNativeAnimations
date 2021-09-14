import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import {useTheme} from '@theme';

export default function Icon({set, size = 56, color, ...props}) {
  const {pxToDp, colors} = useTheme();
  const sizeDp = pxToDp(size);
  const colorIcon = color ? color : colors.primary.main;

  switch (set) {
    case 'AntDesign':
      return <AntDesignIcon {...props} size={sizeDp} color={colorIcon} />;
    case 'Entypo':
      return <EntypoIcon {...props} size={sizeDp} color={colorIcon} />;
    case 'EvilIcons':
      return <EvilIconsIcon {...props} size={sizeDp} color={colorIcon} />;
    case 'Feather':
      return <FeatherIcon {...props} size={sizeDp} color={colorIcon} />;
    case 'FontAwesome':
      return <FontAwesomeIcon {...props} size={sizeDp} color={colorIcon} />;
    case 'Foundation':
      return <FoundationIcon {...props} size={sizeDp} color={colorIcon} />;
    case 'Ionicons':
      return <IoniconsIcon {...props} size={sizeDp} color={colorIcon} />;
    case 'MaterialIcons':
      return <MaterialIconsIcon {...props} size={sizeDp} color={colorIcon} />;
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIconsIcon
          {...props}
          size={sizeDp}
          color={colorIcon}
        />
      );
    case 'Octicons':
      return <OcticonsIcon {...props} size={sizeDp} color={colorIcon} />;
    case 'Zocial':
      return <ZocialIcon {...props} size={sizeDp} color={colorIcon} />;
    case 'SimpleLineIcons':
      return <SimpleLineIconsIcon {...props} size={sizeDp} color={colorIcon} />;
    default:
      return <AntDesignIcon {...props} size={sizeDp} color={colorIcon} />;
  }
}
