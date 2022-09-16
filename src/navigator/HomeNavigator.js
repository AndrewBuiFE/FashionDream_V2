import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import ForgotPassScreen from '../screens/auth/ForgotPassScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import CategoriesScreen from '../screens/category/CategoriesScreen';
import ShippingAddressScreen from '../screens/checkout/ShippingAddressScreen';
import HomeScreen from '../screens/mainpage/HomeScreen';
import ProductCardScreen from '../screens/product/ProductCardScreen';
import {ScreenName} from '../shared/constants/ScreenName';

const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  const {appFirstRun} = useSelector(state => state.system);
  return (
    <Stack.Navigator
      initialRouteName={
        appFirstRun ? ScreenName.signupScreen : ScreenName.homeScreen
      }>
      <Stack.Screen
        name={ScreenName.loginScreen}
        component={LoginScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.signupScreen}
        component={SignupScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.forgotPassScreen}
        component={ForgotPassScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.homeScreen}
        component={HomeScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.categoriesScreen}
        component={CategoriesScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.productCardScreen}
        component={ProductCardScreen}
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
    </Stack.Navigator>
  );
};
export default HomeNavigator;
