import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CartScreen from '../screens/cart/CartScreen';
import {ScreenName} from '../shared/constants/ScreenName';

const Stack = createNativeStackNavigator();
const CartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.cartScreen}
        component={CartScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};
export default CartNavigator;
