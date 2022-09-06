import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MyOrderScreen from '../screens/profile/MyOrderScreen';
import OrderDetailScreen from '../screens/profile/OrderDetailScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {ScreenName} from '../shared/constants/ScreenName';
import TestComponent from '../tests/TestComponents';

const Stack = createNativeStackNavigator();
const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenName.profileScreen}>
      <Stack.Screen
        name={ScreenName.testComponent}
        component={TestComponent}
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
    </Stack.Navigator>
  );
};
export default ProfileNavigator;
