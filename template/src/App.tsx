import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';

import AppNavigator from './AppNavigator';
import { store } from './store';

const App = () => {
  return (
    <>
      <StatusBar />
      <StoreProvider store={store}>
        <AppNavigator />
      </StoreProvider>
    </>
  );
};

export default App;
