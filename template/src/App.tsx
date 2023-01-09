import React from 'react';
import { IntlProvider } from 'react-intl';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';

import AppNavigator from './AppNavigator';
import { getCurrentTranslation } from './intl';
import { store } from './store';

const App = () => {
  return (
    <>
      <StatusBar />
      <StoreProvider store={store}>
        {/* TODO: get locale from a custom store if necessary */}
        <IntlProvider
          messages={getCurrentTranslation('en')}
          defaultLocale="en"
          locale="en"
        >
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </IntlProvider>
      </StoreProvider>
    </>
  );
};

export default App;
