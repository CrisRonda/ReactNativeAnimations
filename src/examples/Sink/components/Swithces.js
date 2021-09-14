import React, {useState} from 'react';
import Switch from '@components/Switch';
import ThemeSwitch from '@components/ThemeSwitch';

const Switches = () => {
  const [isEnabled, setIsEnabled] = useState({0: false, 1: true});
  const onChange = id => setIsEnabled(bef => ({...bef, [id]: !bef[id]}));
  return (
    <>
      <ThemeSwitch />
      <Switch
        label="Configuration 1"
        isEnabled={isEnabled[0]}
        setIsEnabled={() => onChange(0)}
      />
      <Switch
        label="Configuration 2"
        isEnabled={isEnabled[1]}
        setIsEnabled={() => onChange(1)}
      />
      <Switch label="Configuration 3" switchProps={{disabled: true}} />
    </>
  );
};
export default Switches;
