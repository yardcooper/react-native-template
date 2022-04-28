import { locale } from 'expo-localization';
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
        <IntlProvider
          messages={getCurrentTranslation(locale.slice(0, 2))}
          defaultLocale="de"
          locale={locale.slice(0, 2)}
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
