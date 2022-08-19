import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginScreen from '../screens/auth/LoginScreen';
import {ScreenName} from '../shared/constants/ScreenName';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName={ScreenName.loginScreen}>
        <Stack.Screen
          name={ScreenName.testComponent}
          component={TestComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.loginScreen}
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name={ScreenName.loginScreen} component={LoginScreen} options={{
          .
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
