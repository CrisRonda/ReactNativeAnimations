import React from 'react';
import MainNavigation from '@navigation';
import ThemeProvider from '@theme';
const App = () => {
  return (
    <ThemeProvider>
      <MainNavigation />
    </ThemeProvider>
  );
};

export default App;
