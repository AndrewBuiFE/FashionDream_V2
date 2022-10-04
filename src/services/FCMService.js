import { firebase } from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import { setStoringData } from '../controllers/async-storage/AsyncStorage';
export class FCMService {
  registerAppWithFCM = async () => {
    await firebase.messaging().registerDeviceForRemoteMessages();
    await firebase.messaging().setAutoInitEnabled(true);
  };
  register = (onRegister, onNotification, onOpenNotification) => {
    this.checkPermission(onRegister);
    this.createNotificationListeners(
      onRegister,
      onNotification,
      onOpenNotification,
    );
  };
  checkPermission = onRegister => {
    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          this.getToken(onRegister);
        } else {
          this.requestPermission(onRegister);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  getToken = onRegister => {
    firebase
      .messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          setStoringData('@fcmToken', fcmToken);
          onRegister(fcmToken);
        } else {
          // console.log('[FCMService] User does not have a device token');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  requestPermission = onRegister => {
    firebase
      .messaging()
      .requestPermission()
      .then(() => {
        this.getToken(onRegister);
      })
      .catch(err => {
        console.log(err);
      });
  };
  deleteToken = () => {
    firebase
      .messaging()
      .deleteToken()
      .catch(err => {
        console.log(err);
      });
  };
  createNotificationListeners = (
    onRegister,
    onNotification,
    onOpenNotification,
  ) => {
    firebase.messaging().onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage) {
        const notification = remoteMessage.notification;
        onOpenNotification(notification);
      }
    });
    firebase.messaging().onMessage(async remoteMessage => {
      if (remoteMessage) {
        let notification = null;
        if (Platform.OS === 'ios') {
          notification = remoteMessage.data.notification;
        } else {
          notification = remoteMessage.notification;
        }
        onNotification(notification);
      }
    });
    firebase.messaging().onTokenRefresh(fcmToken => {
      console.log('Refreshing token...');
      onRegister(fcmToken);
    });
  };

  unRegister = async () => {
    console.log('Unregistered');
    await firebase
      .messaging()
      .unregisterDeviceForRemoteMessages()
      .then(result => {
        console.log(result);
      });
  };
}
