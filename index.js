/**
 * @format
 */
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import reactotron from 'reactotron-react-native';
reactotron.display({
  name: 'KNOCK KNOCK',
  preview: "Who's there?",
  value: 'Orange.',
});

reactotron.display({
  name: 'ORANGE',
  preview: 'Who?',
  value: "Orange you glad you don't know me in real life?",
  important: true,
});

// Register background handler
import {firebase} from '@react-native-firebase/messaging';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

firebase.messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    return null;
  }
  return <App />;
}
AppRegistry.registerComponent(appName, () => HeadlessCheck);
