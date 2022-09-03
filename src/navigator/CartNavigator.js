import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CartScreen from '../screens/cart/CartScreen';
import CheckoutScreen from '../screens/checkout/CheckoutScreen';
import PaymentCardScreen from '../screens/checkout/PaymentCardScreen';
import {ScreenName} from '../shared/constants/ScreenName';

const Stack = createNativeStackNavigator();
const CartNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenName.paymentCardScreen}>
      <Stack.Screen
        name={ScreenName.cartScreen}
        component={CartScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.checkoutScreen}
        component={CheckoutScreen}
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
    </Stack.Navigator>
  );
};
export default CartNavigator;
