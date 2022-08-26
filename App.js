import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import i18next from './i18n';
import AppNavigator from './src/navigator/AppNavigator';
import {persistor, store} from './src/stores/configureStore';

enableScreens();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
