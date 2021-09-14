import React, {useContext, createContext, useEffect, useState} from 'react';

import {useColorScheme} from 'react-native';
import {colors, lightColors, darkColors} from './colors';
import typography from './typography';
import spacing from './spacing';
import {pxToDp} from './lib';

const initialState = {
  isDark: false,
  colors: {...lightColors, ...colors},
  typography,
  spacing,
  setScheme: () => {},
  pxToDp,
};
export const ThemeContext = createContext(initialState);

const ThemeProvider = props => {
  // Getting the device color theme, this will also work with react-native-web
  const colorScheme = useColorScheme(); // Can be dark | light | no-preference
  /*
   * To enable changing the app theme dynamicly in the app (run-time)
   * we're gonna use useState so we can override the default device theme
   */
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  // Listening to changes of device appearance while in run-time
  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    ...initialState,
    isDark,
    // Chaning color schemes according to theme
    colors: {...colors, ...(isDark ? darkColors : lightColors)},
    // Overrides the isDark value will cause re-render inside the context.
    setScheme: value => setIsDark(value),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
