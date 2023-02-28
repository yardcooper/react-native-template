import React from 'react';
import { IntlProvider } from 'react-intl';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppNavigator from './AppNavigator';
import { ToastProvider } from './hooks/useToast';
import { getCurrentTranslation } from './intl';
import { persistor, store } from './store';

const AppBody = () => {
  // Here you can supply the current and default language used for translation.
  // This can come from a store value or a library implementation such as expo-localization
  const language = 'en';

  return (
    <>
      <StatusBar />
      <StoreProvider store={store}>
        <IntlProvider
          messages={getCurrentTranslation(language)}
          defaultLocale="en"
          locale={language}
        >
          <SafeAreaProvider>
            <ToastProvider>
              <PersistGate persistor={persistor}>
                <AppNavigator />
              </PersistGate>
            </ToastProvider>
          </SafeAreaProvider>
        </IntlProvider>
      </StoreProvider>
    </>
  );
};

const App = () => (
  <StoreProvider store={store}>
    <AppBody />
  </StoreProvider>
);

export default App;
