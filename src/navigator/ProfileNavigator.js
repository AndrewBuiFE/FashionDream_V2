import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/auth/LoginScreen';
import PaymentCardScreen from '../screens/checkout/PaymentCardScreen';
import ShippingAddressScreen from '../screens/checkout/ShippingAddressScreen';
import MyOrderScreen from '../screens/profile/MyOrderScreen';
import OrderDetailScreen from '../screens/profile/OrderDetailScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingScreen from '../screens/profile/SettingScreen';
import ReviewScreen from '../screens/review/ReviewScreen';
import {ScreenName} from '../shared/constants/ScreenName';
import TestApiScreen from '../tests/TestApi';
import TestComponent from '../tests/TestComponents';
import TestScreen from '../tests/TestScreen';

const Stack = createNativeStackNavigator();
const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenName.profileScreen}>
      <Stack.Screen
        name={ScreenName.testScreen}
        component={TestScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.testComponent}
        component={TestComponent}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.testApi}
        component={TestApiScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.profileScreen}
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.myOrderScreen}
        component={MyOrderScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.orderDetailScreen}
        component={OrderDetailScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.settingScreen}
        component={SettingScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.shippingAddressScreen}
        component={ShippingAddressScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.paymentCardScreen}
        component={PaymentCardScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.reviewScreen}
        component={ReviewScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.loginScreen}
        component={LoginScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};
export default ProfileNavigator;
