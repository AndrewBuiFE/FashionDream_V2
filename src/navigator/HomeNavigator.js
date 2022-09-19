import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import ForgotPassScreen from '../screens/auth/ForgotPassScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import CategoriesScreen from '../screens/category/CategoriesScreen';
import ShippingAddressScreen from '../screens/checkout/ShippingAddressScreen';
import IntroScreen from '../screens/intro/IntroScreen';
import HomeScreen from '../screens/mainpage/HomeScreen';
import ProductCardScreen from '../screens/product/ProductCardScreen';
import {ScreenName} from '../shared/constants/ScreenName';

const Stack = createNativeStackNavigator();
const HomeNavigator = ({navigation, route}) => {
  console.log('Navigation: ', route);
  const {appFirstRun} = useSelector(state => state.system);
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = [ScreenName.loginScreen, ScreenName.introScreen];

    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      initialRouteName={
        appFirstRun ? ScreenName.introScreen : ScreenName.homeScreen
      }
      screenOptions={{}}>
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
      <Stack.Screen
        name={ScreenName.introScreen}
        component={IntroScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeNavigator;
