import React, {useEffect} from 'react';
import {I18nextProvider} from 'react-i18next';
import CodePush from 'react-native-code-push';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import i18next from './i18n';
import AppNavigator from './src/navigator/AppNavigator';
import AppAuthen from './src/screens/auth/AppAuthen';
import {FCMService} from './src/services/FCMService';
import {persistor, store} from './src/stores/configureStore';
enableScreens();
// var localNotificationService = new LocalNotificationService();
var fcmService = new FCMService();
let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};
const App: () => Node = () => {
  useEffect(() => {
    // fcm service
    function onRegister(token) {
      console.log('[App] onRegister: ', token);
    }
    function onNotification(notification) {
      console.log('What notification is it?', notification);
    }
    function onOpenNotification(notification) {
      console.log('Open notification from background', notification);
    }
    // fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    // local push notification
    // localNotificationService.configure(onOpenNotification);

    return () => {
      // console.log('[App] unRegister');
      fcmService.unRegister();
      // localNotificationService.unregister();
    };
  }, []);
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
          <AppAuthen />
        </PersistGate>
      </I18nextProvider>
    </Provider>
  );
};

export default CodePush(codePushOptions)(App);
