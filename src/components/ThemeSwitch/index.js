import React from 'react';
import Switch from '@components/Switch';
import {useTheme} from '@theme';

const ThemeSwitch = () => {
  const {setScheme, isDark} = useTheme();
  const onChange = () => setScheme(!isDark);
  return (
    <Switch
      label={isDark ? 'Change to light' : 'Change to dark'}
      isEnabled={isDark}
      setIsEnabled={onChange}
    />
  );
};
export default ThemeSwitch;
